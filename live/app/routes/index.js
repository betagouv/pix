import Ember from 'ember';
import RSVP from 'rsvp';
import ResetScrollPositionMixin from 'pix/mixins/reset-scroll-position';


export default Ember.Route.extend(ResetScrollPositionMixin, {

  model() {
    return RSVP.hash({
      coursesOfTheWeek: this.get('store').query('course', { isCourseOfTheWeek: true }),
      progressionCourses: this.get('store').query('course', { isCourseOfTheWeek: false, isAdaptive: false })
    });
  },

  actions: {
    startCourse(course) {
      this.transitionTo('courses.create-assessment', course);
    }
  }

});
