import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['competence-level-progress-bar'],

  level:null,

  hasLevel : Ember.computed('level', function() {
    return this.get('level') !== -1;
  })

});
