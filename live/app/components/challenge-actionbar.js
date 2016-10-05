import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    skip: function () {
      console.log('skip, inside challenge-actionbar');
      this.sendAction('skip');
    },
    validate: function () {
      console.log('validate, inside challenge-actionbar');
      this.sendAction('validate');
    }
  }

});
