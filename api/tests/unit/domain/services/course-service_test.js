const courseService = require('../../../../lib/domain/services/course-service');

const Course = require('../../../../lib/domain/models/Course');
const { NotFoundError } = require('../../../../lib/domain/errors');

const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const certificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');

describe('Unit | Service | Course Service', () => {

  describe('#getCourse', function() {

    let sandbox;
    let airtableCourse = { fields: { id: 'recAirtableId' } };
    let certificationCourse = new Course({ id: 1 });

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox.restore();
    });

    context('when the id is a certification course id', () => {

      beforeEach(() => {
        sandbox.stub(certificationCourseRepository, 'get').resolves(certificationCourse);
      });

      it('should call the certification course repository  ', () => {
        // given
        const givenCourseId = 1;

        // when
        const promise = courseService.getCourse(givenCourseId);

        // then
        return promise.then((result) => {
          expect(certificationCourseRepository.get).to.have.been.called;
          expect(certificationCourseRepository.get).to.have.been.calledWith(givenCourseId);
          expect(result).to.be.an.instanceof(Course);
        });
      });

    });

    context('when the id is not a certification course id', () => {

      beforeEach(() => {
        sandbox.stub(courseRepository, 'get').resolves(airtableCourse);
      });

      it('should call the course repository', () => {
        // given
        const givenCourseId = 'recAirtableId';

        // when
        const promise = courseService.getCourse(givenCourseId);

        // then
        return promise.then((result) => {
          expect(courseRepository.get).to.have.been.called;
          expect(courseRepository.get).to.have.been.calledWith(givenCourseId);
          expect(result).to.be.an.instanceof(Course);
        });
      });
    });

    context('when the course id does not exist', () => {

      beforeEach(() => {
        sandbox.stub(certificationCourseRepository, 'get').rejects(NotFoundError);
      });

      it('should return a NotFoundError when the course was not found', function() {
        // given
        const givenCourseId = 'unexistantId';

        // when
        const promise = courseService.getCourse(givenCourseId);

        // then
        return promise.then((result) => {
          expect(result).to.be.an.instanceof(NotFoundError);
        });
      });

    });

  });

});
