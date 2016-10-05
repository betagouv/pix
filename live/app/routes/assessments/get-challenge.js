import Ember from 'ember';
import RSVP from 'rsvp';
import DS from 'ember-data';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');
    const assessmentPromise = store.findRecord('assessment', params.assessment_id);
    const challengePromise = store.findRecord('challenge', params.challenge_id);

    return RSVP.hash({
      assessment: assessmentPromise,
      challenge: challengePromise
    });
  },

  actions : {

    saveAnswerAndNavigate: function (currentChallenge, assessment, answerValue) {
      console.log("ok, save answer and navigate");
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

  setupController: function(controller, model) {
    this._super(controller, model);

    const progressToSet = model.assessment
      .get('course')
      .then((course) => course.getProgress(model.challenge));

    const instructionToSet = {
      text: model.challenge.get('instruction'),
      illustrationUrl: model.challenge.get('illustrationUrl'),
      attachmentUrl: model.challenge.get('attachmentUrl'),
      attachmentFilename: model.challenge.get('attachmentFilename')
    };

    try {
      const challengeType =  model.challenge.get('type').toLowerCase();
      if (challengeType === 'qrocm') {
        controller.set('challengeItemType', 'challenge-item-' + challengeType);
      } else {
        controller.set('challengeItemType', 'challenge-item');
      }
      console.log('challengeType is ' + challengeType);
    } catch (e) {
      controller.set('challengeItemType', 'challenge-item');
    }
      // controller.set('challengeItemType', 'challenge-item');

    controller.set('progress', DS.PromiseObject.create({ promise: progressToSet }));
    controller.set('instruction', instructionToSet);
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  }

});
