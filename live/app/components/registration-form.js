import Ember from 'ember';

function setUserInSession(component, user) {

  const session = component.get('session');
  session.set('user', user);
  session.save();
}

function callActionOnUserIdentified(component) {

  component.sendAction('onUserIdentified');
}

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  user: Ember.Object.create(),

  actions: {

    identify() {

      const user = this.get('user');
      setUserInSession(this, user);
      callActionOnUserIdentified(this);

    }

  }

});
