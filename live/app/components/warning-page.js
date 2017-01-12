import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    confirmWarning() {
      this.sendAction('hasUserConfirmWarning');
    }
  }
});
