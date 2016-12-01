import Ember from 'ember';
import DS from 'ember-data';
import getChallengeType from '../../utils/get-challenge-type';

export default Ember.Route.extend({

  assessmentService: Ember.inject.service('assessment'),

  model(params) {
    const store = this.get('store');

    return store.findRecord('assessment', params.assessment_id).then((assessment) => {
      return store.findRecord('challenge', params.challenge_id).then((challenge) => {
        return store.queryRecord('answer', { 
          assessment: params.assessment_id, 
          challenge:  params.challenge_id }).then((answers) => {

            // case 1 : user already answered the question, answer is returned 
            return {
              assessment,
              challenge,
              answers
            };   

          }).catch((error) => {

            // case 2 : answer not found is part of the normal flow,
            // it happens when the user see the question for the very very first time.
            if (error && error.message && error.message.indexOf('404') > -1) {
              return {
                assessment,
                challenge
              };
            }

          }); // end of catch of store.findRecord('answer')
      }); // end of store.findRecord('challenge')
    }); // end of store.findRecord('assessment')

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
        return this.transitionTo('assessments.get-challenge', assessment.get('id'), challenge.get('id'));
      }
      return this.transitionTo('assessments.get-results', assessment.get('id'));
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
    // controller.set(model, this.model({assessment_id:'ref_assessment_id', challenge_id:'ref_qcm_challenge_id'}));
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id,
      challenge_id: model.challenge.id
    };
  }

});
