import Ember from 'ember';
import _ from 'lodash';
import answersAsObject from 'pix-live/utils/answers-as-object';
import solutionsAsObject from 'pix-live/utils/solution-as-object';
import labelsAsObject from 'pix-live/utils/labels-as-object';
import resultDetailsAsObject from 'pix-live/utils/result-details-as-object';

const QrocmIndSolutionPanel = Ember.Component.extend({
  //TODO Renommer FieldsData
  dataToDisplay : Ember.computed('challenge.proposals', 'answer.value', 'solution.value', function () {

    const labels = labelsAsObject(this.get('challenge.proposals'));
    const inputKeys = _.keys(labels);
    const answers = answersAsObject(this.get('answer.value'), inputKeys);//TODO voir si on peut reformater en passant labels
    const solutions = solutionsAsObject(this.get('solution.value'));
    const resultDetails = resultDetailsAsObject(this.get('answer.resultDetails'));


    const dataToDisplay = [];

    inputKeys.forEach((key) => {//Voir si on peut retourner directement la classe
      const isRightAnswer = resultDetails[key];
      const noAnswer = answers[key] === '' && !resultDetails[key];
      const isWrongAnswer = answers[key] !== '' && !resultDetails[key];

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

