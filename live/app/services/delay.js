import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Service.extend({
  ms(ms) {
    /* istanbul ignore */
    if (EmberENV.useDelay) {
      return new RSVP.Promise((resolve) => {
        setTimeout(resolve, ms)
      });
    }
    return new RSVP.resolve()
  }
});
