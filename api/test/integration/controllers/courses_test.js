const pixApiServer = require('../../../server');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('API Courses', function () {

  let xhr, airTableFakeServer;

  before(function (done) {
    sinon.useFakeXMLHttpRequest();
    done();
  });

  after(function (done) {
    pixApiServer.stop(done);
  });

  describe('GET /api/courses', function (done) {

    const options = { method: "GET", url: "/api/courses" };

    it("should return 200 HTTP status code", function (done) {
      pixApiServer.injectThen(options).then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(requests.length).to.equal(1);//
        done();
      });
    });

    it("should return application/json", function (done) {
      pixApiServer.injectThen(options).then((response) => {
        const contentType = response.headers['content-type'];
        expect(contentType).to.contain('application/json');
        done();
      });
    });

    it("should return all the courses from the tests referential", function (done) {
      pixApiServer.injectThen(options).then((response) => {
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
