#! /bin/bash

# Exit on errors, pipe errors and undefined variables
set -euo pipefail

export COVERAGE=true

ember test | tee out.log

tap-xunit < out.log > $CIRCLE_TEST_REPORTS/junit/test-results.xml
rm -f out.log

