const utils = require('./solution-service-utils');
const yaml = require('js-yaml');
const _ = require('lodash');

module.exports = {

  match (yamlAnswer, yamlSolution) {
    try {
      let result = 'ko';
      answer = yaml.load(yamlAnswer);
      solution = yaml.load(yamlSolution);
      console.log(answer, solution);
      const everyAnswerMatchItsSolution = _.every(solution, function(possibleAnswers, key) {
        // console.log('test', key);
        // if(!utils.fuzzyMatchingWithAnswers(answer[key], possibleAnswers)) {
        //   result = 'ko';
        // }
        return utils.fuzzyMatchingWithAnswers(answer[key], possibleAnswers)
      });
      if (everyAnswerMatchItsSolution) {
        result = 'ok';
      }
      return result;
    } catch (e) { // Parse exceptions like script injection could happen and detected here.
      return 'ko';
    }
    return 'ko';
  }

};
