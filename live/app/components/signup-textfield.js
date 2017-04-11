import Ember from 'ember';

export default Ember.Component.extend({
  label: '',
  status: '',//is-error, is-success,is-default
  message: '',
  //icon, class, message
  classNames: ['signup-textfield'],

  classDisplayed: Ember.computed('status', function(){

  }),
});
