import Ember from 'ember';

export default Ember.Component.extend({
  emailValidator: Ember.inject.service('email-validator'),
  store: Ember.inject.service(),
  hasError: false,
  isSubmited: false,
  defaultMessage: {
    error: 'Votre adresse n\'est pas valide',
    success: 'Merci pour votre inscription'
  },

  hasMessage: Ember.computed('hasError', 'isSubmited', function () {
    if(!this.get('isSubmited')){
      return false;
    }
    if(!this.get('hasError')){
      return false;
    }
    return true;
  }),

  infoMessage: Ember.computed('hasError', function(){
    return (this.get('hasError'))? this.get('defaultMessage.error') :  this.get('defaultMessage.success');
  }),

  submitButtonText: Ember.computed('isSubmited', function () {
    if(!this.get('isSubmited')){
      return 's\'inscrire';
    }
    return 'envoi en cours';
  }),

  _checkEmail(email){
    if (!this.get('emailValidator').emailIsValid(email)) {
      return false;
    }
    return true;
  },

  actions: {
    submit(){
      this.set('isSubmited', true);
      const email = this.get('followerEmail').trim();
      if(!this._checkEmail(email)){
        this.set('hasError', true);
        Ember.run.later(function () {
          this.set('isSubmited', false);
        }.bind(this), 1500);
        Ember.Logger.info('false');
        return;
      }

      const store = this.get('store');
      const follower = store.createRecord('follower',{email: email});
      follower.save()
              .then((followerSaved) => {
                  Ember.Logger.info('true', followerSaved);
              })
              .catch((err) => {
                Ember.Logger.info(err);
              });
    }
  }
});
