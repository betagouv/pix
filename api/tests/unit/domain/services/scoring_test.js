const { describe, it, expect, sinon } = require('../../../test-helper');

const scoring = require('../../../../lib/domain/services/scoring');
const Answer = require('../../../../lib/domain/models/data/answer');
const Assessment = require('../../../../lib/domain/models/data/assessment');
const Challenge = require('../../../../lib/domain/models/referential/challenge');


function _buildChallenge(knowledgeTags) {
  const challenge = new Challenge({ id: 'challenge_id' });
  challenge.knowledgeTags = knowledgeTags;
  return challenge;
}

function _buildAssessment(estimatedLevel, pixScore, notAcquiredKnowledgeTags, acquiredKnowledgeTags, cid) {
  const assessment = new Assessment({ id: 'assessment_id' });
  assessment.set('estimatedLevel', estimatedLevel);
  assessment.set('pixScore', pixScore);
  assessment.set('notAcquiredKnowledgeTags', notAcquiredKnowledgeTags);
  assessment.set('acquiredKnowledgeTags', acquiredKnowledgeTags);
  assessment.cid = cid;
  return assessment;
}

function _buildAnswer(challengeId, result) {
  const answer = new Answer({ id: 'answer_id' });
  answer.set('challengeId', challengeId);
  answer.set('result', result);
  return answer;
}


