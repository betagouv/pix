const minimumReproductibilityRateToBeCertified = 50;
const minimumReproductibilityRateToBeTrusted = 80;
const numberOfPixForOneLevel = 8;
const _ = require('lodash');
const answerServices = require('./answer-service');
const AnswerStatus = require('../models/AnswerStatus');

const userService = require('../../../lib/domain/services/user-service');
const assessmentRepository = require('../../../lib/infrastructure/repositories/assessment-repository');
const answersRepository = require('../../../lib/infrastructure/repositories/answer-repository');
const certificationChallengesRepository = require('../../../lib/infrastructure/repositories/certification-challenge-repository');
const certificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');

function _enhanceAnswersWithCompetenceId(listAnswers, listChallenges) {
  return _.map(listAnswers, (answer) => {
    const competence = listChallenges.find((challenge) => challenge.challengeId === answer.get('challengeId'));

    answer.set('competenceId', competence.competenceId);
    return answer;
  });
}

function _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence) {
  return _(answersWithCompetences)
    .filter(answer => answer.get('competenceId') === competence.id)
    .filter(answer => AnswerStatus.isOK(answer.get('result')))
    .size();
}

function _computedPixToRemovePerCompetence(numberOfCorrectAnswers, competence, reproductibilityRate) {
  if (numberOfCorrectAnswers < 2) {
    return competence.pixScore;
  }
  if(reproductibilityRate < minimumReproductibilityRateToBeTrusted && numberOfCorrectAnswers === 2) {
    return numberOfPixForOneLevel;
  }
  return 0;
}

function _getCertifiedLevel(numberOfCorrectAnswers, competence, reproductibilityRate) {
  if (numberOfCorrectAnswers < 2) {
    return -1;
  }
  if(reproductibilityRate < minimumReproductibilityRateToBeTrusted && numberOfCorrectAnswers === 2) {
    return competence.estimatedLevel -1;
  }
  return competence.estimatedLevel;
}

function _getMalusPix(listCompetences) {
  return _(listCompetences).map('score').sum();
}

function _getCompetencesWithCertifiedLevel(answersWithCompetences, listCompetences, reproductibilityRate) {
  return listCompetences.map((competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return {
      name: competence.name,
      index:competence.index,
      id: competence.id,
      level: _getCertifiedLevel(numberOfCorrectAnswers, competence, reproductibilityRate),
      score: competence.pixScore - _computedPixToRemovePerCompetence(numberOfCorrectAnswers, competence,
        reproductibilityRate)
    };
  });
}
function _getCompetenceWithFailedLevel(listCompetences) {
  return listCompetences.map((competence) => {
    return {
      name: competence.name,
      index:competence.index,
      id: competence.id,
      level: -1,
      score: 0
    };
  });
}

function _getResult(listAnswers, listChallenges, listCompetences) {
  const reproductibilityRate = answerServices.getAnswersSuccessRate(listAnswers);
  if (reproductibilityRate < minimumReproductibilityRateToBeCertified) {
    return { listCertifiedCompetences: _getCompetenceWithFailedLevel(listCompetences), totalScore: 0 };
  }

  const answersWithCompetences = _enhanceAnswersWithCompetenceId(listAnswers, listChallenges);
  const listCertifiedCompetences = _getCompetencesWithCertifiedLevel(answersWithCompetences, listCompetences, reproductibilityRate);
  const totalScore = _getMalusPix(listCertifiedCompetences);

  return { listCertifiedCompetences, totalScore };
}

module.exports = {

  getCertificationResultByCertificationCourseId(certificationCourseId) {
    let userId;
    let dateOfCertification;
    let listAnswers;
    let listCertificationChallenges;
    let certificationCourseStatus;

    return assessmentRepository.getByCertificationCourseId(certificationCourseId)
      .then((assessment) => {
        userId = assessment.userId;
        dateOfCertification = assessment.createdAt;

        return answersRepository.findByAssessment(assessment.id);
      })
      .then((answersByAssessments) => {
        listAnswers = answersByAssessments;
        return certificationChallengesRepository.findByCertificationCourseId(certificationCourseId);
      })
      .then((certificationChallenges) => {
        listCertificationChallenges = certificationChallenges;
        return certificationCourseRepository.get(certificationCourseId);
      })
      .then((certificationCourse) => {
        certificationCourseStatus = certificationCourse.status;
        return userService.getProfileToCertify(userId, dateOfCertification);
      })
      .then((listCompetences) => {
        const testedCompetences = listCompetences.filter(competence => competence.challenges.length > 0);

        const result = _getResult(listAnswers, listCertificationChallenges, testedCompetences);
        // FIXME: Missing tests
        result.createdAt = dateOfCertification;
        result.userId = userId;
        result.status = certificationCourseStatus;
        return result;
      });
  },

};
