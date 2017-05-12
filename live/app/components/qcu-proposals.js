import Ember from 'ember';
import _proposalsAsStrings from 'pix-live/utils/proposals-as-strings';

export default Ember.Component.extend({

  answerValue: null,
  proposals: null,
  answerChanged: null, // action

  proposalsAsStrings: Ember.computed('proposals', function () {
    return _proposalsAsStrings(this.get('proposals'));
  }),

  actions: {
    changeAnswer(index) {
      Ember.run.throttle(this, function () {
        this.set('answerValue', index);
        this.get('answerChanged')();
      }, 300);
    }
  }
});
