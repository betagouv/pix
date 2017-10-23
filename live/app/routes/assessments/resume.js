import BaseRoute from 'pix-live/routes/base-route';
import Ember from 'ember';

export default BaseRoute.extend({

  model(params) {
    const assessmentId = params.assessment_id;
    return this.get('store').findRecord('assessment', assessmentId);
  },

  afterModel() {
    return {};
  },

  actions: {
    error() {
      this.transitionTo('compte');
    }
  }
});
