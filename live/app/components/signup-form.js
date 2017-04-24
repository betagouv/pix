import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['signup-form'],

  actions: {
    validateInput(){
      //this.sendAction('validate')
    },

    signup(){
      this.sendAction('signup');
    }
  }
});
