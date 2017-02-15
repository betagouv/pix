import Ember from 'ember';

const CourseList = Ember.Component.extend({

  // private
  courses: null,

  actions: {
    startCourse(course) {
      this.get('startCourse')(course);
    }
  }

});

export default CourseList;
