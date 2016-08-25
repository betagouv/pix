import Ember from 'ember';

export default Ember.Component.extend({

  routing: Ember.inject.service('-routing'),
  session: Ember.inject.service('session'),
  user: null,

  init() {
    this._super(...arguments);
    this.set('session.isIdentified', false);
    this.set('user', Ember.ObjectProxy.create({
      content: this.get('session'),
      errors: {}
    }));
    return this;
  },

  actions: {
    identify() {
      this.set('session.isIdentified', true);
      this.get('session').save();
      this.get('routing').transitionTo('home');
      return false;
    },

    update(object, propertyPath, value) {
      if (Ember.isEmpty(value)) {
        this.set(`user.errors.${propertyPath}`, ['Champ requis']);
        return;
      } else {
        this.set(`user.errors.${propertyPath}`, null);
      }

      if (propertyPath === 'email' && false === $('.email_input')[0].checkValidity()) {
        this.set('user.errors.email', ['Entrez un email correct']);
      }
    }
  }

});
