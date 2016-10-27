'use strict';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

  matchUserAnswerWithActualSolution (answer, solution) {

    let random = getRandomInt(1, 3);
    if (random === 1) {
      return 'ok';
    } else if (random === 2) {
      return 'ko';
    } else {
      return 'pending';
    }
    
  }

};
