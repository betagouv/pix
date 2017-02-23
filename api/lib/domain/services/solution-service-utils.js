const _ = require('../../../lib/infrastructure/utils/lodash-utils');
const levenshtein = require('fast-levenshtein');


// Calculate the smallest levenshtein distance
function _smallestLevenshteinDistance(userAnswer, adminAnswers) {

  let min = levenshtein.get(userAnswer, adminAnswers[0]);
  if (adminAnswers.length === 1) {
    return min;
  } else {
    _.each (adminAnswers, (adminAnswer) => {
      const currentLevenshtein = levenshtein.get(userAnswer, adminAnswer);
      if (currentLevenshtein < min) {
        min = currentLevenshtein;
      }
    });
    return min;
  }

}


function _treatmentT1(strArg) {
  // Remove accents/diacritics in a string in JavaScript
  // http://stackoverflow.com/a/37511463/827989
  // replace \u00A0\ is for unbreakable space which can come from excel copypaste
  return strArg.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u00A0/g, ' ').replace(/\s\s+/g, ' ');
}


// Remove punctuation
function _treatmentT2(strArg) {
  return strArg.replace(/[^a-zA-Z0-9 ]+/g, '').replace('/ {2,}/',' ').replace( /\s\s+/g, ' ' );
}

// Calculate the smallest levenshtein distance
function _treatmentT3(userAnswer, adminAnswers) {
  return _smallestLevenshteinDistance(userAnswer, adminAnswers) / userAnswer.length;
}

function treatmentT1T2T3(userAnswer, adminAnswers) {

  if (_.isNotArrayOfString(adminAnswers)) return null;
  if (_.isNotString(userAnswer)) return null;
  if (_.isEmpty(adminAnswers)) return null;

  return {
    userAnswer: userAnswer,
    adminAnswers: JSON.stringify(adminAnswers),
    t1: _treatmentT1(userAnswer),
    t1t2: _treatmentT2(_treatmentT1(userAnswer)),
    t2: _treatmentT2(userAnswer),
    t1t3Ratio: _treatmentT3(_treatmentT1(userAnswer), adminAnswers),
    t2t3Ratio: _treatmentT3(_treatmentT2(userAnswer), adminAnswers),
    t1t2t3Ratio: _treatmentT3(_treatmentT2(_treatmentT1(userAnswer)), adminAnswers),
    t3Ratio: _treatmentT3(userAnswer, adminAnswers),
  };

}



module.exports = {
  _smallestLevenshteinDistance,
  _treatmentT1,
  _treatmentT2,
  _treatmentT3,
  treatmentT1T2T3,
};
