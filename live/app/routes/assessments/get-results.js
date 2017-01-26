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
      // this.transitionTo();
      this.get('router').transitionTo('example');
    }
  }




});
