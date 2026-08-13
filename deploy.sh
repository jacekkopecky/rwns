#!/bin/bash

# stop on first error
set -euo pipefail

main='docs-main'
prefix='docs-'
others='docs-v*'

echo 'checking working tree is clean'
if [ -n "`git status --porcelain --untracked-files=no`"  ]
then
  echo 'WORKING TREE NOT CLEAN'
  exit -1
fi

deployBranch="deployment"
currentBranch=`git branch --show-current`


echo 'checking that deployment version of deploy.sh is the same'
if ! (git show "$deployBranch":deploy.sh | cmp /dev/stdin deploy.sh)
then
  echo 'deploy.sh SCRIPT NOT THE SAME IN THE BRANCH'
  echo
  echo 'to update it:'
  echo
  echo "git checkout '$deployBranch' && git checkout main -- deploy.sh && git commit -m 'update deploy.sh' -- deploy.sh && git checkout '$currentBranch'"
  echo
  exit -1
fi

echo "working"
git checkout "$deployBranch"

# a helper function to check that any file exists by glob
exists() {
    [ -e "$1" ]
}

if [ -d "$main" ]
then
  echo "updating '$main'"

  [ -e docs-stash ] && rm -r docs-stash
  mkdir docs-stash

  if exists "docs/v*"
  then
    mv docs/v*/ docs-stash/
  fi

  [ -d "docs" ] && rm -r docs/
  mv "$main" docs/

  if exists "docs-stash/v*"
  then
    mv docs-stash/v*/ docs/
  fi

  rmdir docs-stash
fi

for dir in $others
do
  if [ -d "$dir" ]
  then
    target="${dir#$prefix}"
    echo "updating '$dir' into '$target'"
    [ -e docs/"$target" ] && rm -r docs/"$target"
    mv "$dir" docs/"$target"
  fi
done


if [ -n "`git status --porcelain --untracked-files=yes`"  ]
then
  git add docs
  git commit -m ':rocket:'
  echo "-----------------------------------------------------------------"
  echo "committed - check everything, if it's OK, push with the following"
  echo "git push origin '$deployBranch'"
  echo "-----------------------------------------------------------------"
else
  echo "no changes to commit"
fi

git checkout "$currentBranch"
echo "ok"
