const minimumReproductibilityToBeCertified = 0.5;
const minimumReproductibilityToBeTrusted = 0.8;
const numberOfPixForOneLevel = 8;
const _ = require('lodash');

function _getReproductibilityFromAnswers(listAnswers) {
  if(listAnswers.length < 1) {
    return 0;
  }
  const numberOfCorrectAnswers = _.filter(listAnswers, (answer) => (answer.get('result') === 'ok')).length;
  return numberOfCorrectAnswers/listAnswers.length;
}

function _computeSumPixFromCompetences(listCompetences) {
  return _.reduce(listCompetences, (sum, competence) => sum + competence.pixScore, 0);
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
    .value()
    .length;
}

function _computedMalusPerCompetence(numberOfCorrectAnswers, competence, reproductibility) {
  if (numberOfCorrectAnswers < 2) {
    return competence.pixScore;
  }
  if(reproductibility < minimumReproductibilityToBeTrusted && numberOfCorrectAnswers === 2) {
    return numberOfPixForOneLevel;
  }
  return 0;
}

function _getMalusPix(answersWithCompetences, listCompetences, reproductibility) {
  return listCompetences.reduce((malus, competence) => {
    const numberOfCorrectAnswers = _numberOfCorrectAnswersPerCompetence(answersWithCompetences, competence);
    return malus + _computedMalusPerCompetence(numberOfCorrectAnswers, competence, reproductibility);
  }, 0);
}

module.exports = {
  getScore(listAnswers, listChallenges, listCompetences) {
    const reproductibility = _getReproductibilityFromAnswers(listAnswers);
    if (reproductibility < minimumReproductibilityToBeCertified) {
      return 0;
    }

    const actualPix = _computeSumPixFromCompetences(listCompetences);
    const answersByCompetences = _enhanceAnswersWithCompetenceId(listAnswers, listChallenges);
    const pixToRemove = _getMalusPix(answersByCompetences, listCompetences, reproductibility);

    return actualPix - pixToRemove;
  }
};
