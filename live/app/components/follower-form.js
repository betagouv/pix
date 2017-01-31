import Ember from 'ember';

export default Ember.Component.extend({
  emailValidator: Ember.inject.service('email-validator'),
  hasError: false,
  email: '',
  successRequest: false,
  isSubmited: false,
  defaultMessage: {
    error: 'Votre adresse n’est pas valide',
    success: 'Merci pour votre inscription'
  },

  submitButton: Ember.computed('isSubmited', function () {
    if(!this.get('isSubmited')){
      return 's\'inscrire';
    }
    return 'envoi en cours';
  }),

  infoMessage: Ember.computed('hasError', 'isSubmited', function () {
    if(!this.get('isSubmited')){
      return false;
    }
    if(this.get('hasError')){
      return this.get('defaultMessage.error');
    }
    return this.get('defaultMessage.success');
  }),

  _checkEmail(context, email){
    if (!context.get('emailValidator').emailIsValid(email)) {
      context.set('hasError', true);
      Ember.run.later(function () {
        context.set('isSubmited', false);
      }, 5000);
      return false;
    }
  },

  _saveFollower(email, context){
    $.ajax({
      url: 'http://localhost:3000/api/followers',
      method: 'POST',
      data: {email: email},
      dataType: 'json',
      beforeSend: function () {

      },
      success: function () {
        context.set('hasError', false);
      },
      error: function () {
        context.set('hasError', true);
      },
      complete: function(){
        Ember.run.later(function(){
          context.set('isSubmited', false);
        }, 1200);
      }
    });
  },

  actions: {
    updateEmail(){
      this.set('email', event.target.value);
    },

    submition(){
      this.set('isSubmited', true);
      this._checkEmail(this, this.get('email').trim());
      return this._saveFollower(this.get('email').trim(), this);
    }
  }
});
