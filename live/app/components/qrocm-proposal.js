import Ember from 'ember';
import _proposalsAsBlocks from 'pix-live/utils/proposals-as-blocks';

export default Ember.Component.extend({

  classNames: ['qrocm-proposal'],

  answerValue: null,
  proposals: null,
  answerChanged: null, // action

  proposalsAsBlocks: Ember.computed('proposals', function () {
    return _proposalsAsBlocks(this.get('proposals'));
  }),

  actions: {
    changeAnswer() {
      Ember.run.throttle(this, function () {
        this.get('answerChanged')();
      }, 300);
    }
  }
});
