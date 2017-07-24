import Ember from 'ember';
import  proposalsAsBlocks from 'pix-live/utils/proposals-as-blocks';

export default Ember.Component.extend({

  classNames: ['qroc-proposal'],

  // Input
  proposals: null,
  answer:    null,

  // Action
  answerChanged: null,

  _blocks: Ember.computed('proposals', function() {
    return proposalsAsBlocks(this.get('proposals'));
  }),

  userAnswer: Ember.computed('answer.value', function() {
    const answer = this.get('answer.value') || '';
    return answer.indexOf('#ABAND#') > -1? '' : answer;
  }),

  // TODO: use bound properties instead of inspecting the DOM
  getAnswerValueFromInputsState() {
    return this.$('input[data-uid="qroc-proposal-uid"]').val();
  },

  actions: {
    inputChanged() {
      const answerValue = this.getAnswerValueFromInputsState();
      this.get('answerChanged')(answerValue);
    }
  }
});
