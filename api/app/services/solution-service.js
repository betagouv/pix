'use strict';

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
function areStringListEquivalent (listA, listB) {
  let result = false;
  try {
    result = (listA.split(',').sort().join(',') === listB.split(',').sort().join(','));
  } catch(e) {
    result = false;
  }
  return result;
};

function removeAccentsSpacesUppercase (s) {
  // Remove accents/diacritics in a string in JavaScript
  // http://stackoverflow.com/a/37511463/827989
  return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function fuzzyMatchingWithAnswers (userAnswer, correctAnswers) {
  userAnswer = removeAccentsSpacesUppercase(userAnswer);
  let correctAnswersList = correctAnswers.split('\n');
  for(var i = 0; i < correctAnswersList.length; i++) {
    let correctAnswer = correctAnswersList[i];
    if(correctAnswer[0] != '$') { // Represents sometimes the first line of good answers
      if(correctAnswer[0] == '-') // Represents an item
        correctAnswer = correctAnswer.substr(1);
      if(userAnswer == removeAccentsSpacesUppercase(correctAnswer))
        return true;
    }
  }
  return false;
}

module.exports = {

  matchUserAnswerWithActualSolution (answer, solution) {

    if (solution.type === 'QCU') {
      if (answer.attributes.value === solution.value) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else if (solution.type === 'QCM') {
      if (areStringListEquivalent(answer.attributes.value, solution.value)) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else if (solution.type === 'QROC') {
      if (fuzzyMatchingWithAnswers(answer.attributes.value, solution.value)) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else {
      return 'pending';
    }
    
  }

};
