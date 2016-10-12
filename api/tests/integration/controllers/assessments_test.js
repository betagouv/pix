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

  });

});
