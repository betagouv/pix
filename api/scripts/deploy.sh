#! /bin/bash

BUILD_ENV=$1
APP="undefined"

GIT_CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD | tr -d "\n")

[ -z $BUILD_ENV ] && {
  echo '$BUILD_ENV is unset, which usually means push to api-production on dokku. We don t do that anymore.'
  echo 'exiting'
  exit 0
}

case $BUILD_ENV in
  "integration")
    # if no <BUILD_OUTPUT> argument is given, use the branch name
    APP=$GIT_CURRENT_BRANCH
  ;;
  "staging")
    APP="api-staging"
  ;;
esac

tmpdir=$(mktemp -d)
cd ..
git clone . $tmpdir
pushd $tmpdir
git filter-branch --prune-empty --subdirectory-filter api HEAD

# Create un fichier d'overidde de la conf API

# Do we have the remote locally ?
$(git remote | grep $APP) || {
    # nope, add it
    git remote add $APP dokku@pix-app.ovh:${APP}
} && true

git push $APP HEAD:master --force

popd
rm -rf $tmpdir
