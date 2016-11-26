import Ember from 'ember';
import _ from 'lodash/lodash';

const { computed, inject } = Ember;

function actionValidate () {
  if (this._hasError()) {
    this.set('errorMessage', this._getErrorMessage());
    return this.sendAction('onError', this.get('errorMessage'));
  }
  const value = this._getAnswerValue();
  this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), value);
}

function actionSkip () {
  this.set('errorMessage', null);
  this.sendAction('onValidated', this.get('challenge'), this.get('assessment'), '#ABAND#')
}

function callOnlyOnce (targetFunction) {
  if (EmberENV.useDelay) {
    return _.throttle(targetFunction, 1000, { leading: true, trailing: false});
  } else {
    return targetFunction;
  }
}

const ChallengeItemGeneric = Ember.Component.extend({

  tagName: 'article',
  classNames: ['challenge-item'],
  attributeBindings: ['challenge.id:data-challenge-id'],

  assessmentService: inject.service('assessment'),

  challenge: null,
  assessment: null,
  selectedProposal: null,
  errorMessage: null,
  answers: {},

  instruction: Ember.computed('challenge', function() {
    return {
      text: this.get('challenge.instruction'),
      illustrationUrl: this.get('challenge.illustrationUrl'),
      attachmentUrl: this.get('challenge.attachmentUrl'),
      attachmentFilename: this.get('challenge.attachmentFilename')
    }
  }),

  isChallengePreviewMode: computed.empty('assessment'),



  onSelectedProposalChanged: Ember.observer('selectedProposal', function () {
    this.set('errorMessage', null);
  }),

  didUpdateAttrs() {
    this._super(...arguments);
    this.set('selectedProposal', null);
    this.set('answers', {});
  },

  actions: {

    // XXX: prevent double-clicking from creating double record.
    validate: callOnlyOnce(actionValidate),

    skip: callOnlyOnce(actionSkip)
  }

});

ChallengeItemGeneric.reopenClass({
  positionalParams: ['challenge', 'assessment']
});

export default ChallengeItemGeneric;
