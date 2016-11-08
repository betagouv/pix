const server = require('../../../server');
const _ = require('lodash');
const util = require('util');
const createToken = require('../../helper/createToken');
const headersWithoutToken = { };
const headersWithInvalidToken = { Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A' };

describe('API | Courses', function () {

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

  describe('Any protected route : GET /api/courses/:course_id', function () {

    const optionsWithoutToken = { headers: headersWithoutToken, method: "GET", url: "/api/courses/rec5duNNrPqbSzQ8o" };
    const optionsWithBadToken = { headers: headersWithInvalidToken, method: "GET", url: "/api/courses/rec5duNNrPqbSzQ8o" };

    it("without token, should return 401 HTTP, and message \"Missing authentication\"", function (done) {
      server.injectThen(optionsWithoutToken).then((response) => {
        let payload = JSON.parse(response.payload);
        expect(payload.statusCode).to.equal(401);
        expect(payload.message).to.equal("Missing authentication");
        done();
      });
    });

    it("with a bad token, should return 401 HTTP, and message \"Invalid token\"", function (done) {
      server.injectThen(optionsWithBadToken).then((response) => {
        let payload = JSON.parse(response.payload);
        expect(payload.statusCode).to.equal(401);
        expect(payload.message).to.equal("Invalid token");
        done();
      });
    });

  });

});
