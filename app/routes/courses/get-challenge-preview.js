import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model(params) {

    const store = this.get('store');

    const promises = {
      course: store.findRecord('course', params.course_id),
      challenge: store.findRecord('challenge', params.challenge_id)
    };

    return RSVP.hash(promises).then(function (results) {

      const challenge = results.challenge;
      const previewedCourse = results.course;

      return {
        challenge,
        previewedCourse
      };
    });
  },

  actions: {
    validate() {
      Ember.Logger.info('Yeah !');
    }
  }
});
