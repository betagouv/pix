const utils = require('./solution-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

function _applySolutionsTreatments(solutions) {
  return _.map(solutions, (solution) => {
    return solution.toString().trim().toLowerCase();
  });
}


module.exports = {

  match (answer, solution) {

    if (_.isNotString(answer) || _.isNotString(solution) || _.isEmpty(solution)) {
      return 'ko';
    }

    const solutions = _.chain(solution)
                        .split('\n')
                        .reject(_.isEmpty)
                        .value();

    const treatedSolutions = _applySolutionsTreatments(solutions);
    const treatedAnswer = utils.treatmentT1T2T3(answer, treatedSolutions);

    if (treatedAnswer.t1t2t3Ratio <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }
};
