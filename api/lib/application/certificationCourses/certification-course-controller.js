const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../infrastructure/repositories/assessment-repository');

module.exports = {
  save(request, reply) {
    const userId = request.pre.userId;
    return CertificationCourseRepository.save()
      .then((certificateCourse) => {
        const assessmentCertificate = {
          type: 'CERTIFICATION',
          courseId: certificateCourse.id,
          userId: userId
        };
        return AssessmentRepository.save(assessmentCertificate);
      })
      .then((assessmentSaved) => {
        reply(assessmentSaved).code(201);
      })
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  }
}
