const minimumReproductibilityRateToBeCertified = 50;
const minimumReproductibilityRateToBeTrusted = 80;
const numberOfPixForOneLevel = 8;
const _ = require('lodash');
const moment = require('moment');
const answerServices = require('./answer-service');
const AnswerStatus = require('../models/AnswerStatus');

const certificationCourseRepository = require('../../infrastructure/repositories/certification-course-repository');
const CertificationCourse = require('../../domain/models/CertificationCourse');
const certificationChallengesService = require('../../../lib/domain/services/certification-challenges-service');
const userService = require('../../../lib/domain/services/user-service');

function _computeSumPixFromCompetences(listCompetences) {
  return  _.sumBy(listCompetences, c => c.pixScore);
}

function _enhanceAnswersWithCompetenceId(listAnswers, listChallenges) {
  return _.map(listAnswers, (answer) => {
    const competenceId = listChallenges
      .find((challenge) => challenge.get('challengeId') === answer.get('challengeId'))
      .get('competenceId');
    answer.set('competenceId', competenceId);
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
function _getMalusPix(answersWithCompetences, listCompetences, reproductibilityRate) {
  return listCompetences.reduce((malus, competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return malus + _computedPixToRemovePerCompetence(numberOfCorrectAnswers, competence, reproductibilityRate);
  }, 0);
}

function _getCompetencesWithCertifiedLevel(answersWithCompetences, listCompetences, reproductibilityRate) {
  return listCompetences.map((competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return {
      name: competence.name,
      index:competence.index,
      id: competence.id,
      level: _getCertifiedLevel(numberOfCorrectAnswers, competence, reproductibilityRate) };
  });
}
function _getCompetenceWithFailedLevel(listCompetences) {
  return listCompetences.map((competence) => {
    return {
      name: competence.name,
      index:competence.index,
      id: competence.id,
      level: -1 };
  });
}

module.exports = {

  getResult(listAnswers, listChallenges, listCompetences) {
    const reproductibilityRate = answerServices.getAnswersSuccessRate(listAnswers);
    if (reproductibilityRate < minimumReproductibilityRateToBeCertified) {
      return { listCertifiedCompetences: _getCompetenceWithFailedLevel(listCompetences), totalScore: 0 };
    }

    const actualPix = _computeSumPixFromCompetences(listCompetences);
    const answersByCompetences = _enhanceAnswersWithCompetenceId(listAnswers, listChallenges);
    const pixToRemove = _getMalusPix(answersByCompetences, listCompetences, reproductibilityRate);
    const listCertifiedCompetences = _getCompetencesWithCertifiedLevel(answersByCompetences, listCompetences, reproductibilityRate);
    const totalScore = actualPix - pixToRemove;

    return { listCertifiedCompetences,  totalScore };
  },

  createNewCertification(userId) {
    let certificationCourse = new CertificationCourse({ userId, status: 'started' });

    return certificationCourseRepository.save(certificationCourse)
      .then((savedCertificationCourse) => {
        return certificationCourse = savedCertificationCourse;
      })
      .then(() => userService.getProfileToCertify(userId, moment().toISOString()))
      .then((userProfile) => certificationChallengesService.saveChallenges(userProfile, certificationCourse));
  }

};
