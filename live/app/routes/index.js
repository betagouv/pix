import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model() {
    return RSVP.all([
      this.store.findAll('course')
    ]).then((arr) => arr[0]);
  },

  actions: {

    navigateToHome: function () {
      this.transitionTo('home');
    }
  }

});
