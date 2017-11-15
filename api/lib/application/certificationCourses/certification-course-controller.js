const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const CertificationCourseSerializer = require('../../infrastructure/serializers/jsonapi/certification-course-serializer');

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
      .then(() => {
        reply(CertificationCourseSerializer.serialize(certificationCourse)).code(201);
      })
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  }
}
