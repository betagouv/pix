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

  userAnswer : Ember.computed('answer.value', function() {
    const answer = this.get('answer.value') || '';
    return answer.indexOf('#ABAND#') > -1? '' : answer;
  }),

  didInsertElement: function() {

    this.$('input').keydown(() => {
      this.get('answerChanged')();
    });
  }
});
