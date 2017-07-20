import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['competence-level-progress-bar'],

  _LIMIT_LEVEL: 5,
  _MAX_LEVEL: 8,

  level: null,
  courseId: null,

  hasLevel: Ember.computed('level', function() {
    const level = this.get('level');
    return Ember.isPresent(this.get('level')) && level !== -1;
  }),

  widthOfProgressBar: Ember.computed('level', function() {

    const level = this.get('level');
    const maxLevel = this.get('_MAX_LEVEL');
    const limitLevel = this.get('_LIMIT_LEVEL');

    if(level === 0) {
      return Ember.String.htmlSafe('width : 24px');
    }

    if(level > 0 && level <= limitLevel) {
      const percentage = level * 100 / maxLevel;
      return Ember.String.htmlSafe('width : ' + percentage + '%');
    }

    return Ember.String.htmlSafe('width : none');
  }),

  canUserStartCourse: Ember.computed('courseId', 'hasLevel', function() {
    const courseId = this.get('courseId');
    const hasLevel = this.get('hasLevel');
    if(!courseId || hasLevel) {
      return false;
    }
    return true;
  }),
});
