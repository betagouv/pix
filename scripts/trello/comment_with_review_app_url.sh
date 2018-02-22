#!/usr/bin/env bash

set -e
set -u

API_URL="https://api.trello.com/1"
BOARD_ID="577a53d10c4ba2372878ed14"
CREDENTIALS="key=$TRELLO_API_KEY&token=$TRELLO_TOKEN"

CARD_SHORT_ID=${CIRCLE_BRANCH%%-*}
CARD=$(curl "$API_URL/boards/$BOARD_ID/cards/$CARD_SHORT_ID?$CREDENTIALS")

CARD_ID=$(echo "$CARD" | jq .id | tr -d '"')
REVIEW_APP_URL="http://$CIRCLE_BRANCH.pix-dev.ovh"

curl -X POST "$API_URL/cards/$CARD_ID/actions/comments?text='$REVIEW_APP_URL'&$CREDENTIALS"
