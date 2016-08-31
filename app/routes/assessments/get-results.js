import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model(params) {
    const store = this.get('store');
    return store.findRecord('assessment', params.assessment_id);
  },

  /*
   * This method is called when transitionTo is called with a context in order to populate the URL.
   * – http://emberjs.com/api/classes/Ember.Route.html#method_serialize
   */
  serialize: function(model) {
    return {
      assessment_id: model.assessment.id
    };
  }

});
