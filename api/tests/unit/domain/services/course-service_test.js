const courseService = require('../../../../lib/domain/services/course-service');
const courseRepository = require('../../../../lib/infrastructure/repositories/course-repository');
const certificationCourseRepository = require('../../../../lib/infrastructure/repositories/certification-course-repository');
const { describe, it, sinon } = require('../../../test-helper');

describe.skip('Unit | Service | Course Service', () => {

  context('when the id is a certification course id', () => {
    it('should call the certification course repository  ', () => {
      // given

      // when
      const promise = courseService.getCourse();

      // then
      promise.then(() => {
        sinon.assert(courseRepository.get).to.have.been.called;
      });

    });

  });

  context('when the id is not a certification course id', () => {
    it('should call the course repository', () => {
      // given

      // when
      const promise = courseService.getCourse();

      // then
      promise.then(() => {
        sinon.assert(certificationCourseRepository.get).to.have.been.called;
      });
    });
  });

});
