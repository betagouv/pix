import Ember from 'ember';

export default Ember.Route.extend({


  model(params) {
    return this.store.findRecord('assessment', params.assessment_id, { reload: true });
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id
    };
  }
  ,
  actions: {

    blablaAction: function () {
      const urlParams = this.get('router.router.state.params');
      this.get('router').transitionTo('example', urlParams['assessments.get-results']['assessment_id']);
    }
  }




});
