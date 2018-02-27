#!/usr/bin/env bash

set -e
set -u

API_VERSION="1"
API_URL="https://api.trello.com/$API_VERSION"
BOARD_ID="577a53d10c4ba2372878ed14"
CARD_SHORT_ID=${CIRCLE_BRANCH%%-*}
CREDENTIALS="key=$TRELLO_API_KEY&token=$TRELLO_TOKEN"
CARD_ID=$(curl "$API_URL/boards/$BOARD_ID/cards/$CARD_SHORT_ID?$CREDENTIALS" | jq .id | tr -d '"')

CARD_COMMENTS=$(curl "$API_URL/cards/$CARD_ID/actions?$CREDENTIALS" | jq '.[].data.text')
REVIEW_APP_URL="http://$CIRCLE_BRANCH.pix-dev.ovh"
if [[ $CARD_COMMENTS =~ .*$REVIEW_APP_URL.* ]]
then
    echo "Review app url already found in card comments. No need to add it again"
else
    curl -X POST "$API_URL/cards/$CARD_ID/actions/comments?text='$REVIEW_APP_URL'&$CREDENTIALS"
fi
