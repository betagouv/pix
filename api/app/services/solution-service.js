'use strict';



module.exports = {

  matchUserAnswerWithActualSolution (answer, solution) {

    console.log('answer is ' + JSON.stringify(answer));
    console.log('solution is ' +  JSON.stringify(solution));

    if (solution.type === 'QCU') {
      if (answer.attributes.value === solution.value) {
        return 'ok';
      } else {
        return 'ko';
      }
    } else {
      return 'pending';
    }
    
  }

};
