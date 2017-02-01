const utils = require('./solution-service-utils');
const _ = require('lodash');

module.exports = {

  match (answer, solution) {
    /* eslint-disable no-alert, no-console */
    const result = utils.fuzzyMatchingWithAnswers(answer, solution.split('\n'));
    /* eslint-enable no-alert, no-console */
    if (_.isString(solution) && solution.length > 0 && utils.fuzzyMatchingWithAnswers(answer, solution.split('\n'))) {
      return 'ok';
    }
    return 'ko';
  }

};
