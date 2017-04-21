import Ember from 'ember';

export default Ember.Component.extend({
  label: '',
  status: '',//is-error, is-success,is-default
  message: '',
  textfieldId: '',
  textfield: '',
  //icon, class, message
  classNames: ['signup-textfield'],

  classDisplayed: Ember.computed('status', function(){
    return '';
  }),

  actions: {
    validate(){
      const inputValue = this.get('textfield');
      this.sendAction('validate',inputValue);
    }
  }
});
