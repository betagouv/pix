const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');

/*
*
* solutions looks like :
*
* { '9lettres': [ 'courgette' ],
*   '6lettres': [ 'tomate', 'chicon', 'legume' ] }
*
*/
function _applyTreatmentsToSolutions(solutions) {
  return _.mapValues(solutions, (validSolutions) => {
    return _.map(validSolutions, (validSolution) => {
      return utils._treatmentT2(utils._treatmentT1(validSolution));
    });
  });
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
