import Ember from 'ember';

export default Ember.Component.extend({

  assessment: null,

  hasATrophy : Ember.computed('assessment', function () {
    return this.get('assessment.estimatedLevel') > 0;
  })

});
