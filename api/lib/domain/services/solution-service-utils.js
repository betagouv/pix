
/*
 * Compare 2 String.
 * If they contain a list of number, and these unordered number are same, it returns true.
 * Else, it returns false.
 *
 * Example : listA = "1,4,8,3"           listB = "1,4,8,3"         => returns true
 * Example : listA = "1,4,8,3"           listB = "4,8,1,3"         => returns true (even when list are not ordered)
 * Example : listA = "1,4,8,3,55,3"      listB = "4,8,1,3"         => returns false (not same list size)
 * Example : listA = "1,4,8,9"           listB = "4,8,1,3"         => returns false (not same numbers in list)
 * Example : listA = "blah-blah"         listB = "4,8,1,3"         => returns false (listA is not a list)
 */
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
  return rawAnswer.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function fuzzyMatchingWithAnswers(userAnswer, correctAnswersList) {
  userAnswer = removeAccentsSpacesUppercase(userAnswer);
  for (const correctAnswer of correctAnswersList) {
    if (userAnswer == removeAccentsSpacesUppercase(correctAnswer)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  removeAccentsSpacesUppercase,
  fuzzyMatchingWithAnswers,
  areStringListEquivalent
};
