const _ = require('../../../lib/infrastructure/utils/lodash-utils');


// as offered by https://gist.github.com/andrei-m/982927
const _levenshtein = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let tmp, i, j, prev, val;
  // swap to save some memory O(min(a,b)) instead of O(a)
  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  const row = Array(a.length + 1);
  // init the row
  for (i = 0; i <= a.length; i++) {
    row[i] = i;
  }

  // fill in the rest
  for (i = 1; i <= b.length; i++) {
    prev = i;
    for (j = 1; j <= a.length; j++) {
      if (b[i-1] === a[j-1]) {
        val = row[j-1]; // match
      } else {
        val = Math.min(row[j-1] + 1, // substitution
              Math.min(prev + 1,     // insertion
                       row[j] + 1));  // deletion
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};

// Calculate the smallest levenshtein distance
function _smallestLevenshteinDistance(userAnswer, adminAnswers) {

  let min = _levenshtein(userAnswer, adminAnswers[0]);
  if (adminAnswers.length === 1) {
    return min;
  } else {
    _.each (adminAnswers, (adminAnswer) => {
      const currentLevenshtein = _levenshtein(userAnswer, adminAnswer);
      if (currentLevenshtein < min) {
        min = currentLevenshtein;
      }
    });
    return min;
  }

}

function _removeAccentsSpacesUppercase(rawAnswer) {
  // Remove accents/diacritics in a string in JavaScript
  // http://stackoverflow.com/a/37511463/827989
  // replace \u00A0\ is for unbreakable space which can come from excel copypaste
  return rawAnswer.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u00A0/g, ' ').replace(/\s/g, '');

}

// Remove diacritics
function _treatmentT1(strArg) {
  if (_.isString(strArg)) {
    return _removeAccentsSpacesUppercase(strArg);
  }
  return '';
}


// Remove punctuation
function _treatmentT2(strArg) {
  if (_.isString(strArg)) {
    return strArg.replace(/[^a-zA-Z0-9 ]+/g, '').replace('/ {2,}/',' ').replace( /\s\s+/g, ' ' );
  }
  return '';
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


