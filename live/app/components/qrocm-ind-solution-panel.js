import Ember from 'ember';
import _ from 'lodash';
import answerAsObject from 'pix-live/utils/answers-as-object';
import solutionAsObject from 'pix-live/utils/solution-as-object';
import labelAsObject from 'pix-live/utils/labels-as-object';

/*function deletePlaceholderInLabel(keyInput) {
 if (keyInput.indexOf('#') != -1) {
 keyInput = keyInput.substring(0, keyInput.indexOf('#'));
 }
 return keyInput;
 }

 function transformSolutionsToString(solutionsAsObject) {
 _.each(solutionsAsObject, function (potentialSolution) {
 potentialSolution.forEach(function (value, index) {
 potentialSolution[index] = potentialSolution[index].toString();
 });
 });
 return solutionsAsObject;
 }

 function parseChallenge(proposals) {
 const proposalsSplitted = proposals.split(/\$\{|}/).slice(0, -1);
 const labelsAsObject = {};
 proposalsSplitted.forEach((element, index) => {
 if (index % 2 != 0) {
 element = deletePlaceholderInLabel(element);
 labelsAsObject[element] = proposalsSplitted[index - 1];
 }
 });
 return labelsAsObject;
 }*/

function fillAnswerOfPassedChallenge(answersAsObject, inputKeys) {
  inputKeys.forEach(function (key) {
    answersAsObject[key] = '';
  });
  return answersAsObject;
}

const QrocmIndSolutionPanel = Ember.Component.extend({
  /*
   answersAsObject: Ember.computed('answer.value', function () {
   const yamlAnswer = this.get('answer.value');
   let answersObject = {};
   if (yamlAnswer != '#ABAND#') {
   answersObject = jsyaml.safeLoad(yamlAnswer);
   }
   return answersObject;
   }),*/

  /*solutionsAsObject: Ember.computed('solution.value', function () {
   const yamlSolution = this.get('solution.value');
   let solutionsAsObject = jsyaml.safeLoad(yamlSolution);
   solutionsAsObject = transformSolutionsToString(solutionsAsObject);
   return solutionsAsObject;
   }),*/

  /*labelsAsObject: Ember.computed('challenge.proposals', function () {
   const proposals = this.get('challenge.proposals').replace(/\n/g, '');
   const labelsAsObject = parseChallenge(proposals);
   return labelsAsObject;
   }),*/

  dataToDisplay: Ember.computed('challenge.proposals', 'answer.value', 'solution.value', function () {

    const labelsAsObject = labelAsObject(this.get('challenge.proposals'));
    let answersAsObject = answerAsObject(this.get('answer.value'));
    const solutionsAsObject = solutionAsObject(this.get('solution.value'));

    const inputKeys = _.keys(labelsAsObject);
    if (_.isEmpty(answersAsObject)) {
      answersAsObject = fillAnswerOfPassedChallenge(answersAsObject, inputKeys);
    }
    const dataToDisplay = [];

    inputKeys.forEach(function (key) {

      const isRightAnswer = _.includes(solutionsAsObject[key], answersAsObject[key]);
      const noAnswer = answersAsObject[key] === '';
      const isWrongAnswer = !isRightAnswer && !noAnswer;

      if (answersAsObject[key] === '') {
        answersAsObject[key] = 'Pas de réponse';
      }

      const labelAnswerSolution = {
        label: labelsAsObject[key],
        answer: answersAsObject[key],
        solution: solutionsAsObject[key][0],
        rightAnswer: isRightAnswer,
        wrongAnswer: isWrongAnswer,
        noAnswer: noAnswer
      };
      dataToDisplay.push(labelAnswerSolution);
    });

    return dataToDisplay;
  })

});


export default QrocmIndSolutionPanel;

