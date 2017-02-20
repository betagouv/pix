const _ = require('../../../lib/infrastructure/utils/lodash-utils');

function _arrayToNonEmptyStringArray(arr) {
  if (_.isArray(arr)) {
    return arr.filter(e => e != null).map(String);
  }
  return [];
}

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

function areStringListEquivalent(listA, listB) {
  let result = false;
  try {
    const trimmedListA = listA.split(',').map(s => s.trim());
    const trimmedListB = listB.split(',').map(s => s.trim());
    result = (trimmedListA.sort().join(',') === trimmedListB.sort().join(','));
  } catch (e) {
    result = false;
  }
  return result;
}

function removeAccentsSpacesUppercase(rawAnswer) {
  // Remove accents/diacritics in a string in JavaScript
  // http://stackoverflow.com/a/37511463/827989
  // replace \u00A0\ is for unbreakable space which can come from excel copypaste
  return rawAnswer.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u00A0/g, ' ').replace(' ', '');

}

// Remove diacritics
function treatmentT1(strArg) {
  if (_.isString(strArg)) {
    return removeAccentsSpacesUppercase(strArg);
  }
  return '';
}


// Remove punctuation
function treatmentT2(strArg) {
  if (_.isString(strArg)) {
    return strArg.replace(/[^a-zA-Z ]+/g, '').replace('/ {2,}/',' ').replace( /\s\s+/g, ' ' );
  }
  return '';
}

// Calculate the smallest levenshtein distance
function treatmentT3(userAnswer, adminAnswers) {

  if (_.isNotArrayOfString(adminAnswers)) return null;
  if (_.isNotString(userAnswer)) return null;



}

function fuzzyMatchingWithAnswers(userAnswer, correctAnswersList) {
  userAnswer = removeAccentsSpacesUppercase(userAnswer);
  const correctAnswersArray = _arrayToNonEmptyStringArray(correctAnswersList);
  const result = _.some(correctAnswersArray, function(possibleAnswer) {
    return userAnswer === removeAccentsSpacesUppercase(possibleAnswer);
  });
  return result ;
}

module.exports = {
  removeAccentsSpacesUppercase,
  fuzzyMatchingWithAnswers,
  treatmentT1,
  treatmentT2,
  treatmentT3,
  areStringListEquivalent
};


