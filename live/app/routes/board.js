import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  authenticationRoute: '/connexion',

  session: Ember.inject.service(),

  model() {
    return this.get('store').findRecord('user', this.get('session.data.authenticated.userId'))
      .then((user) => {
        return user.get('organizations.firstObject');
      })
      .catch(_ => {
        this.transitionTo('index');
      });
  }
});
