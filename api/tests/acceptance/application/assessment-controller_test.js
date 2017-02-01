/* global describe, before, after, beforeEach, afterEach, knex, nock, it, expect */
const server = require('../../../server');
const Assessment = require('../../../lib/domain/models/data/assessment');

describe.skip('Acceptance | API | Assessments', function () {


  before(function (done) {
    knex.migrate.latest().then(() => {
      knex.seed.run().then(() => {
        done();
      });
    });
  });

  after(function (done) {
    server.stop(done);
  });

  describe('(non-adaptive) GET /api/assessments/:assessment_id/next', function () {

    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'non_adaptive_course_id'
    };

    beforeEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];
          done();
        });
      });
    });

    afterEach(function (done) {
      knex('assessments').delete().then(() => {done();});
    });

    it('should return 200 HTTP status code', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return application/json', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it('should return the first challenge if no challenge specified', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result.data.id).to.equal('first_challenge');
        done();
      });
    });

    it('should return the next challenge otherwise', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next/first_challenge' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result.data.id).to.equal('second_challenge');
        done();
      });
    });

    it('should return null if reached the last challenge of the course', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next/second_challenge' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result).to.equal('null');
        done();
      });
    });

  });

  describe('(adaptive) GET /api/assessments/:assessment_id/next', function () {

    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'adaptive_course_id'
    };

    beforeEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];
          done();
        });
      });
    });

    afterEach(function (done) {
      knex('assessments').delete().then(() => {done();});
    });

    it('should return 200 HTTP status code', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return application/json', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it('should return the first challenge if no challenge specified', function (done) {
      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result.data.id).to.equal('first_challenge');
        done();
      });
    });

  });

  describe('(adaptive correct answer) GET /api/assessments/:assessment_id/next/:current_challenge_id', function () {

    //assessment
    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'adaptive_course_id'
    };

    beforeEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];

          const inserted_answer = {
            value: 'any good answer',
            result: 'ok',
            challengeId: 'anyChallengeIdFromAirtable',
            assessmentId: inserted_assessment_id
          };
          knex('answers').delete().then(() => {
            knex('answers').insert([inserted_answer]).then(() => {
              done();
            });
          });
        });
      });
    });

    afterEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('answers').delete().then(() => {
          done();
        });
      });
    });

    it('should return the second challenge if the first answer is correct', function (done) {

      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next/first_challenge' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result.data.id).to.equal('second_challenge');
        done();
      });
    });
  });


  describe('(adaptive incorrect answer) GET /api/assessments/:assessment_id/next/:current_challenge_id', function () {

    //assessment
    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'adaptive_course_id'
    };

    beforeEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];

          const inserted_answer = {
            value: 'any bad answer',
            result: 'ko',
            challengeId: 'anyChallengeIdFromAirtable',
            assessmentId: inserted_assessment_id
          };
          knex('answers').delete().then(() => {
            knex('answers').insert([inserted_answer]).then(() => {
              done();
            });
          });
        });
      });
    });

    afterEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('answers').delete().then(() => {
          done();
        });
      });
    });

    it('should return the third challenge if the first answer is incorrect', function (done) {

      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next/first_challenge' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result.data.id).to.equal('third_challenge');
        done();
      });
    });
  });


  describe('(adaptive two answers, with any result) GET /api/assessments/:assessment_id/next/:current_challenge_id', function () {

    //assessment
    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'adaptive_course_id'
    };

    beforeEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];

          const inserted_answer_1 = {
            value: 'any bad answer',
            result: 'ko',
            challengeId: 'anyChallengeIdFromAirtable',
            assessmentId: inserted_assessment_id
          };
          const inserted_answer_2 = {
            value: 'any good answer',
            result: 'ok',
            challengeId: 'anyChallengeIdFromAirtable',
            assessmentId: inserted_assessment_id
          };
          knex('answers').delete().then(() => {
            knex('answers').insert([inserted_answer_1, inserted_answer_2]).then(() => {
              done();
            });
          });
        });
      });
    });

    afterEach(function (done) {
      knex('assessments').delete().then(() => {
        knex('answers').delete().then(() => {
          done();
        });
      });
    });

    it('should return null if 2 answers are given', function (done) {

      const challengeData = { method: 'GET', url: '/api/assessments/' + inserted_assessment_id + '/next/first_challenge' };
      server.injectThen(challengeData).then((response) => {
        expect(response.result).to.equal('null');
        done();
      });
    });
  });


});
