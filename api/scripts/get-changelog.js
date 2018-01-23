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

function main() {
  const milestone = Number(process.argv[2]);
  let listOfPRForChangeLog = '';

  makeRequest(buildRequestObject())
    .then((listOfPullRequests)=> {
      const listOfPullRequestForMilestone = listOfPullRequests.filter(pr => {
        if(pr.milestone) return pr.milestone.number === milestone;
      });

      // VERSION
      listOfPRForChangeLog +='## '+listOfPullRequestForMilestone[0].milestone.title;
      // DATE
      listOfPRForChangeLog +=' ('+moment().format('DD/MM/YYYY')+') \n\n';
      // PR
      listOfPullRequestForMilestone.forEach(pr => listOfPRForChangeLog += displayPullRequest(pr));

      console.log(listOfPRForChangeLog);
    });
}

/*=================== tests =============================*/

if (process.env.NODE_ENV !== 'test') {
  main();
} else {
  const { describe, it } = require('mocha');
  const { expect } = require('chai');

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
}
