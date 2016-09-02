import Ember from 'ember';

export default Ember.ObjectProxy.extend({
  init() {
    if (!this.content || this.get('type') !== this.get('challengeType')) {
      throw new Error('Bad instanciation');
    }
  }
});
