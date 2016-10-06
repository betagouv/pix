const server = require('../../../server');

const expect = require('chai').expect;

describe('API Courses', function () {

  after(function (done) {

    server.stop(done);
  });

  describe('GET /api/courses', function (done) {

    const options = { method: "GET", url: "/api/courses" };

    it("should return 200 HTTP status code", function (done) {
      server.inject(options, (response) => {
        response.statusCode.should.be.equal(200);
        done();
      });
    });

    it("should return application/json", function (done) {
      server.inject(options, (response) => {
        const contentType = response.headers['content-type'];
        server.log('contentType=' + contentType);
        contentType.should.contain('application/json');
        done();
      });
    });

    it.skip("should return all the courses from the tests referential", function (done) {
      server.inject(options, (response) => {
        done();
      });
    });
  });

  describe('GET /api/courses/:course_id', function (done) {
    // TODO
  });

});
