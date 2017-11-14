const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const AssessmentRepository = require('../../infrastructure/repositories/assessment-repository');
const AuthorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');

module.exports = {
  save(request, reply){
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
      .then((assessmentSaved) => console.log(assessmentSaved))
  }
}
