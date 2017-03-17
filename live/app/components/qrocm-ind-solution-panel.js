import Ember from 'ember';
import _ from 'lodash';
import answersAsObject from 'pix-live/utils/answers-as-object';
import solutionsAsObject from 'pix-live/utils/solution-as-object';
import labelsAsObject from 'pix-live/utils/labels-as-object';

function fillAnswerOfPassedChallenge(answersAsObject, inputKeys) {
  inputKeys.forEach(function (key) {
    answersAsObject[key] = '';
  });
  return answersAsObject;
}

const QrocmIndSolutionPanel = Ember.Component.extend({

  dataToDisplay: Ember.computed('challenge.proposals', 'answer.value', 'solution.value', function () {

    const labels = labelsAsObject(this.get('challenge.proposals'));
    let answers = answersAsObject(this.get('answer.value'));
    const solutions = solutionsAsObject(this.get('solution.value'));

    const inputKeys = _.keys(labels);
    if (_.isEmpty(answers)) {
      answers = fillAnswerOfPassedChallenge(answers, inputKeys);
    }
    const dataToDisplay = [];

    inputKeys.forEach(function (key) {
      const isRightAnswer = _.includes(solutions[key], answers[key]);
      const noAnswer = answers[key] === '';
      const isWrongAnswer = !isRightAnswer && !noAnswer;

      if (answers[key] === '') {
        answers[key] = 'Pas de réponse';
      }
      const labelAnswerSolution = {
        label: labels[key],
        answer: answers[key],
        solution: solutions[key][0],
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

