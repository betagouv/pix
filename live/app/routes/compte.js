import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  authenticationRoute: '/connexion',

  model() {
    const store = this.get('store');
    const userAdapter = store.adapterFor('user');
    return userAdapter.getAuthenticatedUserProfile().then(payload => {
      const user = store.push(payload);
      return user;
    });
  },

});
