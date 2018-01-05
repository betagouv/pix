import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    const certificationCourseId = params.certification_course_id;
    return this.get('store').findRecord('course', certificationCourseId);
  },

  afterModel(course) {
    const assessment = course.get('assessment');
    return this.get('store')
      .queryRecord('challenge', { assessmentId: assessment.get('id') })
      .then((nextChallenge) => this.transitionTo('assessments.challenge', assessment.get('id'), nextChallenge.get('id')))
      .catch(() => this.transitionTo('certifications.results', course.get('id')));
  },

  actions: {
    error() {
      this.transitionTo('index');
    }
  }
});
