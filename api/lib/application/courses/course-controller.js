const Boom = require('boom');
const courseRepository = require('../../infrastructure/repositories/course-repository');
const courseSerializer = require('../../infrastructure/serializers/jsonapi/course-serializer');
const certificationCourseSerializer = require('../../infrastructure/serializers/jsonapi/certification-course-serializer');
const CertificationCourse = require('../../domain/models/CertificationCourse');
const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const userService = require('../../../lib/domain/services/user-service');
const certificationChallengesService = require('../../../lib/domain/services/certification-challenges-service');

const logger = require('../../infrastructure/logger');

function _fetchCourses(query) {
  if (query.isAdaptive === 'true') {
    return courseRepository.getAdaptiveCourses();
  }
  if (query.isCourseOfTheWeek === 'true') {
    return courseRepository.getCoursesOfTheWeek();
  }
  return courseRepository.getProgressionCourses();
}

module.exports = {

  list(request, reply) {
    _fetchCourses(request.query)
      .then(courses => reply(courseSerializer.serialize(courses)))
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  },

  get(request, reply) {
    const courseId = request.params.id;

    courseRepository
      .get(courseId)
      .then(course => reply(courseSerializer.serialize(course)))
      .catch(err => {
        if ('MODEL_ID_NOT_FOUND' === err.error.type || 'NOT_FOUND' === err.error) {
          return reply(Boom.notFound(err));
        }

        logger.error(err);

        return reply(Boom.badImplementation(err));
      });
  },

  refresh(request, reply) {
    courseRepository
      .refresh(request.params.id)
      .then(course => reply(courseSerializer.serialize(course)))
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  },

  refreshAll(request, reply) {
    courseRepository
      .refreshAll()
      .then(() => reply('Courses updated'))
      .catch(reply);
  },

  save(request, reply) {
    const userId = request.pre.userId;
    let certificationCourse = new CertificationCourse({ userId, status: 'started' });

    return CertificationCourseRepository.save(certificationCourse)
      .then((savedCertificationCourse) => {
        return certificationCourse = savedCertificationCourse;
      })
      .then(() => userService.getProfileToCertify(userId))
      .then((userProfile) => certificationChallengesService.saveChallenges(userProfile, certificationCourse))
      .then(() => reply(certificationCourseSerializer.serialize(certificationCourse)).code(201))
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  }

};
