const service = require('../../../lib/services/assessment-service');
const Assessment = require('../../../lib/models/data/assessment');
const Course = require('../../../lib/models/referential/course');
const courseRepository = require('../../../lib/repositories/course-repository');

describe('Service | Assessments', function () {

  describe('#getAssessmentNextChallengeId()', function () {

    const assessment = new Assessment({ courseId: "c_id" });
    const course = new Course();

    before(function (done) {
      course.id = 'course_id';
      course.challenges = ['ch1', 'ch2', 'ch3'];
      sinon.stub(courseRepository, 'get').resolves(course);
      done();
    });

    it("should return the first assessment's course challenge ID when current challenge ID is null", function () {
      // when
      service
        .getAssessmentNextChallengeId(assessment, null)
        .then((nextChallengeId) => {
          // then
          expect(nextChallengeId).to.equal('ch1');
        });
    });

    it("should return the next assessment's course challenge ID when the current one is not the last", function () {
      // when
      service
        .getAssessmentNextChallengeId(assessment, 'ch1')
        .then((nextChallengeId) => {
          // then
          expect(nextChallengeId).to.equal('ch2');
        });
    });

    it("should return null when the current challenge is the assessment's course latest", function () {
      // when
      service
        .getAssessmentNextChallengeId(assessment, 'ch3')
        .then((nextChallengeId) => {
          // then
          expect(nextChallengeId).to.be.null;
        });
    });

  });

});
