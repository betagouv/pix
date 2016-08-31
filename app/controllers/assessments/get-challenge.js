import Ember from 'ember';

export default Ember.Controller.extend({

  assessmentService: Ember.inject.service('assessment'),

  validate(challenge, assessment) {
    this.get('assessmentService').getNextChallenge(challenge, assessment).then((nextChallenge) => {
      this.transitionToRoute('assessments.get-challenge', { challenge: nextChallenge, assessment });
    });
  }

});
