import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const store = this.get('store');

    return store.findRecord('course', params.course_id)
      .then((results) => {
        const course = results.course;
        const assessment = store.createRecord('assessment', { course: course });
        return assessment.save();
      })
      .then((assessment) => assessment.course);
  },

  afterModel(challenges) {
    let firstChallengeId = challenges.sortBy('number').get('firstObject').id;
    this.transitionTo('challenge-show', firstChallengeId);
  }

});
