import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['qroc-proposal'],

  didInsertElement: function () {
    let that = this;
    // jQuery handler far more powerful than declaring event on helper
    // it avoids to loose time with 'oh that handy jQuery event is missing'
    // or "How the hell did they construct input helper ?"
    this.$('input').keypress(function() {
      that.sendAction('onInputChanged');
    });
  }
});
