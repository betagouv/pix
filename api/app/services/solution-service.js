'use strict';



module.exports = {

  matchUserAnswerWithActualSolution (answer, solution) {

    if (solution.type === 'QCU') {
      if (answer.attributes.value === solution.value) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else if (solution.type === 'QCM') {
      if (answer.attributes.value.split(',').sort().join(',') === solution.value.split(',').sort().join(',')) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else {
      return 'pending';
    }
    
  }

};
