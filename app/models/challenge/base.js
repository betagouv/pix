import Ember from 'ember';

export default Ember.ObjectProxy.extend({
  init() {
    if (!this.content || this.content.type !== this.get('typeValue')) {
      throw new Error('Bad instanciation');
    }
  }
});


