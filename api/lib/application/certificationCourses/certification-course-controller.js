const Boom = require('boom');
const logger = require('../../infrastructure/logger');
const CertificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const userService = require('../../../lib/domain/services/user-service');
const assessmentRepository = require('../../../lib/infrastructure/repositories/assessment-repository');
const answersRepository = require('../../../lib/infrastructure/repositories/answer-repository');
const certificationChallengesRepository = require('../../../lib/infrastructure/repositories/certification-challenge-repository');
const certificationService = require('../../domain/services/certification-service');
const certificationCourseSerializer = require('../../infrastructure/serializers/jsonapi/certification-course-serializer');

module.exports = {

  getResult(request, reply) {
    const certificationCourseId = request.params.id;
    let userId;
    let listAnswers;
    let dateOfCertification;
    let listCertificationChallenges;

    return assessmentRepository.getByCertificationCourseId(certificationCourseId)
      .then((assessment) => {
        userId = assessment.get('userId');
        dateOfCertification = assessment.get('createdAt');

        return answersRepository.findByAssessment(assessment.get('id'));
      })
      .then((answersByAssessments) => {
        listAnswers = answersByAssessments;
        return certificationChallengesRepository.findByCertificationCourseId(certificationCourseId);
      })
      .then((certificationChallenges) => {
        listCertificationChallenges = certificationChallenges;
        return userService.getProfileToCertify(userId);
      })
      .then((listCompetences) => {
        const testedCompetences = listCompetences.filter(competence => competence.challenges.length > 0);
        const result = certificationService.getResult(listAnswers, listCertificationChallenges, testedCompetences);
        result.createdAt = dateOfCertification;
        return result;
      })
      .then(reply)
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  },

  get(request, reply) {
    const certificationCourseId = request.params.id;
    return CertificationCourseRepository.get(certificationCourseId)
      .then((certificationCourse) => {
        reply(certificationCourseSerializer.serialize(certificationCourse));
      })
      .catch((err) => {
        logger.error(err);
        reply(Boom.badImplementation(err));
      });
  }

};
