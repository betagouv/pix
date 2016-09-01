import Ember from 'ember';

export default Ember.ObjectProxy.extend({
  init() {
    if (!this.content || this.content.type !== 'QCM') {
      throw new Error('Bad instanciation');
    }
  }
});


