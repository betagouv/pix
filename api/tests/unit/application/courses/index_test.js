const Hapi = require('hapi');
const CourseController = require('../../../../lib/application/courses/course-controller');

describe('Unit | Router | Courses', function () {

  let server;

  beforeEach(function () {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/courses') });
  });

  function expectRouteToExist(routeOptions, done) {
    server.inject(routeOptions, (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }

  describe('GET /api/courses', function () {

    before(function (done) {
      sinon.stub(CourseController, 'list', (request, reply) => reply('ok'));
      done();
    });

    after(function (done) {
      CourseController.list.restore();
      done();
    });

    it('should exist', function (done) {
      expectRouteToExist({ method: 'GET', url: '/api/courses' }, done);
    });
  });

  describe('GET /api/courses/{id}', function () {

    before(function (done) {
      sinon.stub(CourseController, 'get', (request, reply) => reply('ok'));
      done();
    });

    after(function (done) {
      CourseController.get.restore();
      done();
    });

    it('should exist', function (done) {
      expectRouteToExist({ method: 'GET', url: '/api/courses/course_id' }, done);
    });
  });

  describe('POST /api/courses/{id}', function () {

    before(function (done) {
      sinon.stub(CourseController, 'refresh', (request, reply) => reply('ok'));
      done();
    });

    after(function (done) {
      CourseController.refresh.restore();
      done();
    });

    it('should exist', function (done) {
      expectRouteToExist({ method: 'POST', url: '/api/courses/course_id' }, done);
    });
  });

});
