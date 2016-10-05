import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    skip: function () {
      console.log('skip, inside challenge-actionbar');
      this.sendAction();
    },
    validate: function () {
      this.sendAction();
    }
  }

});
