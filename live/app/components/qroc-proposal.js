import Ember from 'ember';

function _hasAbandInValue(answer){
  return answer.search(/#ABAND#/i) > -1;
}

export default Ember.Component.extend({

  classNames: ['qroc-proposal'],

  userAnswer : Ember.computed('answerValue', function(){
    const answer = this.get('answerValue') || '';
    return _hasAbandInValue(answer)? '' : answer;
  }),

  didInsertElement: function () {
    // XXX : jQuery handler here is far more powerful than declaring event in template helper.
    // It avoids to loose time with 'oh that handy jQuery event is missing',
    // or "How the hell did they construct input helper ?"
    this.$('input').keydown(() => {
      this.sendAction('onInputChanged');
    });
  }
});
