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

function _hasBadAnswers(validations) {
  const badAnswers = _.filter(validations, (item) => item === false);
  return !_.isEmpty(badAnswers);
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
    const solutionKeys = _getSolutionKeys(solutions);
    _.each(solutionKeys, (solutionKey) => {
      const solutionVariants = solutions[solutionKey];
      if (_.isUndefined(validations[answer])) {
        validations[answer] = [];
      }
        // console.log('answer- - - - - - - - - - - - - - - - - - - - ', answer);
        // console.log('index- - - - - - - - - - - - - - - - - - - - ', index);
        // console.log('solutionVariants- - - - - - - - - - - - - - - - - - - - ', solutionVariants);
      validations[answer].push(utils.treatmentT1T2T3(answer, solutionVariants.split(',')));
        // console.log('validations[' + answer + '_' + index + '] - - - - - - - - - - - - - - - - - - - - ', validations[answer + '_' + index]);
        // console.log('');
    });
  });
  return validations;
}

function _numberOfGoodAnswers(answers, newValidations) {
  return _.filter(newValidations, _isGoodAnswer).length;
  // let result = 0;
  // _.each(answers, function(answer) {
  //   // const groupedAnswer = _.groupBy(newValidations, function(e) {return e.userAnswer === answer;})[true];
  //   const answerValidation = newValidations[answer];
  //   console.log('newValidations- - - - - - - - - - - - - - - - - - - - ', newValidations);
  //   // if (_isGoodAnswer(groupedAnswer)) {
  //   //   result += 1;
  //   // }
  //   console.log('answer - - - - - - - - - - - - - - - - - - - - ', answer);
  //   // console.log('groupedAnswer - - - - - - - - - - - - - - - - - - - - ', groupedAnswer);
  //   console.log('');
  // });
  // return result;
}

// the lowest t1t2t3 ratio is below 0.25
function _isGoodAnswer(newValidation) {
  return _.minBy(newValidation, (e) => e.t1t2t3Ratio).t1t2t3Ratio <= 0.25;
}

function _numberOfBadAnswers(newValidations) {
  return newValidations.length - _numberOfGoodAnswers(newValidations);
}

function _calculateResult(scoring, validations) {
  let result = 'ok';

  if (_.isEmpty(scoring)) {
    if (_hasBadAnswers(validations)) {
      result = 'ko';
    }
  } else {

    const nbGoodAnswers = _.filter(validations, (item) => item === true).length;
    const minGrade = _.min(Object.keys(scoring));
    const maxGrade = _.max(Object.keys(scoring));

    if (nbGoodAnswers >= maxGrade) {
      result = 'ok';
    } else if (nbGoodAnswers >= minGrade) {
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
    const validations = _compareAnswersAndSolutions(answers, solutions);
    const newValidations = _calculateValidation(answers, solutions);
// console.log('validations- - - - - - - - - - - - - - - - - - - - - ', validations);
// console.log('solutions- - - - - - - - - - - - - - - - - - - - ', solutions);
// console.log('newValidations- - - - - - - - - - - - - - - - - - - - - ', newValidations);
console.log('new _numberOfGoodAnswers- - - - - - - - - - - - - - - - - - - - ', _numberOfGoodAnswers(answers, newValidations));
    // console.log('answers- - - - - - - - - - - - - - - - - - - - ', answers);
// console.log('solutions- - - - - - - - - - - - - - - - - - - - ', solutions);
    // Restitution
    return _calculateResult(scoring, validations);
  }

};
