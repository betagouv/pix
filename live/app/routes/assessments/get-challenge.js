import Ember from 'ember';
import RSVP from 'rsvp';
import _ from 'pix-live/utils/lodash-custom';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');

    const assessmentId = params.assessment_id;
    const challengeId = params.challenge_id;

    return RSVP.hash({
      assessment: store.findRecord('assessment', assessmentId),
      challenge: store.findRecord('challenge', challengeId),
      answers: store.queryRecord('answer', { assessment: assessmentId, challenge: challengeId })
    });
  },

  afterModel(model) {
    return model.assessment.get('course').then((course) => {
      model.progress = course.getProgress(model.challenge);
      return model;
    });
  },

  serialize(model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('_challengeComponentClass', this._componentClassForChallenge(model.challenge));
  },

  _componentClassForChallenge(challenge) {
    let result;
    const challengeType = challenge.get('type').toUpperCase();
    if (_(challengeType).isAmongst(['QCUIMG', 'QCU', 'QRU'])) {
      result = 'qcu';
    } else if (_(challengeType).isAmongst(['QCMIMG', 'QCM'])) {
      result = 'qcm';
    } else if (_(challengeType).isAmongst(['QROC'])) {
      result = 'qroc';
    } else if (_(challengeType).isAmongst(['QROCM', 'QROCM-IND', 'QROCM-DEP'])) {
      result = 'qrocm';
    }
    return 'challenge-item-' + result;
  },

  _createAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime) {
    return this.get('store').createRecord('answer', {
      value: answerValue,
      timeout: answerTimeout,
      challenge: currentChallenge,
      elapsedTime: answerElapsedTime,
      assessment
    });
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
      const answer = this._createAnswer(answerValue, answerTimeout, currentChallenge, assessment, answerElapsedTime);
      answer.save().then(() => {
        this._navigateToNextView(currentChallenge, assessment);
      });
    }
  },

});
