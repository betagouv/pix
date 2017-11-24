const assessmentService = require('../../domain/services/assessment-service');
const answersRepository = require('../../../lib/infrastructure/repositories/answer-repository');
const profileService = require('../../domain/services/profile-service');

module.exports = {

  get(request, reply) {
    const certificationCourseId = request.params.id;
    let userId;
    let assessmentId;
    //get AssessmentIdByCertificationCourseId

    return assessmentService.getByCertificationCourseId(certificationCourseId)
      .then((assessment) => {
        assessmentId = assessment.get('id');
        userId = assessment.get('userId');
      })
    //getAnswersByAssessment
    //getCertificationChallenges
    //Call user-service.getProfileToCertify with pix added for each competence
    //Call certificationService

  }

};