describe.only('Unit | Domain | scoring', function () {

  describe('#nextNode', function () {

    [
      { title: 'direction is increasing', node: 'web4', dir: 1, answer: 'web5' },
      { title: 'direction is decreasing', node: 'rechInfo3', dir: -1, answer: 'rechInfo2' },
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = scoring.nextNode(testCase.node, testCase.dir);
        expect(result).to.equal(testCase.answer);
      });
    });

  });

  describe('#propagateKnowledge', function () {

    const allKnowledge = { 'web3': 1, 'web4': 1, 'web5': 1, 'web6': 1 };

    [
      { title: 'direction is increasing', startNode: 'web4', dir: 1, answer: [ 'web4', 'web5', 'web6' ] },
      { title: 'direction is decreasing', startNode: 'web4', dir: -1, answer: [ 'web3', 'web4' ] }
    ].forEach(testCase => {

      it(`should return ${testCase.answer} when ${testCase.title} and node is ${testCase.node}`, function () {
        const result = scoring.propagateKnowledge(allKnowledge, testCase.startNode, testCase.dir);
        expect(result.sort()).to.deep.equal(testCase.answer.sort());
      });
    });

  });

  describe('#populateScore', function () {

    const knowledgeData = {
      challengesById: {
        'challenge_web_1': _buildChallenge([ '@web1' ]),
        'challenge_web_2': _buildChallenge([ '@web2' ]),
        'challenge_url_1': _buildChallenge([ '@url1' ]),
        'challenge_social_1': _buildChallenge([ '@soc1' ]),
      },
      knowledgeTagSet: { '@web1': true, '@web2': true, '@url1': true },
      nbKnowledgeTagsByLevel: { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
    };

    const assessment = new Assessment({ id: 'assessment_id' });

    const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');
    const partialAnswerWeb1 = _buildAnswer('challenge_web_1', 'partial');
    const incorrectAnswerUrl1 = _buildAnswer('challenge_url_1', 'ko');
    const correctAnswerUrl1 = _buildAnswer('challenge_url_1', 'ok');

    [
      {
        answers: [ correctAnswerWeb2, incorrectAnswerUrl1 ],
        title: 'web2 correct, url1 incorrect',
        score: 12,
        level: 1,
        acquired: [ '@web2', '@web1' ],
        notAcquired: [ '@url1' ]
      },
      {
        answers: [ partialAnswerWeb1, correctAnswerUrl1 ],
        title: 'web1 partial, url1 correct',
        score: 4,
        level: 0,
        acquired: [ '@url1' ],
        notAcquired: [ '@web1', '@web2' ]
      },
      {
        answers: [ correctAnswerWeb2, correctAnswerUrl1 ],
        title: 'web2 correct, url1 correct',
        score: 16,
        level: 2,
        acquired: [ '@web2', '@web1', '@url1' ],
        notAcquired: []
      }
    ]
      .forEach(pattern => {
        it(`should compute ${pattern.score} and level ${pattern.level} when user pattern is ${pattern.title}`, function () {
          const scoredAssessment = scoring.populateScore(assessment, pattern.answers, knowledgeData);
          const expectedScoredAssessment = _buildAssessment(pattern.level, pattern.score, pattern.notAcquired, pattern.acquired, scoredAssessment.cid);
          expect(scoredAssessment).to.deep.equal(expectedScoredAssessment);
        });
      });

  });

  describe.only('#getPerformanceStats', () => {

    const knowledgeData = {
      challengesById: {
        'challenge_web_1': _buildChallenge([ '@web1' ]),
        'challenge_web_2': _buildChallenge([ '@web2' ]),
        'challenge_url_1': _buildChallenge([ '@url1' ])
      },
      knowledgeTagSet: { '@web1': true, '@web2': true, '@url1': true },
      nbKnowledgeTagsByLevel: { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
    };


    it('checks sanity', () => {
      expect(scoring.getPerformanceStats).to.exist;
    });

    it('should return the list of acquired knowledge and not acquired ones', () => {
      // When
      let result = scoring.getPerformanceStats();

      // Then
      expect(result.acquiredKnowledgeTags).to.be.an('array');
      expect(result.notAcquiredKnowledgeTags).to.be.an('array');
    });

    describe('the field acquiredKnowledgeTags', () => {
      it('should add Skill tags when level 1 is acquired', () => {
        // Given
        const correctAnswerWeb1 = _buildAnswer('challenge_web_1', 'ok');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb1], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal(['@web1']);
      });

      it('should not add Skill tags when level is only partially acquired', () => {
        // Given
        const correctAnswerWeb1 = _buildAnswer('challenge_web_1', 'partial');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb1], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal([]);
      });

      it('should not add Skill tags when level is not acquired', () => {
        // Given
        const correctAnswerWeb1 = _buildAnswer('challenge_web_1', 'ko');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb1], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal([]);
      });

      it('should validate skill 1 and 2 when level 2 is acquired', () => {
        // Given
        const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb2], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal(['@web2', '@web1']);
      });
    });

    describe('the field notAcquiredKnowledgeTags', () => {
      it('should have Skill tags when an answer is KO', () => {
        // Given
        const incorrectAnswerUrl1 = _buildAnswer('challenge_url_1', 'ko');

        // When
        const result = scoring.getPerformanceStats([incorrectAnswerUrl1], knowledgeData);

        // Then
        expect(result.notAcquiredKnowledgeTags).to.deep.equal(['@url1']);
      });

      it('should contains every related skill tags', () => {
        // Given
        const partialAnswerWeb1 = _buildAnswer('challenge_web_1', 'partial');

        // When
        const result = scoring.getPerformanceStats([partialAnswerWeb1], knowledgeData);

        // Then
        expect(result.notAcquiredKnowledgeTags).to.deep.equal(['@web1', '@web2']);
      });

      // TODO Dans ce cas, le tableau contient un état instable (J'ai appris ET je n'ai pas appris)
      it('should contains every related skill tags', () => {
        // Given
        const wrongAnswerWeb1 = _buildAnswer('challenge_web_1', 'ko');
        const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');

        // When
        const result = scoring.getPerformanceStats([wrongAnswerWeb1, correctAnswerWeb2], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal(['@web2', '@web1']);
        expect(result.notAcquiredKnowledgeTags).to.deep.equal(['@web1', '@web2']);
      });

      it('should have every skill tags when level is not acquired', () => {
        // Given
        const correctAnswerWeb1 = _buildAnswer('challenge_web_1', 'ko');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb1], knowledgeData);

        // Then
        expect(result.notAcquiredKnowledgeTags).to.deep.equal(['@web1', '@web2']);
      });

      // TODO Ici, c'est étrange qu'un ne retrouve pas web_1 quelque part
      it('should mark a level partially acquired as NOT acquired when it is partial', () => {
        // Given
        const partialAnswerWeb2 = _buildAnswer('challenge_web_2', 'partial');

        // When
        const result = scoring.getPerformanceStats([partialAnswerWeb2], knowledgeData);

        // Then
        expect(result.acquiredKnowledgeTags).to.deep.equal([]);
        expect(result.notAcquiredKnowledgeTags).to.deep.equal(['@web2']);
      });
    });

    describe('the field performanceHistory', () => {
      it('should be given as a result', () => {
        // When
        let result = scoring.getPerformanceStats();

        // Then
        expect(result.performanceHistory).to.be.an('array');
      });

      it('should add a performance input when the answer is correct', () => {
        // Given
        const correctAnswerUrl1 = _buildAnswer('challenge_url_1', 'ok');

        // When
        const result = scoring.getPerformanceStats([correctAnswerUrl1], knowledgeData);

        // Then
        expect(result.performanceHistory).to.deep.equal([{ difficulty: 1, outcome: 1 }]);
      });

      it('should add a performance input when the answer is correct and save the difficulty', () => {
        // Given
        const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb2], knowledgeData);

        // Then
        expect(result.performanceHistory).to.deep.equal([{ difficulty: 2, outcome: 1 }]);
      });


      it('should not record an outcome from an answer which is partially correct', () => {
        // Given
        const partialAnswerUrl1 = _buildAnswer('challenge_url_1', 'partial');

        // When
        const result = scoring.getPerformanceStats([partialAnswerUrl1], knowledgeData);

        // Then
        expect(result.performanceHistory).to.deep.equal([{ difficulty: 1, outcome: 0 }]);
      });

      it('should not record an outcome from an answer which is wrong', () => {
        // Given
        const wrongAnswerUrl1 = _buildAnswer('challenge_url_1', 'ko');

        // When
        const result = scoring.getPerformanceStats([wrongAnswerUrl1], knowledgeData);

        // Then
        expect(result.performanceHistory).to.deep.equal([{ difficulty: 1, outcome: 0 }]);
      });

    });

    describe('the nbAcquiredKnowledgeTagsByLevel', () => {
      it('should be an array and have a default value', () => {
        // When
        let result = scoring.getPerformanceStats();

        // Then
        expect(result.nbAcquiredKnowledgeTagsByLevel).to.be.an('object');
        expect(result.nbAcquiredKnowledgeTagsByLevel).to.deep.equal({
          1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
        });
      });

      it('should be filled by acquired skill levels', () => {
        // Given
        const correctAnswerWeb2 = _buildAnswer('challenge_web_2', 'ok');
        const correctAnswerUrl1 = _buildAnswer('challenge_url_1', 'ok');

        // When
        const result = scoring.getPerformanceStats([correctAnswerWeb2, correctAnswerUrl1], knowledgeData);

        // Then
        expect(result.nbAcquiredKnowledgeTagsByLevel).to.deep.equal({
          1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
        });
      });
    });
  });
});
