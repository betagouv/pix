const minimumReproductibilityToBeCertified = 50;
const minimumReproductibilityToBeTrusted = 80;
const numberOfPixForOneLevel = 8;
const _ = require('lodash');
const answerServices = require('./answer-service');

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
    .filter(answer => answer.get('result') === 'ok')
    .size();
}

function _computedPixToRemovePerCompetence(numberOfCorrectAnswers, competence, reproductibility) {
  if (numberOfCorrectAnswers < 2) {
    return competence.pixScore;
  }
  if(reproductibility < minimumReproductibilityToBeTrusted && numberOfCorrectAnswers === 2) {
    return numberOfPixForOneLevel;
  }
  return 0;
}

function _getCertifiedLevel(numberOfCorrectAnswers, competence, reproductibility) {
  if (numberOfCorrectAnswers < 2) {
    return -1;
  }
  if(reproductibility < minimumReproductibilityToBeTrusted && numberOfCorrectAnswers === 2) {
    return competence.estimatedLevel -1;
  }
  return competence.estimatedLevel;
}
function _getMalusPix(answersWithCompetences, listCompetences, reproductibility) {
  return listCompetences.reduce((malus, competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return malus + _computedPixToRemovePerCompetence(numberOfCorrectAnswers, competence, reproductibility);
  }, 0);
}

function _getCompetencesWithCertifiedLevel(answersWithCompetences, listCompetences, reproductibility) {
  return listCompetences.map((competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return {
      name: competence.name,
      index:competence.index,
      id: competence.id,
      level: _getCertifiedLevel(numberOfCorrectAnswers, competence, reproductibility) };
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
    const reproductibility = answerServices.getAnswersSuccessRate(listAnswers);
    if (reproductibility < minimumReproductibilityToBeCertified) {
      return { listCertifiedCompetences: _getCompetenceWithFailedLevel(listCompetences), totalScore: 0 };
    }

    const actualPix = _computeSumPixFromCompetences(listCompetences);
    const answersByCompetences = _enhanceAnswersWithCompetenceId(listAnswers, listChallenges);
    const pixToRemove = _getMalusPix(answersByCompetences, listCompetences, reproductibility);
    const listCertifiedCompetences = _getCompetencesWithCertifiedLevel(answersByCompetences, listCompetences, reproductibility);
    const totalScore = actualPix - pixToRemove;

    return { listCertifiedCompetences,  totalScore };
  },
};
