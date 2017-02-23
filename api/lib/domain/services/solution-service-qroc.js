const utils = require('./solution-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

function _applySolutionTreatments(solution) {
  return  _.chain(solution)
            .split('\n')
            .reject(_.isEmpty)
            .map(_.trim)
            .map(_.toLower)
            .value();

}


module.exports = {

  match (answer, solution) {

    if (_.isNotString(answer) || _.isNotString(solution) || _.isEmpty(solution)) {
      return 'ko';
    }

    const treatedSolutions = _applySolutionTreatments(solution);
    const treatedAnswer = utils.treatmentT1T2T3(answer, treatedSolutions);

    if (treatedAnswer.t1t2t3Ratio <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }
};
