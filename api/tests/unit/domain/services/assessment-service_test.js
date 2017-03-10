const { describe, it } = require('mocha');
const { expect } = require('chai');
const service = require('../../../../lib/domain/services/assessment-service');
const Answer = require('../../../../lib/domain/models/data/answer');
const Assessment = require('../../../../lib/domain/models/data/assessment');
const Challenge = require('../../../../lib/domain/models/referential/challenge');


function _buildChallenge(knowledgeTags) {
  const challenge = new Challenge({id: 'challenge_id'});
  challenge.knowledgeTags = knowledgeTags;
  return challenge;
}

function _buildAssessment(estimatedLevel, pixScore, notAcquiredKnowledgeTags, acquiredKnowledgeTags, cid) {
  const assessment = new Assessment({id: 'assessment_id'});
  assessment.attributes.estimatedLevel = estimatedLevel;
  assessment.attributes.pixScore = pixScore;
  assessment.attributes.notAcquiredKnowledgeTags = notAcquiredKnowledgeTags;
  assessment.attributes.acquiredKnowledgeTags = acquiredKnowledgeTags;
  assessment.cid = cid;
  return assessment;
}

function _buildAnswer(challengeId, result) {
  const answer = new Answer({id: 'answer_id'});
  answer.attributes.challengeId = challengeId;
  answer.attributes.result = result;
  return answer;
}


describe('Unit | Domain | Services | assessment-service', function () {

  describe('#_nextNode', function () {

    [
      { title: 'direction is increasing', node: 'web4', dir: 1, answer: 'web5' },
      { title: 'direction is decreasing', node: 'rechInfo3', dir: -1, answer: 'rechInfo2' },
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = service._nextNode(testCase.node, testCase.dir);
        expect(result).to.equal(testCase.answer);
      });
    });

  });

  describe('#_propagateKnowledge', function () {

    const allKnowledge = {'web3': 1, 'web4': 1, 'web5': 1, 'web6': 1};

    [
      { title: 'direction is increasing', startNode: 'web4', dir: 1, answer: ['web4', 'web5', 'web6'] },
      { title: 'direction is decreasing', startNode: 'web4', dir: -1, answer: ['web3', 'web4'] }
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = service._propagateKnowledge(allKnowledge, testCase.startNode, testCase.dir);
        expect(result.sort()).to.deep.equal(testCase.answer.sort());
      });
    });

  });

  describe('#populateScore', function () {

    const knowledgeData = {
      challengesById: {
        'challenge_web_1': _buildChallenge(['@web1']),
        'challenge_web_2': _buildChallenge(['@web2']),
        'challenge_url_1': _buildChallenge(['@url1'])
      },
      knowledgeTagSet: {'@web1': true, '@web2': true, '@url1': true}
    };

    const assessment = new Assessment({id: 'assessment_id'});

    const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');
    const partialAnswerWeb1 = _buildAnswer('challenge_web_1', 'partial');
    const incorrectAnswerUrl1 = _buildAnswer('challenge_url_1', 'ko');
    const correctAnswerUrl1 = _buildAnswer('challenge_url_1', 'ok');

    [
      { answers: [correctAnswerWeb2, incorrectAnswerUrl1], title: 'web2 correct, url1 incorrect', score: 12, level: 1, acquired: ['@web2', '@web1'], notAcquired: ['@url1'] },
      { answers: [partialAnswerWeb1, correctAnswerUrl1], title: 'web1 partial, url1 correct', score: 4, level: 0, acquired: ['@url1'], notAcquired: ['@web1', '@web2'] },
      { answers: [correctAnswerWeb2, correctAnswerUrl1], title: 'web2 correct, url1 correct', score: 16, level: 2, acquired: ['@web2', '@web1', '@url1'], notAcquired: [] },
    ].forEach(pattern => {

      it(`should compute ${pattern.score} and level ${pattern.level} when user pattern is ${pattern.title}`, function () {
        const scoredAssessment = service.populateScore(assessment, pattern.answers, knowledgeData);
        const expectedScoredAssessment = _buildAssessment(pattern.level, pattern.score, pattern.notAcquired, pattern.acquired, scoredAssessment.cid);
        expect(scoredAssessment).to.deep.equal(expectedScoredAssessment);
      });
    });

  });
});
