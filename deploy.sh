#!/bin/bash

# stop on first error
set -euo pipefail

deployWorktree='../rwns-deployment'
deployBranch="deployment"
main='docs-main'
prefix='docs-'
othersGlob='docs-v*'

echo 'checking working tree is clean'
if [ -n "`git status --porcelain --untracked-files=no`"  ]
then
  echo 'WORKING TREE NOT CLEAN'
  exit -1
fi

echo 'checking deployment worktree is OK'
(
  if [ ! -e "$deployWorktree" ]
  then
    echo "creating deployment worktree at '$deployWorktree'"
    if ! git worktree add "$deployWorktree" "$deployBranch"
    then
      echo 'COULD NOT CREATE DEPLOYMENT WORKTREE'
      exit -1
    fi
  fi

  cd "$deployWorktree"

  if ! git rev-parse --is-inside-work-tree > /dev/null
  then
    echo 'DEPLOYMENT TREE NOT A GIT WORKTREE'
    exit -1
  fi

  if [ "`git status | head -1`" != "On branch $deployBranch"  ]
  then
    echo "DEPLOYMENT TREE NOT ON BRANCH '$deployBranch'"
    exit -1
  fi

  if [ -n "`git status --porcelain --untracked-files=yes`"  ]
  then
    echo 'DEPLOYMENT TREE NOT CLEAN'
    exit -1
  fi
)

echo "working"

# a helper function to check that any file exists by glob
exists() {
    [ -e "$1" ]
}

if [ -d "$main" ]
then
  echo "updating '$main'"

  [ -e "$deployWorktree/docs-stash" ] && rm -r "$deployWorktree/docs-stash"
  mkdir "$deployWorktree/docs-stash"

  if exists "$deployWorktree/docs/"v*
  then
    echo "stashing v* out of the way"
    mv "$deployWorktree/docs/"v*/ "$deployWorktree/docs-stash/"
  fi

  [ -d "$deployWorktree/docs" ] && rm -r "$deployWorktree/docs/"
  mv "$main" "$deployWorktree/docs/"

  if exists "$deployWorktree/docs-stash/"v*
  then
    echo "restoring stashed v*"
    mv "$deployWorktree/docs-stash/"v*/ "$deployWorktree/docs/"
  fi

  rmdir "$deployWorktree/docs-stash"
fi

for dir in $othersGlob
do
  if [ -d "$dir" ]
  then
    target="$deployWorktree/docs/${dir#$prefix}"
    echo "updating '$dir' into '$target'"
    [ -e "$target" ] && rm -r "$target"
    mv "$dir" "$target"
  fi
done


(
  cd "$deployWorktree"

  if [ -n "`git status --porcelain --untracked-files=yes`"  ]
  then
    if ! git add docs > /dev/null
    then
      echo "COULD NOT GIT ADD, PLEASE CLEAN UP $deployWorktree"
      exit -1
    fi

    if ! git commit -m ':rocket:' > /dev/null
    then
      echo "COULD NOT COMMIT, PLEASE CLEAN UP $deployWorktree"
      exit -1
    fi

    echo "-----------------------------------------------------------------"
    echo "committed - check everything, if it's OK, push with the following"
    echo "git -C '$deployWorktree' push"
    echo "-----------------------------------------------------------------"
    git show HEAD --name-only --pretty=""
  else
    echo "no changes to commit"
  fi
)

echo "ok"
