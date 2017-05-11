import Ember from 'ember';
import RSVP from 'rsvp';
import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');

    const assessmentId = params.assessment_id;
    const challengeId = params.challenge_id;

    return RSVP.hash({
      assessment: store.findRecord('assessment', assessmentId),
      challenge: store.findRecord('challenge', challengeId)
    });
  },

  afterModel(model) {
    const store = this.get('store');
    return store.queryRecord('answer', { assessment: model.assessment.id, challenge: model.challenge.id}).then(answer => {
      if (answer) {
        model.answer = answer;
      } else {
        model.answer = store.createRecord('answer', {
          assessment: model.assessment,
          challenge: model.challenge
        });
      }
      return model.assessment.get('course').then((course) => {
        model.progress = course.getProgress(model.challenge);
        return model;
      });
    });
  },

  serialize(model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  },

  _urlForNextChallenge(adapter, assessmentId, currentChallengeId) {
    return adapter.buildURL('assessment', assessmentId) + '/next/' + currentChallengeId;
  },

  _navigateToNextView(currentChallenge, assessment) {
    const adapter = this.get('store').adapterFor('application');
    adapter.ajax(this._urlForNextChallenge(adapter, assessment.get('id'), currentChallenge.get('id')), 'GET')
      .then(nextChallenge => {
        if (nextChallenge) {
          this.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.data.id);
        } else {
          this.transitionTo('assessments.get-results', assessment.get('id'));
        }
      });
  },

  actions: {

    saveAnswerAndNavigate(answer) {
      answer.save()
        .then(() => {
          this._navigateToNextView(answer.get('challenge'), answer.get('assessment'));
        });
    }
  },

});
