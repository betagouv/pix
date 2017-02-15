import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    startCourse(course) {
      this.transitionToRoute('courses.create-assessment', course);
    }
  }
});
