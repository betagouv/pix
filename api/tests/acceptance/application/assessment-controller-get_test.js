const { describe, it, after, before, beforeEach, afterEach, expect, knex, nock } = require('../../test-helper');
const server = require('../../../server');

describe('Acceptance | API | Assessments GET', function () {

  before(function (done) {

    nock.cleanAll();
    nock('https://api.airtable.com')
      .get('/v0/test-base/Tests/anyFromAirTable')
      .query(true)
      .times(4)
      .reply(200, {
        'id': 'the_adaptive_course_id',
        'fields': {
          // a bunch of fields
          'Adaptatif ?': true,
          '\u00c9preuves': [
            'z_second_challenge',
            'z_first_challenge',
          ],
        },
      });

    nock('https://api.airtable.com')
    .get('/v0/test-base/Epreuves/z_first_challenge')
    .query(true)
    .times(3)
    .reply(200, {
      'id': 'z_first_challenge',
      'fields': {
        'acquis': ['@acquix3']
      },
    });
    nock('https://api.airtable.com')
      .get('/v0/test-base/Epreuves/z_second_challenge')
      .query(true)
      .reply(200, {
        'id': 'z_second_challenge',
        'fields': {
          'acquis': ['@acquix5']
        },
      });
    nock('https://api.airtable.com')
      .get('/v0/test-base/Epreuves/z_third_challenge')
      .query(true)
      .reply(200, {
        'id': 'z_third_challenge',
        'fields': {
          // a bunch of fields
        },
      });

    done();

  });

  after(function (done) {
    server.stop(done);
  });

  describe('(no answer provided) GET /api/assessments/:id', function () {//

    let inserted_assessment_id = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'anyFromAirTable'
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
      knex('assessments').delete().then(() => {
        done();
      });
    });

    it('should return 200 HTTP status code', function (done) {

      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });

    });

    it('should return application/json', function (done) {

      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            const contentType = response.headers['content-type'];
            expect(contentType).to.contain('application/json');
            done();
          });
        });

    });

    it('should return the expected assessment', function (done) {
      // XXX: incomplete test, should also demonstrate that it returns the whole answer grape.
      // See https://github.com/sgmap/pix/issues/205
      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            const expectedAssessment = {
              'type': 'assessments',
              'id': inserted_assessment_id,
              'attributes': {
                'user-name': 'John Doe',
                'user-email': 'john.doe@mailmail.com',
                'estimated-level': undefined,
                'not-acquired': undefined,
                'acquired': undefined
              },
              'relationships': {
                'course': { 'data': { 'type': 'courses', 'id': 'anyFromAirTable' } },
                'answers': { 'data': [] }
              }
            };
            const assessment = response.result.data;
            expect(assessment).to.deep.equal(expectedAssessment);
            done();
          });
        });
    });
  });

  describe('(answers provided) GET /api/assessments/:id', function () {//

    let inserted_assessment_id = null;
    let inserted_answer_ids = null;

    const inserted_assessment = {
      userName: 'John Doe',
      userEmail: 'john.doe@mailmail.com',
      courseId: 'anyFromAirTable'
    };

    beforeEach(function (done) {
      inserted_answer_ids = [];
      knex('assessments').delete().then(() => {
        knex('assessments').insert([inserted_assessment]).then((rows) => {
          inserted_assessment_id = rows[0];

          const inserted_answers = [{
            value: 'any good answer',
            result: 'ok',
            challengeId: 'z_first_challenge',
            assessmentId: inserted_assessment_id
          }, {
            value: 'any bad answer',
            result: 'ko',
            challengeId: 'z_second_challenge',
            assessmentId: inserted_assessment_id
          }];
          knex('answers').delete().then(() => {
            knex('answers').insert([inserted_answers[0]]).then((rows) => { // Faut que je le fasse en deux temps sinon je n'ai que le dernier ID
              inserted_answer_ids.push(rows[0]);
              knex('answers').insert([inserted_answers[1]]).then((rows) => {
                inserted_answer_ids.push(rows[0]);
                done();
              });
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

    it('should return 200 HTTP status code', function (done) {

      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            expect(response.statusCode).to.equal(200);
            done();
          });
        });

    });

    it('should return application/json', function (done) {

      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            const contentType = response.headers['content-type'];
            expect(contentType).to.contain('application/json');
            done();
          });
        });

    });

    it('should return the expected assessment', function (done) {
      // XXX: incomplete test, should also demonstrate that it returns the whole answer grape.
      // See https://github.com/sgmap/pix/issues/205
      knex.select('id')
        .from('assessments')
        .limit(1)
        .then(function () {
          server.injectThen({ method: 'GET', url: `/api/assessments/${inserted_assessment_id}` }).then((response) => {
            const expectedAssessment = {
              'type': 'assessments',
              'id': inserted_assessment_id,
              'attributes': {
                'user-name': 'John Doe',
                'user-email': 'john.doe@mailmail.com',
                'estimated-level': 4,
                'not-acquired': ['@acquix5'],
                'acquired': ['@acquix3']
              },
              'relationships': {
                'course': { 'data': { 'type': 'courses', 'id': 'anyFromAirTable' } },
                'answers': { 'data': [ { type: 'answers', id: inserted_answer_ids[0] }, { type: 'answers', id:  inserted_answer_ids[1] } ] }
              }
            };
            const assessment = response.result.data;
            expect(assessment).to.deep.equal(expectedAssessment);
            done();
          });
        });
    });
  });
});
