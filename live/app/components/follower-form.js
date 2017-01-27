import Ember from 'ember';

export default Ember.Component.extend({
  emailValidator: Ember.inject.service('email-validator'),
  hasError: false,
  email: '',
  isSubmited : false,
  defaultMessage : {
    error: 'Votre adresse n’est pas valide',
    success: 'Merci pour votre inscription'
  },


  infoMessage:  Ember.computed('hasError', 'isSubmited', function(){
    if(!this.get('hasError') && this.get('isSubmited')) {
      this.set('isSubmited', false);
      return this.get('defaultMessage.success');
    }
    if(this.get('hasError')){
      this.set('isSubmited', false);
      return this.get('defaultMessage.error');
    }
  }),

  _hasValidEmail(context){
    return context.get('emailValidator').emailIsValid(context.get('email').trim());
  },

  _saveFollower(email,context){
    $.ajax({
      url: 'http://localhost:3000/api/followers',
      method: 'POST',
      data: {email: email},
      dataType: 'json',
      success: function () {
        context.set('hasError', false);
        context.set('isSubmited', true);
      },
      error: function () {
        context.set('hasError',true);
      }
    });
  },
  actions: {
    updateEmail(){
      this.set('email',event.target.value);
    },

    submition(){
      if(!this._hasValidEmail(this)){
        this.set('hasError', true);
        return false;
      }
      return this._saveFollower(this.get('email').trim(),this);
    }
  }
});
