const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');

function _applyTreatmentsToSolutions(solutions) {
  _.each(solutions, (solution, index) => {
    const validOptions = [];
    solution.forEach((validValue) => {
      validOptions.push(validValue.toString().trim().toLowerCase());
    });
    solutions[index] = validOptions;
  });
  return solutions;
}


function _calculateResult(validations) {
  let result = 'ok';

  _.each(validations, (validation) => {
    if (validation.t1t2t3Ratio > 0.25) {
      result = 'ko';
    }
  });
  return result;
}

module.exports = {

  match (yamlAnswer, yamlSolution) {

    if (_.isNotString(yamlAnswer)
        || _.isNotString(yamlSolution)
        || _.isEmpty(yamlSolution)
        || !_.includes(yamlSolution, '\n')) {
      return 'ko';
    }

    // remove unbreakable spaces
    // and convert YAML to JSObject
    const answers = jsYaml.load(yamlAnswer.replace(/\u00A0/g, ' '));
    const solutions = jsYaml.load(yamlSolution);

    //Pre - Treatment
    const treatedSolutions = _applyTreatmentsToSolutions(solutions);

    //Comparison
    const validations = _.map(answers, function(answer, keyAnswer) {
      const solutionsToAnswer = treatedSolutions[keyAnswer];
      return utils.treatmentT1T2T3(answer, solutionsToAnswer);
    });


    //Restitution
    return _calculateResult(validations);

  }

};
