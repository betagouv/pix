#! /bin/bash

[ -z $GITHUB_TOKEN ] && { echo 'FATAL: $GITHUB_TOKEN is absent !'; exit 1}
[ -z $CIRCLE_PR_NUMBER ] && { echo 'FATAL: $CIRCLE_PR_NUMBER is absent !'; exit 1}
[ -z $CIRCLE_BRANCH ] && { echo 'FATAL: $CIRCLE_BRANCH is absent !'; exit 1}

curl \
	-u twickham:$GITHUB_TOKEN \
	-X POST "https://api.github.com/repos/sgmap/pix-live/issues/${CIRCLE_PR_NUMBER}/comments" \
	--data "{\"body\":\"Holly joly ! I've deployed this PR to http://${CIRCLE_BRANCH}.pix.beta.gouv.fr. Please check it out !\"}"\
	--verbose
