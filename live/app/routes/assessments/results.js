import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  actions: {
    openComparison(assessment_id, answer_id, index) {
      this.transitionTo('assessments.get-comparison', assessment_id, answer_id, index);
    }
  }

});
