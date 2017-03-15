const { describe, it, before, afterEach, beforeEach, expect, sinon } = require('../../../test-helper');
const Hapi = require('hapi');
const Course = require('../../../../lib/domain/models/referential/course');
const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const courseSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/course-serializer');
const cache = require('../../../../lib/infrastructure/cache');

describe('Unit | Controller | course-controller', function () {

  let server;

  before(function () {
    server = this.server = new Hapi.Server();
    server.connection({ port: null });
    server.register({ register: require('../../../../lib/application/courses') });
  });

  beforeEach(function () {
    cache.flushAll();
  });

  afterEach(function () {
    cache.flushAll();
  });

  describe('#list', function () {

    const courses = [
      new Course({ id: 'course_1' }),
      new Course({ id: 'course_2' }),
      new Course({ id: 'course_3' })
    ];

    it('should fetch and return all the courses', function (done) {
      // given
      sinon.stub(courseRepository, 'getProgressionTests').resolves(courses);
      sinon.stub(courseSerializer, 'serializeArray', () => courses);

      // when
      server.inject({ method: 'GET', url: '/api/courses' }, (res) => {

        // then
        expect(res.result).to.deep.equal(courses);

        // after
        courseRepository.getProgressionTests.restore();
        courseSerializer.serializeArray.restore();
        done();
      });
    });

    it('should fetch and return all the adaptive courses', function (done) {
      // given
      sinon.stub(courseRepository, 'getAdaptiveCourses').resolves(courses);
      sinon.stub(courseSerializer, 'serializeArray', () => courses);

      // when
      server.inject({ method: 'GET', url: '/api/courses?isAdaptive=true' }, (res) => {

        // then
        expect(res.result).to.deep.equal(courses);

        // after
        courseRepository.getAdaptiveCourses.restore();
        courseSerializer.serializeArray.restore();
        done();
      });
    });

    it('should fetch and return all the highlitghted courses of the week', function (done) {
      // given
      sinon.stub(courseRepository, 'getCoursesOfTheWeek').resolves(courses);
      sinon.stub(courseSerializer, 'serializeArray', () => courses);

      // when
      server.inject({ method: 'GET', url: '/api/courses?isCourseOfTheWeek=true' }, (res) => {

        // then
        expect(res.result).to.deep.equal(courses);

        // after
        courseRepository.getCoursesOfTheWeek.restore();
        courseSerializer.serializeArray.restore();
        done();
      });
    });
  });

  describe('#get', function () {

    const course = new Course({ 'id': 'course_id' });

    it('should fetch and return the given course, serialized as JSONAPI', function (done) {
      // given
      sinon.stub(courseRepository, 'get').resolves(course);
      sinon.stub(courseSerializer, 'serialize', () => course);

      // when
      server.inject({ method: 'GET', url: '/api/courses/course_id' }, (res) => {

        // then
        expect(res.result).to.deep.equal(course);

        // after
        courseRepository.get.restore();
        courseSerializer.serialize.restore();
        done();
      });
    });

    it('should reply with error status code 404 if course not found', function (done) {
      // given
      const error = {
        error: {
          type: 'MODEL_ID_NOT_FOUND',
          message: 'Could not find row by id unknown_id'
        }
      };
      sinon.stub(courseRepository, 'get').rejects(error);

      // when
      server.inject({ method: 'GET', url: '/api/courses/unknown_id' }, (res) => {

        // then
        expect(res.statusCode).to.equal(404);

        // after
        courseRepository.get.restore();
        done();
      });
    });
  });

});
