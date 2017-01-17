/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const utils = require('./solution-service-utils');
const jsYaml = require('js-yaml');
const _ = require('../../utils/lodash-utils');
const util = require('util');


_rightNumberOfAnswers = function (answers, nbExpectedAnswers) {
  return Object.keys(answers).length == nbExpectedAnswers;
}

module.exports = {

  match (yamlAnswer, yamlSolution, yamlScoring, nbExpectedAnswers) {

    const answers = jsYaml.safeLoad(yamlAnswer);
    const solutions = jsYaml.safeLoad(yamlSolution);

    if (! _rightNumberOfAnswers(answers, nbExpectedAnswers)) {
      return "ko";
    }

    const validations = {};

    _.each(answers, (answer) => {
      validations[answer] = false;
      const solutionKeys = Object.keys(solutions);
      if (solutionKeys.includes(answer)) {
        validations[answer] = true;
      }
      else {
        _.each(solutionKeys, (solutionKey) => {
          if (validations[answer] == false) {
            const solutionVariants = solutions[solutionKey];
            if (solutionVariants.includes(answer)) {
              validations[answer] = true;
            }
          }
        })
      }
    })


    /*_.each(validations, (validation) => {
      console.log('***************************' + validation);
      if (!validation){
        //return "ko";
        console.log('here');
      }
    });*/

    let res = _.find(validations,function(item){
        return item === false;
    });

    if (typeof res !== 'undefined')
      return "ko";



    return "ok";
  }


};
