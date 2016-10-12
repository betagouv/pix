'use strict';

const server = require('../../../server');
const Assessment = require('../../../app/models/assessment');
const knexConfig = require('../../../db/knexfile');
const knex = require('knex')(knexConfig['test']);

describe('API | Assessments', function () {

  before(function (done) {
    knex.migrate.latest()
      .then(function() { return knex.seed.run(); })
      .then(function() { done(); });
  });

  after(function (done) {
    server.stop(done);
  });

  describe('POST /api/assessments', function () {

    const options = { method: "POST", url: "/api/assessments", payload: {
      userId: 1,
      courseId: 'testedCourseId'
    }};

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

    it("should persist new Assessment entity into the database", function (done) {
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

    it("should return persisted assessement", function (done) {

      // when
      server.injectThen(options).then((response) => {
        const assessment = response.result.assessment;

        // then
        expect(assessment.get('userId')).to.equal(options.payload.userId);
        expect(assessment.get('courseId')).to.equal(options.payload.courseId);
        expect(assessment.get('id')).to.exist;

        done();
      });
    });

    it("should persist the given course ID and user ID", function (done) {

      // when
      server.injectThen(options).then((response) => {

        new Assessment({id: response.result.assessment.id})
          .fetch()
          .then(function(model) {
            expect(model.get('userId')).to.equal(options.payload.userId);
            expect(model.get('courseId')).to.equal(options.payload.courseId);
            done();
          });

      });
    });

    // it("should persisted assessement with course fetched from PIX-REF", function (done) {
    //
    //
    //   // when
    //   server.injectThen(options).then((response) => {
    //     const assessment = response.result;
    //
    //     console.log(`assessment: ${JSON.stringify(assessment)}`);
    //
    //
    //     // then
    //     expect(assessment.id).to.exist;
    //     expect(assessment.get('userId')).to.equal(options.payload.userId);
    //
    //     // expect(assessment.get('userId')).to.equal(234);
    //     // expect(assessment.get('courseId')).to.be.defined;
    //     done();
    //   });
    // });


    // it("should return persisted assessement with attributes well saved", function (done) {
    //   // given
    //   options.payload = {
    //     courseId: '',
    //     userId: 1
    //   };

    //
    //   // when
    //   server.injectThen(options).then((response) => {
    //     const assessment = response.result;//
    //
    //     console.log(`assessment: ${JSON.stringify(assessment)}`);
    //
    //     // then
    //     // expect(assessment.id).to.exist;
    //     expect(assessment.get('id')).to.be.defined;
    //     expect(assessment.get('answers')).to.be.undefined;
    //       // expect(assessment.course).to.deep.equal();
    //     done();
    //   });
    // });







  });

});
