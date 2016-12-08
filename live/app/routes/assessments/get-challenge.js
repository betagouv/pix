import Ember from 'ember';
import DS from 'ember-data';
import getChallengeType from '../../utils/get-challenge-type';
import RSVP from 'rsvp';
import config from '../../config/environment';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');

    const assessmentId = params.assessment_id;
    const challengeId = params.challenge_id;

    const promises = {
      assessment: store.findRecord('assessment', assessmentId),
      challenge: store.findRecord('challenge', challengeId),
      answers: store.queryRecord('answer', { assessment: assessmentId, challenge: challengeId })
    };

    return RSVP.hash(promises).then(results => results);
  },

  actions: {

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
  }
  ,

  _navigateToNextView: function (currentChallenge, assessment) {

    const that = this;
    $.ajax({
      url: config.APP.API_HOST + '/api/assessments/' +
            assessment.get('id') +
            '/next/' +
            currentChallenge.get('id'),
      type: 'GET'
    }).done(function( msg ) {
      if (msg.error) { // no other test, go to end of test
        return that.transitionTo('assessments.get-results', assessment.get('id'));
      } else {
        return that.transitionTo('assessments.get-challenge', assessment.get('id'), msg.data.id);
      }
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    const progressToSet = model.assessment
      .get('course')
      .then((course) => course.getProgress(model.challenge));

    controller.set('progress', DS.PromiseObject.create({ promise: progressToSet }));

    const challengeType = getChallengeType(model.challenge.get('type'));
    controller.set('challengeItemType', 'challenge-item-' + challengeType);
  }
  ,

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  }

})
;
