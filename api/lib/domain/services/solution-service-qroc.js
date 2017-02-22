const utils = require('./solution-service-utils');
const _ = require('../../infrastructure/utils/lodash-utils');

module.exports = {

  match (answer, solution) {

    if (_.isNotString(answer) || _.isNotString(solution) || _.isEmpty(solution)) {
      return 'ko';
    }

    const solutions = solution.split('\n').filter(Boolean); // removes empty String

    const treatedAnswer = utils.treatmentT1T2T3(answer, solutions);

    if (treatedAnswer.t1t2t3Ratio <= 0.25) {
      return 'ok';
    }
    return 'ko';
  }
};
