const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');

function _applyTreatmentsToSolutions(solutions) {
  return _.mapValues(solutions, (validSolutions) => {
    return _.map(validSolutions, (validSolution) => {
      // toString() in case the admin entered number as solution,
      // yaml converter may convert it into number and not string.
      return utils._treatmentT2(utils._treatmentT1(validSolution.toString()));
    });
  });
}

function _applyTreatmentsToAnswers(answers) {
  // toString() in case the user entered number as solution,
  // yaml converter may convert it into number and not string.
  return _.mapValues(answers, _.toString);
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
    const treatedAnswers = _applyTreatmentsToAnswers(answers);

    //Comparison
    const validations = _.map(treatedAnswers, function(answer, keyAnswer) {
      const solutionsToAnswer = treatedSolutions[keyAnswer];
      return utils.treatmentT1T2T3(answer, solutionsToAnswer);
    });

    //Restitution
    return _calculateResult(validations);

  }

};
