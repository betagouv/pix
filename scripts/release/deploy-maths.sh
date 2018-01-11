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

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo -e "Updating ${GREEN}maths${RESET_COLOR} environment.\n"

echo -e "Updating local version of ${YELLOW}master${RESET_COLOR} branch.\n"
git checkout master
git pull

echo -e "Rebasing ${YELLOW}pix-maths${RESET_COLOR} on ${YELLOW}master${RESET_COLOR}.\n"
git checkout maths
git pull
git rebase master

git commit -m "[RELEASE] Updating the pix-maths environment to the new version ${PACKAGE_VERSION}." --allow-empty

git push origin maths --force

git checkout dev

echo -e "${YELLOW}Maths${RESET_COLOR} environement is updated to ${YELLOW}master${RESET_COLOR}.\n"
echo -e "Circle CI will deploy the new version within few minutes"
