const { expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const courseController = require('../../../../lib/application/courses/course-controller');
const securityController = require('../../../../lib/interfaces/controllers/security-controller');
const accessSessionHandler = require('../../../../lib/application/preHandlers/access-session');

describe('Unit | Router | course-router', () => {

  let server;

  beforeEach(() => {
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

  describe('GET /api/courses', () => {

    before(() => {
      sinon.stub(courseController, 'list').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      courseController.list.restore();
    });

    it('should exist', function(done) {
      expectRouteToExist({ method: 'GET', url: '/api/courses' }, done);
    });
  });

  describe('GET /api/courses/{id}', () => {

    before(() => {
      sinon.stub(courseController, 'get').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      courseController.get.restore();
    });

    it('should exist', function(done) {
      expectRouteToExist({ method: 'GET', url: '/api/courses/course_id' }, done);
    });
  });

  describe('POST /api/courses/{id}', () => {

    before(() => {
      sinon.stub(securityController, 'checkUserIsAuthenticated').callsFake((request, reply) => reply.continue());
      sinon.stub(courseController, 'refresh').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      securityController.checkUserIsAuthenticated.restore();
      courseController.refresh.restore();
    });

    it('should exist', function(done) {
      expectRouteToExist({ method: 'POST', url: '/api/courses/course_id' }, done);
    });
  });

  describe('PUT /api/courses', () => {

    before(() => {
      sinon.stub(courseController, 'refreshAll').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      courseController.refreshAll.restore();
    });

    it('should exist', function(done) {
      expectRouteToExist({ method: 'PUT', url: '/api/courses' }, done);
    });
  });

  describe('POST /api/courses', () => {

    let sandbox;

    before(() => {
      sandbox = sinon.sandbox.create();

      sandbox.stub(accessSessionHandler, 'sessionIsOpened').callsFake((request, reply) => reply('decodedToken'));
      sandbox.stub(securityController, 'checkUserIsAuthenticated').callsFake((request, reply) => reply.continue());
      sandbox.stub(courseController, 'save').callsFake((request, reply) => reply('ok'));
    });

    after(() => {
      sandbox.restore();
    });

    it('should exist', (done) => {
      expectRouteToExist({ method: 'POST', url: '/api/courses' }, done);
    });

    it('should verify if user is connected and the certification session code is right', (done) => {
      server.inject({ method: 'POST', url: '/api/courses' }, () => {
        expect(accessSessionHandler.sessionIsOpened).to.have.been.called;
        done();
      });
    });
  });
});
