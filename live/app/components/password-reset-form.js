import Ember from 'ember';

export default Ember.Component.extend({

  email: '',
  _displayErrorMessage : false,
  _displaySuccessMessage : false,

  actions: {
    sendToRoutePasswordResetDemand() {
      this.set('_displayErrorMessage', false);
      this.set('_displaySuccessMessage', false);
      this.get('onSubmit')(this.get('email'))
        .then(() => {
          this.set('_displaySuccessMessage', true);
        })
        .catch(() => {
          this.set('_displayErrorMessage', true);
        });
    }
  }
});
