import Ember from 'ember';

export default Ember.Mixin.create({
  init() {
    if (!this.content || this.content.type !== 'QCM') {
      throw new Error('Bad instanciation');
    }
  }
});


