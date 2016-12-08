const utils = require('./solution-service-utils');
const yaml = require('js-yaml');
const _ = require('lodash');

// We expect that parsing from airtable returns an Object
// whose all values are array, like this :
// { Google: [ 'Google', 'google.fr', 'Google Search' ], Yahoo: [ 'Yahoo', 'Yahoo Answer' ] }
function _isValidSolution(solution) {
  let result = false;
  if (_.isObject(solution)) {
    result = _.every(solution, function(item) {
      return _.isArray(item) && _.every(item, (e) => _.isString(e));
    });
  }
  return result;
}

module.exports = {

  match (yamlAnswer, yamlSolution) {
    try {
      let result = 'ko';

      const answerMap = yaml.load(yamlAnswer);
      // answerMap is
      //{ num1: ' google.fr', num2: 'yahoo aNswer ' }

      const solution = yaml.load(yamlSolution);
      // solution is
      // { Google: [ 'Google', 'google.fr', 'Google Search' ], Yahoo: [ 'Yahoo', 'Yahoo Answer' ] }

      if (!_isValidSolution(solution)) {
        return result;
      }

      const possibleAnswers = {};
      _.each(solution, (answerList, solutionKey) => {
        _.each(answerList, (answer) => {
          possibleAnswers[answer] = solutionKey;
        });
      });
      // possibleAnswers is
      // { Google: 'Google','google.fr': 'Google','Google Search': 'Google',Yahoo: 'Yahoo','Yahoo Answer': 'Yahoo' }

      let scoredKeys = [];
      _.each(answerMap, (answer) => {
        _.each(possibleAnswers, (solutionKey, possibleAnswer) => {
          if(utils.fuzzyMatchingWithAnswers(answer, [possibleAnswer])) {
            scoredKeys.push(solutionKey);
          }
        });
      });
      //scoredKeys is
      // [ 'Google', 'Yahoo' ]

      // remove duplicates
      scoredKeys = _.uniq(scoredKeys);

      const numberOfUserAnswers = Object.keys(answerMap).length;
      const numberOfUniqueCorrectAnswers = scoredKeys.length;

      if (numberOfUniqueCorrectAnswers === numberOfUserAnswers) {
        result = 'ok';
      }
      return result;
    } catch (e) { // Parse exceptions like script injection could happen. They are detected here.
      return 'ko';
    }
  }

};
