const server = require('../../../server');

const expect = require('chai').expect;

describe('API Courses', function () {

  after(function (done) {

    server.stop(done);
  });

  describe('GET /api/courses', function (done) {

    const options = { method: "GET", url: "/api/courses" };

    it("should return 200 HTTP status code", function (done) {
      server.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(200);
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

    it("should return all the courses from the tests referential", function (done) {
      server.injectThen(options).then((response) => {
        const courses = response.result.courses;
        expect(courses.length).to.equal(5);
        done();
      });
    });
  });

  describe('GET /api/courses/:course_id', function (done) {
    // TODO
  });

});
