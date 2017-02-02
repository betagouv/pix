/* global describe, after, it, expect */
const server = require('../../../server');

describe.only('Acceptance | API | ChallengeController', function () {

  after(function (done) {
    server.stop(done);
  });

  // validate again all answers of the challenge
  describe('PUT /api/challenges/:challenge_id/validate', function () {

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

  });


});
