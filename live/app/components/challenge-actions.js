import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['challenge-actions'],

  challengeSkipped: null, // action
  answerValidated: null, // action

  actions: {

    skipChallenge() {
      this.get('challengeSkipped')();
    },

    validateAnswer() {
      this.get('answerValidated')();
    }
  }

});
