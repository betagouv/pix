import Ember from 'ember';

export default Ember.Component.extend({

  email: '',

  actions: {
    sendToRoutePasswordResetDemand() {
      this.get('onSubmit')(this.get('email'));
    }
  }
});
