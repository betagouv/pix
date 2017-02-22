/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
const jsYaml = require('js-yaml');
const _ = require('../../infrastructure/utils/lodash-utils');
const utils = require('./solution-service-utils');


function _applyTreatments(objects) {
  const result = {};
  _.each(objects, (value, key) => {
    result[key] = value.toString().trim().toLowerCase();
  });
  return result;
}

function _getSolutionKeys(solutions) {
  return Object.keys(solutions);
}

function _removeMatchedSolutionIfExist(matchingSolutionKey, solutions) {
  if (matchingSolutionKey) {
    solutions = _.omit(solutions, matchingSolutionKey);
  }
  return solutions;
}

function _compareAnswersAndSolutions(answers, solutions) {

  const validations = {};
  _.each(answers, (answer) => {
    validations[answer] = false;
    const solutionKeys = _getSolutionKeys(solutions);
    let matchingSolutionKey = null;
    _.each(solutionKeys, (solutionKey) => {
      if (validations[answer] === false) {
        const solutionVariants = solutions[solutionKey];
        if (!_.isEmpty(answer) && solutionVariants.includes(answer)) {
          validations[answer] = true;
          matchingSolutionKey = solutionKey;
        }
      }
    });
    solutions = _removeMatchedSolutionIfExist(matchingSolutionKey, solutions);
  });
  return validations;
}


function _calculateValidation(answers, solutions) {

  const validations = {};

  _.each(answers, (answer) => {

    const indexation = answer + '_' + _.guid();
    const solutionKeys = _getSolutionKeys(solutions);

    _.each(solutionKeys, (solutionKey) => {

      const solutionVariants = solutions[solutionKey];

      if (_.isUndefined(validations[indexation])) {
        validations[indexation] = [];
      }

      validations[indexation].push(utils.treatmentT1T2T3(answer, solutionVariants.split(',')));

    });
  });
  return validations;
}

function _numberOfGoodAnswers(newValidations) {
  const allGoodAnswers = _goodAnswers(newValidations);
  // console.log('');
  // console.log('allGoodAnswers- - - - - - - - - - - - - - - - - - - - ', allGoodAnswers);
  const uniqGoodAnswers = _.uniqBy(allGoodAnswers, 'adminAnswers');
  // console.log('uniqGoodAnswers- - - - - - - - - - - - - - - - - - - - ', uniqGoodAnswers);
  return uniqGoodAnswers.length;
}

function _goodAnswers(newValidations) {
  // rawGoodAnswers contains good answers, and null values to represent bad answers.
  const rawGoodAnswers = _.map(newValidations, (newValidation) => {
    return _goodAnswer(newValidation);
  });

  //removes null values, so that we keep only good answers
  const goodAnswers = _.filter(rawGoodAnswers, (e) => e !== null);
  return goodAnswers;
}

// the lowest t1t2t3 ratio is below 0.25
function _goodAnswer(newValidation) {
  const bestAnswerSoFar = _.minBy(newValidation, (e) => e.t1t2t3Ratio);
  return bestAnswerSoFar.t1t2t3Ratio <= 0.25 ? bestAnswerSoFar : null;
}

function _calculateResult(scoring, validations) {
  let result = 'ok';

  const numberOfGoodAnswers = _numberOfGoodAnswers(validations);
// console.log('_.size(validations)- - - - - - - - - - - - - - - - - - - - ', _.size(validations);
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
    // Convert Yaml to JS objects
    let answers = jsYaml.safeLoad(yamlAnswer);
    let solutions = jsYaml.safeLoad(yamlSolution);
    const scoring = jsYaml.safeLoad(yamlScoring);

    // Treatments
    answers = _applyTreatments(answers);
    solutions = _applyTreatments(solutions);

    // Comparisons
    // const validations = _compareAnswersAndSolutions(answers, solutions);
    const newValidations = _calculateValidation(answers, solutions);
// console.log('validations- - - - - - - - - - - - - - - - - - - - - ', validations);
// console.log('solutions- - - - - - - - - - - - - - - - - - - - ', solutions);
// console.log('newValidations - - - - - - - - - - - - - - - - - - - - - ', newValidations);
    // console.log('new _numberOfGoodAnswers- - - - - - - - - - - - - - - - - - - - ', _numberOfGoodAnswers(newValidations));
    // console.log('answers- - - - - - - - - - - - - - - - - - - - ', answers);
// console.log('solutions- - - - - - - - - - - - - - - - - - - - ', solutions);
    // Restitution
    return _calculateResult(scoring, newValidations);
  }

};
