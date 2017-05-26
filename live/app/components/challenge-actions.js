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
      const promise = this.get('answerValidated')();
      promise
        .then(() => {
          Ember.Logger.log('YEAH!');
        })
        .catch(err => {
          Ember.Logger.log(err);
        });
    }
  }

});
