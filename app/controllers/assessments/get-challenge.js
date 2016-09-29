import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  assessmentService: Ember.inject.service('assessment'),

  currentChallenge: Ember.computed('model', function() {
    const currentChallenge = this.get('model.challenge');
    const promiseChallenge = this.get('model.assessment.course')
      .then((course) => course.get('challenges'))
      .then((challenges) => {
        const progress = challenges.indexOf(currentChallenge) + 1;
        const progressPercentage = ((challenges.indexOf(currentChallenge) + 1) / (challenges.length)) * 100;
        const maxValue = challenges.length;
        return {
          progress: progress,
          progressPercentage : progressPercentage,
          maxValue : maxValue
         };
    });
    return DS.PromiseObject.create({ promise: promiseChallenge });
  }),



  saveAnswerAndNavigate(currentChallenge, assessment, answerValue) {

    const answer = this._createAnswer(answerValue, currentChallenge, assessment);
    answer.save().then(() => {
      this._navigateToNextView(currentChallenge, assessment);
    });
  },

  _createAnswer: function (answerValue, currentChallenge, assessment) {

    return this.get('store').createRecord('answer', {
      value: answerValue,
      challenge: currentChallenge,
      assessment
    });
  },

  _navigateToNextView(currentChallenge, assessment) {

    this.get('assessmentService').getNextChallenge(currentChallenge, assessment).then((challenge) => {
      if (challenge) {
        return this.transitionToRoute('assessments.get-challenge', { challenge, assessment });
      }
      return this.transitionToRoute('assessments.get-results', { assessment });
    });
  }

});
