import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  actions: {
    passwordResetDemand(email) {
      const store = this.get('store');
      const passwordResetDemand = store.createRecord('passwordResetDemand', { email });
      return passwordResetDemand.save()
        .then(() => {
          console.log('requete envoyé');
        });
    }
  }

});
