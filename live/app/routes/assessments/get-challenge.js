import Ember from 'ember';
import RSVP from 'rsvp';
import DS from 'ember-data';
import getChallengeType from '../../utils/get-challenge-type';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');
    const assessmentPromise = store.findRecord('assessment', params.assessment_id);
    const challengePromise  = store.findRecord('challenge', params.challenge_id);
    const answerPromise     = store.queryRecord('answer', { 
      assessment: params.assessment_id, 
      challenge:  params.challenge_id });

    const spotsPromises = [
      assessmentPromise,
      challengePromise,
      answerPromise
    ];
    

    return Ember.RSVP.allSettled(spotsPromises).then((spotPromisesResults)=> {
      if (!spotPromisesResults.isAny('state', 'rejected')) {
        console.log('allsettled!')
          // Yay ! all promised resolved
          return RSVP.hash({
            assessment: spotsPromises[0],
            challenge: spotsPromises[1],
            answer: spotsPromises[2]
          });
      } else {
        console.log('erroneus');
        // answerPromise is allowed to fail (404 not found). Resolve other promises
        return RSVP.hash({
          assessment: spotsPromises[0],
          challenge: spotsPromises[1]
        });
      } 
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

  setupController: function(controller, model) {
    this._super(controller, model);

    const progressToSet = model.assessment
      .get('course')
      .then((course) => course.getProgress(model.challenge));

    controller.set('progress', DS.PromiseObject.create({ promise: progressToSet }));

    const challengeType =  getChallengeType(model.challenge.get('type'));
    controller.set('challengeItemType', 'challenge-item-' + challengeType);
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  }

});
