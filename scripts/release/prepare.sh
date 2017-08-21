#!/usr/bin/env bash

set -e # https://www.gnu.org/software/bash/manual/bashref.html#The-Set-Builtin
set -o pipefail

# Set colors
RESET_COLOR="$(tput sgr0)"
BOLD=$(tput smso)
OFFBOLD=$(tput rmso)

# Colors (bold)
RED="$(tput bold ; tput setaf 1)"
GREEN="$(tput bold ; tput setaf 2)"
YELLOW="$(tput bold ; tput setaf 3)"
BLUE="$(tput bold ; tput setaf 4)"
CYAN="$(tput bold ; tput setaf 6)"

# Set New Version
RELEASE_TYPE=$1

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo $RELEASE_TYPE
echo $PACKAGE_OLD_VERSION

#npm --no-git-tag-version version $RELEASE_TYPE -m "Update $PACKAGE_OLD_VERSION to the next $RELEASE_TYPE version "
