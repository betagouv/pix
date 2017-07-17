import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['score-pastille'],
  pixScore: null,

  score: Ember.computed('pixScore', function() {
    return this.get('pixScore') || '--';
  })
});
