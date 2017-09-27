import Ember from 'ember';

export default Ember.Component.extend({

  email: '',
  _displayErrorMessage : false,

  actions: {
    sendToRoutePasswordResetDemand() {
      this.set('_displayErrorMessage', false);
      this.get('onSubmit')(this.get('email'))
        .catch(() => {
          this.set('_displayErrorMessage', true);
        });
    }
  }
});
