import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['competence-level-progress-bar'],

  LIMIT_LEVEL: 5,
  MAX_LEVEL: 8,

  level: null,

  hasLevel: Ember.computed('level', function() {
    return this.get('level') >= 0;
  }),

  widthOfProgressBar: Ember.computed('level', function() {

    const level = this.get('level');
    const maxLevel = this.get('MAX_LEVEL');
    const limitLevel = this.get('LIMIT_LEVEL');

    if (level === 0) {
      return Ember.String.htmlSafe('width : 24px');
    }

    if (level > 0 && level <= limitLevel) {
      const percentage = level * 100 / maxLevel;
      return Ember.String.htmlSafe('width : ' + percentage + '%');
    }

    return Ember.String.htmlSafe('width : none');
  }),

});
