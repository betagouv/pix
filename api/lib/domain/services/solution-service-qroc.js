const utils = require('./solution-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

module.exports = {

  match (answer, solution) {

    if (_.isNotString(answer) || _.isNotString(solution) || _.isEmpty(solution)) {
      return 'ko';
    }

    const solutions = solution.split('\n').filter(Boolean); // removes empty String

    const treatmentT1 = utils.treatmentT1(answer);
    const treatmentT2 = utils.treatmentT2(treatmentT1);
    const treatmentT3 = utils.treatmentT3(treatmentT2, solutions);

    if (treatmentT3 <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }
};
