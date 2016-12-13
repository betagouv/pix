/* global describe, it, sinon, before, after, expect */
const service = require('../../../../lib/domain/services/assessment-service');
const Assessment = require('../../../../lib/domain/models/data/assessment');
const Answer = require('../../../../lib/domain/models/data/answer');
const Course = require('../../../../lib/domain/models/referential/course');
const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');

describe('Unit | Service | Assessments', function () {

  describe('#getAssessmentNextChallengeId()', function () {

    const assessment = new Assessment();
    const course = new Course();
    const answer = new Answer({
      id: 'answer_id',
      value: 'answer_value',
      result: 'result_value',
      assessmentId: assessment.get('id'),
      challengeId: 'challenge_id'
    });

    before(function () {
      course.id = 'course_id';
      course.isAdaptive = false;
      course.challenges = ['ch3', 'ch2', 'ch1']; // reminder : challenges are extrated in inverted order from Airtable
      sinon.stub(courseRepository, 'get').resolves(course);
    });

    after(function () {
      courseRepository.get.restore();
    });

    it('should return the first assessment\'s course challenge ID when current challenge ID is null', function (done) {
      // when
      service
        .getAssessmentNextChallengeId(assessment, null)
        .then((nextChallengeId) => {
          // then
          expect(nextChallengeId).to.equal('ch1');
          done();
        });
    });

    it('should return the assessment\'s course next challenge ID when the current one is not the last', function (done) {
      // when
      service
        .getAssessmentNextChallengeId(assessment, 'ch1')
        .then((nextChallengeId) => {
          // then
          expect(nextChallengeId).to.equal('ch2');
          done();
        });
    });

    // it('should return null when the current challenge is the assessment\'s course latest', function (done) {
    //   // when
    //   service
    //     .getAssessmentNextChallengeId(assessment, 'ch3')
    //     .then((nextChallengeId) => {
    //       // then
    //       expect(nextChallengeId).to.be.null;
    //       done();
    //     });
    // });

  });

});
