import Ember from 'ember';
import  proposalsAsBlocks from 'pix-live/utils/proposals-as-blocks';

export default Ember.Component.extend({

  classNames: ['qroc-proposal'],

  proposals: null,
  answerValue: null,
  answerChanged: null, // action

  _blocks: Ember.computed('proposals', function() {
    return proposalsAsBlocks(this.get('proposals'));
  }),

  userAnswer : Ember.computed('answerValue', function() {
    const answer = this.get('answerValue') || '';
    return answer.indexOf('#ABAND#') > -1? '' : answer;
  }),

  didInsertElement: function() {
    // XXX : jQuery handler here is far more powerful than declaring event in template helper.
    // Non, c'est de la merde ce commentaire
    // It avoids to loose time with 'oh that handy jQuery event is missing',
    // or "How the hell did they construct input helper ?"
    this.$('input').keydown(() => {
      this.get('answerChanged')();
    });
  }
});
