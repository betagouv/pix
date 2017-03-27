const _ = require('../../../lib/infrastructure/utils/lodash-utils');
const levenshtein = require('fast-levenshtein');

function _getSmallestLevenshteinDistance(userAnswer, adminAnswers) {

  let min = levenshtein.get(userAnswer, adminAnswers[0]);

  if (adminAnswers.length === 1) {
    return min;
  }

  _.each (adminAnswers, (adminAnswer) => {
    const currentLevenshtein = levenshtein.get(userAnswer, adminAnswer);
    if (currentLevenshtein < min) {
      min = currentLevenshtein;
    }
  });

  return min;

}

function t3(userAnswer, adminAnswers) {
  return _getSmallestLevenshteinDistance(userAnswer, adminAnswers) / userAnswer.length;
}

module.exports =  {
  t3
};
