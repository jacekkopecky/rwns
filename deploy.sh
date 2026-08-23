#!/bin/bash

# stop on first error
set -euo pipefail

deployWorktree='../rwns-deployment'
deployBranch="deployment"
main='docs-main'
prefix='docs-'
others='docs-v*'

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

if [ -d "$deployWorktree/$main" ]
then
  echo "updating '$main'"

  [ -e "$deployWorktree/docs-stash" ] && rm -r "$deployWorktree/docs-stash"
  mkdir "$deployWorktree/docs-stash"

  if exists "$deployWorktree/docs/v*"
  then
    mv "$deployWorktree/"docs/v*/ "$deployWorktree/docs-stash/"
  fi

  [ -d "$deployWorktree/docs" ] && rm -r "$deployWorktree/docs/"
  mv "$main" "$deployWorktree/docs/"

  if exists "$deployWorktree/docs-stash/v*"
  then
    mv "$deployWorktree/docs-stash/"v*/ "$deployWorktree/docs/"
  fi

  rmdir "$deployWorktree/docs-stash"
fi

for dir in $others
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
    git add docs
    git commit -m ':rocket:'
    echo "-----------------------------------------------------------------"
    echo "committed - check everything, if it's OK, push with the following"
    echo "git -C '$deployWorktree' push"
    echo "-----------------------------------------------------------------"
  else
    echo "no changes to commit"
  fi
)

echo "ok"
