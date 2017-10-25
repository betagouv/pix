import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    const assessmentId = params.assessment_id;
    return this.get('store').findRecord('assessment', assessmentId);
  },

  afterModel(assessment) {
    const store = this.get('store');
    return store.adapterFor('challenge')
      .queryNext(store, assessment.get('id'))
      .then((nextChallenge) => this.transitionTo('assessments.get-challenge', { assessment, nextChallenge }))
      .catch(() => this.transitionTo('assessments.get-results', assessment.get('id')));
  },

  actions: {
    error() {
      this.transitionTo('index');
    }
  }
});
