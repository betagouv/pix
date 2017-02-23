/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');

/*
*
* solutions looks like
* { Google: [ 'Google', 'google.fr', 'Google Search' ],
*   Yahoo: [ 'Yahoo', 'Yahoo Answer' ],
*   Bing: [ 'Bing' ] }
*/
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


function _calculateValidation(answers, solutions) {

  const validations = {};

  _.each(answers, (answer, index) => {

    const indexation = answer + '_' + index;
    const solutionKeys = Object.keys(solutions);

    _.each(solutionKeys, (solutionKey) => {

      const solutionVariants = solutions[solutionKey];

      if (_.isUndefined(validations[indexation])) {
        validations[indexation] = [];
      }

      validations[indexation].push(utils.treatmentT1T2T3(answer, solutionVariants));

    });
  });
  return validations;
}

function _numberOfGoodAnswers(fullValidations) {
  const allGoodAnswers = _goodAnswers(fullValidations);
  const uniqGoodAnswers = _.uniqBy(allGoodAnswers, 'adminAnswers');
  return uniqGoodAnswers.length;
}

function _goodAnswers(fullValidations) {
  return _.chain(fullValidations)
          .map(_goodAnswer) // null values to represents bad answers.
          .filter((e) => e !== null)
          .value();
}

// the lowest t1t2t3 ratio is below 0.25
function _goodAnswer(fullValidation) {
  const bestAnswerSoFar = _.minBy(fullValidation, (e) => e.t1t2t3Ratio);
  return bestAnswerSoFar.t1t2t3Ratio <= 0.25 ? bestAnswerSoFar : null;
}

function _calculateResult(scoring, validations) {
  let result = 'ok';

  const numberOfGoodAnswers = _numberOfGoodAnswers(validations);

  if (_.isEmpty(scoring)) {
    if (numberOfGoodAnswers !== _.size(validations)) {
      result = 'ko';
    }
  } else {

    const minGrade = _.min(Object.keys(scoring));
    const maxGrade = _.max(Object.keys(scoring));

    if (numberOfGoodAnswers >= maxGrade) {
      result = 'ok';
    } else if (numberOfGoodAnswers >= minGrade) {
      result = 'partially';
    } else {
      result = 'ko';
    }
  }
  return result;
}

module.exports = {
  match(yamlAnswer, yamlSolution, yamlScoring) {

    // Validate inputs
    if (_.isNotString(yamlAnswer)
        || _.isNotString(yamlSolution)
        || _.isEmpty(yamlAnswer)
        || !_.includes(yamlSolution, '\n')) {
      return 'ko';
    }

    // Convert Yaml to JS objects
    const answers = jsYaml.safeLoad(yamlAnswer);
    const solutions = jsYaml.safeLoad(yamlSolution);
    const scoring = jsYaml.safeLoad(yamlScoring);


    // We allow the admin to mistakenly enter uppercases and spaces before/after actual solution
    const treatedSolutions = _applyTreatmentsToSolutions(solutions);
    const treatedAnswers = _applyTreatmentsToAnswers(answers);

    // Comparisons
    const fullValidations = _calculateValidation(treatedAnswers, treatedSolutions);

    return _calculateResult(scoring, fullValidations);
  }

};
