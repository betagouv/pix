const { describe, it, expect, sinon } = require('../../../test-helper');

const pathToSource = '../../../..';
const service = require(pathToSource + '/lib/domain/services/assessment-service');

const Assessment = require(pathToSource + '/lib/domain/models/data/assessment');
const Challenge = require(pathToSource + '/lib/domain/models/referential/challenge');
const courseRepository = require(pathToSource + '/lib/infrastructure/repositories/course-repository');
const Answer = require(pathToSource + '/lib/domain/models/data/answer');

function _buildChallenge(knowledgeTags) {
  const challenge = new Challenge({ id: 'challenge_id' });
  challenge.knowledgeTags = knowledgeTags;
  return challenge;
}

function _buildAssessmentForCourse(courseId) {
  const assessment = new Assessment({ id: 'assessment_id' });
  if (courseId) {
    assessment.set('courseId', courseId);
  }
  return assessment;
}

function _buildAnswer(challengeId, result) {
  const answer = new Answer({ id: 'answer_id' });
  answer.set('challengeId', challengeId);
  answer.set('result', result);
  return answer;
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



describe.only('Unit | Domain | Services | assessment-service', function () {

  it('should exist', function () {
    expect(service).to.exist;
  });

  it('#getAssessmentNextChallengeId should exist', function () {
    expect(service.getAssessmentNextChallengeId).to.exist;
  });

  describe('#getAssessmentNextChallengeId', function () {

    it('Should return the first challenge if no currentChallengeId is given', function (done) {

      sinon.stub(courseRepository, 'get').resolves({ challenges: [ 'the_first_challenge' ] });

      service.getAssessmentNextChallengeId(_buildAssessmentForCourse('22'), null).then(function (result) {
        expect(result).to.equal('the_first_challenge');
        courseRepository.get.restore();
        done();
      });

    });


    it('Should return the next challenge if currentChallengeId is given', function (done) {

      sinon.stub(courseRepository, 'get').resolves({ challenges: [ '1st_challenge', '2nd_challenge' ] });

      service.getAssessmentNextChallengeId(_buildAssessmentForCourse('22'), '1st_challenge').then(function (result) {
        expect(result).to.equal('2nd_challenge');
        courseRepository.get.restore();
        done();
      });

    });


    it('Should resolves to "null" if no assessment is given', function (done) {

      service.getAssessmentNextChallengeId().then(function (result) {
        expect(result).to.equal(null);
        done();
      });

    });


    it('Should resolves to "null" if no courseId is given', function (done) {

      sinon.stub(courseRepository, 'get').resolves({ challenges: [ '1st_challenge', '2nd_challenge' ] });

      service.getAssessmentNextChallengeId(_buildAssessmentForCourse(), '1st_challenge').then(function (result) {
        expect(result).to.equal(null);
        courseRepository.get.restore();
        done();
      });

    });

    it('Should resolves to "null" if courseId starts with "null"', function (done) {

      sinon.stub(courseRepository, 'get').resolves({ challenges: [ '1st_challenge', '2nd_challenge' ] });

      service.getAssessmentNextChallengeId(_buildAssessmentForCourse('null22'), '1st_challenge').then(function (result) {
        expect(result).to.equal(null);
        courseRepository.get.restore();
        done();
      });

    });

  });

  describe('#getScoredAssessment', () => {

    it('checks sanity', () => {
      expect(service.getScoredAssessment).to.exist;
    });
  });

  describe('#_completeAssessmentWithScore', function () {

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
          // When
          const scoredAssessment = service._completeAssessmentWithScore(assessment, pattern.answers, knowledgeData);

          // Then
          const expectedScoredAssessment = _buildAssessment(pattern.level, pattern.score, pattern.notAcquired, pattern.acquired, scoredAssessment.cid);
          expect(scoredAssessment).to.deep.equal(expectedScoredAssessment);
        });
      });

  });

});
