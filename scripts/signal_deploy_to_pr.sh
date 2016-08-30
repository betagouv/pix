#! /bin/bash

curl \
	-u twickham:$GITHUB_TOKEN \
	-X POST "https://api.github.com/repos/sgmap/pix-live/issues/${CIRCLE_PR_NUMBER}/comments" \
	--data "{\"body\":\"Holly joly ! I've deployed this PR to http://${CIRCLE_BRANCH}.pix.beta.gouv.fr. Please check it out !\"}"\
	--verbose
