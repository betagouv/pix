import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  delay: Ember.inject.service(),

  model() {

    return RSVP.all([
      this.store.findAll('course'),
      // wait at least 800ms
      this.get('delay').ms(800)
    ]).then((arr) => arr[0]);
  }
});
