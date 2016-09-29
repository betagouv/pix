import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');
    return RSVP.hash({
      assessment: store.findRecord('assessment', params.assessment_id),
      challenge: store.findRecord('challenge', params.challenge_id)
    });
  },

  actions : {

    saveAnswerAndNavigate: function (currentChallenge, assessment, answerValue) {
      const answer = this._createAnswer(answerValue, currentChallenge, assessment);
      answer.save().then(() => {
        this._navigateToNextView(currentChallenge, assessment);
      });
    }
  },

  _createAnswer: function (answerValue, currentChallenge, assessment) {

    return this.get('store').createRecord('answer', {
      value: answerValue,
      challenge: currentChallenge,
      assessment
    });
  },

  _navigateToNextView: function (currentChallenge, assessment) {

    this.get('assessmentService').getNextChallenge(currentChallenge, assessment).then((challenge) => {
      if (challenge) {
        return this.transitionTo('assessments.get-challenge', { challenge, assessment });
      }
      return this.transitionTo('assessments.get-results', { assessment });
    });
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  }

});
