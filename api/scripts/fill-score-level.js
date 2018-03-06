#! /usr/bin/env node

const request = require('request-promise-native');

function parseArgs(argv) {
  const [_a, _b, _c, ...args] = argv;
  return args;
}


function buildRequestObject(baseUrl, assessmentId) {
  return {
    baseUrl: baseUrl,
    method: 'POST',
    url: `/api/assessment-ratings/`,
    json: true,
    body: {
        data: {
          attributes: {
            'estimated-level': null,
            'pix-score': null
          },
          relationships: {
            assessment: {
              data: {
                type: 'assessments',
                id: assessmentId
              }
            }
          },
          type: 'assessment-ratings'
        }
      },
  };
}
function makeRequest(config) {
  return request(config);
}

function main() {

  const baseUrl = process.argv[2];
  const ids = parseArgs(process.argv);
  const requests = Promise.all(
    ids.map(id => buildRequestObject(baseUrl, id))
      .map(requestObject => makeRequest(requestObject))
  );

  requests.then(() => {console.log('OK')});
}

main();
