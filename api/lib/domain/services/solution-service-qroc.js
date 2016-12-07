const utils = require('./solution-service-utils');

module.exports = {

  match (answer, solution) {
    if (utils.fuzzyMatchingWithAnswers(answer, solution)) {
      return 'ok';
    }
    return 'ko';
  }

};
