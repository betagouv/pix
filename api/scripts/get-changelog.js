#! /usr/bin/env node
const request = require('request-promise-native');
const moment = require('moment');

function buildRequestObject(certificationId) {
  return {
    baseUrl: 'https://api.github.com/repos/betagouv/pix',
    url: '/pulls?state=closed&sort=updated&direction=desc',
    headers: {
      'User-Agent': 'jbuget'
    },
    json: true
  };
}

function makeRequest(config) {
  return request(config);
}

function displayPullRequest(pr) {
  const closeNumber = pr.title.indexOf(']');
  let title = pr.title.substring(closeNumber+1);
  title = (title.charAt(0) === ' ') ? title.substring(1) : title;
  title = (title.charAt(title.length-1) === ' ') ? title.substring(0, title.length - 1) : title;
  title = (title.charAt(title.length-1) === '.') ? title : title+'.';

  return `- [#${pr.number}](${pr.html_url}) ${title}\n`;
}

function filterPullRequest(pullrequests, milestone) {
  return pullrequests.filter(pr => {
    if(pr.milestone) return pr.milestone.number === milestone;
  });
}

function getHeadOfChangelog(pullrequest) {
  // VERSION
  let headOfChangelog = '## '+pullrequest.milestone.title;

  // DATE
  headOfChangelog +=' ('+moment().format('DD/MM/YYYY')+') \n\n';

  return headOfChangelog;
}

function main() {
  const milestone = Number(process.argv[2]);
  let changeLogForMilestone = '';

  makeRequest(buildRequestObject())
    .then((pullRequests)=> {
      const pullRequestsInMilestone = filterPullRequest(pullRequests, milestone);
      // HEAD
      changeLogForMilestone += getHeadOfChangelog(pullRequestsInMilestone[0]);
      // PR
      pullRequestsInMilestone.forEach(pr => changeLogForMilestone += displayPullRequest(pr));

      console.log(listOfPRForChangeLog);
    });
}

/*=================== tests =============================*/

if (process.env.NODE_ENV !== 'test') {
  main();
} else {
  const { describe, it } = require('mocha');
  const { expect } = require('chai');
  const sinon = require('sinon');
  describe('GET CHANGELOG', () => {

    describe('displayPullRequest', () => {
      const expectedLine = '- [#111](http://git/111) [BUGFIX] Résolution du problème de surestimation du niveau (US-389).\n'

      it('should return a line with correct format from correct PR name', () => {
        // given
        const pullRequest = {
          title : '[#111] [BUGFIX] Résolution du problème de surestimation du niveau (US-389).',
          number: 111,
          html_url : 'http://git/111'
        };
        // when
        const result = displayPullRequest(pullRequest);
        // then
        expect(result).to.equal(expectedLine);
      });
      it('should return a line with correct format from PR name with error', () => {
        // given
        const pullRequest = {
          title : '[#111][BUGFIX] Résolution du problème de surestimation du niveau (US-389) ',
          number: 111,
          html_url : 'http://git/111'
        };
        // when
        const result = displayPullRequest(pullRequest);
        // then
        expect(result).to.equal(expectedLine);
      });
    });

    describe('filterPullRequest', () => {
      it('should return only PR with the correct milestone', () => {
        // given
        const milestone = 1;
        const pullRequests = [
          {
            title: '[#111] [BUGFIX] TEST (US-11).',
            milestone: {
              number: milestone
            }
          },
          {
            title: '[#222] [BUGFIX] TRUC (US-22).',
            milestone: {
              number: 2
            }
          },
        ];
        const pullRequestsInMilestone = [
          {
            title: '[#111] [BUGFIX] TEST (US-11).',
            milestone: {
              number: milestone
            }
          }];
        // when
        const result = filterPullRequest(pullRequests, milestone);
        // then
        expect(result).to.deep.equal(pullRequestsInMilestone);
      });
    });

    describe('getHeadOfChangelog', () => {
      it('should return the head of changelog in correct value', () => {
        // given
        const clock = sinon.useFakeTimers();
        const headChangelog = '## v1.0.0 (01/01/1970) \n\n';
        const pullRequestsInMilestone = {
          title: '[#111] [BUGFIX] TEST (US-11).',
          milestone: {
            number: 1,
            title: 'v1.0.0'
          }
        };
        // when
        const result = getHeadOfChangelog(pullRequestsInMilestone);
        // then
        expect(result).to.equal(headChangelog);
        clock.restore();
      });
    });

  });

}
