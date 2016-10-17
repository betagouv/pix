'use strict';

const server = require('../../../server');
const Assessment = require('../../../app/models/data/assessment');

describe('API | Assessments', function () {

  before(function (done) {
    knex.seed.run().then(() => {
      done();
    });
  });

  after(function (done) {
    server.stop(done);
  });

  describe('POST /api/assessments', function () {

    const options = {
      method: "POST", url: "/api/assessments", payload: {
        data: {
          type: "assessment",
          attributes: {
            userId: 1,
            userName: 'Jon Snow',
            userEmail: 'jsnow@winterfell.got'
          },
          relationships: {
            course: {
              type: 'course',
              id: 'testedCourseId'
            }
          }
        }
      }
    };

    it("should return 201 HTTP status code", function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(201);
        done();
      });
    });

    it("should return application/json", function (done) {
      server.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it("should add a new assessment into the database", function (done) {
      // given
      Assessment.count().then(function (beforeAssessmentsNumber) {
        // when
        server.injectThen(options).then((response) => {
          Assessment.count().then(function (afterAssessmentsNumber) {
            // then
            expect(afterAssessmentsNumber).to.equal(beforeAssessmentsNumber + 1);
            done();
          });
        });
      });
    });

    it("should persist the given course ID and user ID", function (done) {

      // when
      server.injectThen(options).then((response) => {

        new Assessment({ id: response.result.id })
          .fetch()
          .then(function (model) {
            expect(model.get('courseId')).to.equal(options.payload.data.relationships.course.id);
            expect(model.get('userId')).to.equal(options.payload.data.attributes.userId);
            expect(model.get('userName')).to.equal(options.payload.data.attributes.userName);
            expect(model.get('userEmail')).to.equal(options.payload.data.attributes.userEmail);
            done();
          });

      });
    });

    it("should return persisted assessement", function (done) {

      // when
      server.injectThen(options).then((response) => {
        const assessment = response.result.toJSON();

        // then
        expect(assessment.id).to.exist;
        expect(assessment.courseId).to.equal(options.payload.data.relationships.course.id);
        expect(assessment.userId).to.equal(options.payload.data.attributes.userId);
        expect(assessment.userName).to.equal(options.payload.data.attributes.userName);
        expect(assessment.userEmail).to.equal(options.payload.data.attributes.userEmail);

        done();
      });
    });

  });

});
