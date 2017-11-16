const Boom = require('boom');
const logger = require('../../infrastructure/logger');
const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const CertificationCourseSerializer = require('../../infrastructure/serializers/jsonapi/certification-course-serializer');
const userService = require('../../../lib/domain/services/user-service');
const certificationCourseService = require('../../../lib/domain/services/certification-course-service');

module.exports = {
  save(request, reply) {
    let certificationCourse;
    const userId = request.pre.userId;
    return CertificationCourseRepository.save()
      .then((savedCertificationCourse) => {
        certificationCourse = savedCertificationCourse;
        const assessmentCertificate = {
          type: 'CERTIFICATION',
          courseId: certificationCourse.id,
          userId: userId
        };
        return AssessmentRepository.save(assessmentCertificate);
      })
      .then(() => userService.getCertificationProfile(userId))
      .then((userProfile) => certificationCourseService.saveChallenges(userProfile, certificationCourse))
      .then(() => reply(CertificationCourseSerializer.serialize(certificationCourse)).code(201))
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  }

};
