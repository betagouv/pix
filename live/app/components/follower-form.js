import Ember from 'ember';

export default Ember.Component.extend({
  emailValidator: Ember.inject.service('email-validator'),
  hasError: false,
  email: '',


  errorMessage:  Ember.computed('hasError', function(){
    return (this.get('hasError'))? 'Veuillez rentrer une adresse mail valide SVP !' : '';
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
      success: function (res) {
        context.set('hasError',false);
      },
      error: function (err) {
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
