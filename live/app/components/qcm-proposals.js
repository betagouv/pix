import Ember from 'ember';

export default Ember.Component.extend({
  answersDidChange: Ember.on('init', Ember.observer('rawAnswers', function() {
    // some side effect of salutation changing
    console.log('answers changed to ' + JSON.stringify(this.get('rawAnswers')));
  })),
});
