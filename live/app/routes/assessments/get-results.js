import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({


  model(params) {
    const store = this.get('store');
    return store.findRecord('assessment', params.assessment_id, { reload: true });
  },

  serialize: function (model) {
    return {
      assessment_id: model.assessment.id
    };
  }

});
