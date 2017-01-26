import Ember from 'ember';

export default Ember.Component.extend({
  emailValidator: Ember.inject.service('email-validator'),
  hasError: false,
  email: '',

  _hasValidEmail(context){
    return context.get('emailValidator').emailIsValid(context.get('email').trim());
  },

  errorMessage:  Ember.computed('hasError', function(){
    return (this.get('hasError'))? 'Veuillez rentrer une adresse mail valide SVP !' : '';
  }),

  actions: {
    updateEmail(){
      this.set('email',event.target.value);
    },

    submition(){
      if(!this._hasValidEmail(this)){
        this.set('hasError', true);
        return false;
      }
    }
  }
});
