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
      challenge: store.findRecord('challenge', challengeId),
      answer: store.queryRecord('answer', { assessment: assessmentId, challenge: challengeId })
    });
  },

  afterModel(model) {
    return model.assessment.get('course').then((course) => {
      model.progress = course.getProgress(model.challenge);
      return model;
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
  },

  didReceiveAttrs() {
    this._super(...arguments);
  },

  serialize(model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  },

  _createOrUpdateAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime) {
    let answer = this.get('answer');

    if (!answer) {
      answer = this.get('store').createRecord('answer', {
        value: answerValue,
        timeout: answerTimeout,
        challenge: currentChallenge,
        elapsedTime: answerElapsedTime,
        assessment
      });
    } else {
      answer.set('value', answerValue);
      answer.set('timeout', answerTimeout);
      answer.set('elapsedTime', answerElapsedTime);
    }

    return answer;
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

    saveAnswerAndNavigate(currentChallenge, assessment, answerValue, answerTimeout, answerElapsedTime) {
      const answer = this._createOrUpdateAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime);
      answer.save()
        .then(() => {
          this._navigateToNextView(currentChallenge, assessment);
        })
        .catch(err => {
          Ember.Logger.error(err);
        });
    }
  },

});
