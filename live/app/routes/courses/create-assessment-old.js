import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return params.course_id;
  },

  afterModel(courseId) {
    this.transitionTo('courses.create-assessment', { courseId });
  }

});
