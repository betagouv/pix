const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');


function applyTreatmentsToAnswers(answers) {
  _.each(answers, (answer, index) => {
    answers[index] = answer.toString().trim().toLowerCase();
  });
  return answers;
}
function applyTreatmentsToSolutions(solutions) {
  _.each(solutions, (solution, index) => {
    const validOptions = [];
    solution.forEach((validValue) => {
      validOptions.push(validValue.toString().trim().toLowerCase());
    });
    solutions[index] = validOptions;
  });
  return solutions;
}
function compareAnswersAndSolutions(answers, solutions) {
  const validations = {};
  const keys = Object.keys(answers);

  keys.forEach((key) => {
    validations[key] = solutions[key].includes(answers[key]);
  });
  return validations;
}

// function calculateResult(validations) {
//   let result = 'ok';

//   _.each(validations, (validation) => {
//     if (validation === false) {
//       result = 'ko';
//     }
//   });
//   return result;
// }
function calculateResult(treatedAnswers) {
  let result = 'ok';

  _.each(treatedAnswers, (treatedAnswer) => {
    if (treatedAnswer.t1t2t3Ratio > 0.25) {
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

    //convert YAML to JSObject
    const answers = jsYaml.load(yamlAnswer);
    const solutions = jsYaml.load(yamlSolution);

    const treatedAnswers = _.map(answers, function(answer, keyAnswer) {
      const solutionsToAnswer = solutions[keyAnswer];
      return utils.treatmentT1T2T3(answer, solutionsToAnswer);
    });


    //Restitution
    return calculateResult(treatedAnswers);

  }

};
