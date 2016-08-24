import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service('session'),

  actions: {
    identify() {
      this.set('session.isIdentified', true);
      this.get('session').save();
      this.get('routing').transitionTo('home');
    }
  }

});
