import Ember from 'ember';

export default Ember.Controller.extend({

  assessmentService: Ember.inject.service('assessment'),

  currentChallenge: Ember.computed('model', function() {
      let currentChallenge = this.get('model').challenge;
      let promiseNumber = this.get('model').assessment
        .get('course')
        .then((course) => course.get('challenges'))
        .then((challenges) => {
          return { progress: challenges.indexOf(currentChallenge) + 1 };
        });
    return DS.PromiseObject.create({ promise: promiseNumber });
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
