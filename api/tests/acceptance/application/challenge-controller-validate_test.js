/* global describe, after, afterEach, beforeEach, it, knex, expect, nock, before */
const server = require('../../../server');

describe('Acceptance | API | ChallengeController', function () {

  after(function (done) {
    server.stop(done);
  });

  // validate again all answers of the challenge
  describe('PUT /api/challenges/:challenge_id/validate', function () {

    before(function (done) {
      nock.cleanAll();
      nock('https://api.airtable.com')
        .get('/v0/test-base/Epreuves/challenge_1234')
        .query(true)
        .times(3)
        .reply(200, {
          'id': 'challenge_1234',
          'fields': {
            'id': 1234,
            'Type d\'épreuve': 'QCM',
            'Bonnes réponses': '1, 2, 3',
          }
        });
      done();
    });

    after(function (done) {
      nock.cleanAll();
      done();
    });

    //new challenge is QCM with solution = '1,2,3'
    // previously, answers below were NOT ok.
    // Let's see if validate them again change it.
    //type is qcrom-dep
    const inserted_answer = {
      value: '1,2,3',
      result: 'ko',
      challengeId: 'challenge_1234'
    };

    const inserted_answer_2 = {
      value: '1, 2, 3',
      result: 'partially',
      challengeId: 'challenge_1234'
    };

    const unrelated_answer = {
      value: '1,2,3',
      result: 'ko',
      challengeId: 'challenge_000'
    };

    beforeEach(function (done) {
      knex('answers').delete().then(() => {
        knex('answers').insert([inserted_answer, inserted_answer_2, unrelated_answer]).then(() => {
          done();
        });
      });
    });

    afterEach(function (done) {
      knex('answers').delete().then(() => {done();});
    });

    const options = { method: 'PUT', url: '/api/challenges/challenge_1234/validate' };

    it('should return 200 HTTP status code', function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return application/json', function (done) {
      server.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it('should be able to transform all related answer, but not unrelated answer(s)', function (done) {
      server.injectThen(options).then(() => {
        knex.select('*').from('answers').then((answers) => {
          const answer_1 = answers[0];
          const answer_2 = answers[1];
          const unrelated_answer = answers[2];
          expect(answer_1.result).to.equal('ok');
          expect(answer_2.result).to.equal('ok');
          expect(unrelated_answer.result).to.equal('ko');
          done();
        });
      });
    });

    it('should be able to display stats', function (done) {
      server.injectThen(options).then((response) => {
        const payload = response.payload;
        expect(payload).to.equal('{"ok":2,"okDiff":2,"ko":0,"koDiff":-1,"timedout":0,"timedoutDiff":0,"aband":0,"abandDiff":0,"partially":0,"partiallyDiff":-1,"notImplemented":0,"notImplementedDiff":0}');
        done();
      });
    });

  });


});
