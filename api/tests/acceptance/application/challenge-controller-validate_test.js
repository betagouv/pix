/* global describe, after, afterEach, beforeEach, it, knex, expect, nock, before */
const server = require('../../../server');

describe.only('Acceptance | API | ChallengeController', function () {

  let inserted_answer_id = null;


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

    //old challenge is QCM with solution = '1,2,3'
    //new challenge is QCM with solution = '1,2'
    //type is qcrom-dep
    const inserted_answer = {
      value: '1,2',
      result: 'ko',
      challengeId: 'challenge_1234'
    };

    beforeEach(function (done) {
      knex('answers').delete().then(() => {
        knex('answers').insert([inserted_answer]).then((id) => {
          inserted_answer_id = id;
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

    it('should be able to transform an answer', function (done) {
      server.injectThen(options).then((response) => {
        knex.select('*').from('answers').then((answers) => {
          const theAnswer = answers[0];
          expect(theAnswer.result).to.equal('ok');
          // console.log('theAnswer - - - -' + JSON.stringify(theAnswer));
          done();
        });
      });
    });



  });


});
