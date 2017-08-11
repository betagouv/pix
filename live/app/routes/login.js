import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

function isUserLinkedToOrganization(user) {
  if(!user.get('organizations')) {
    return false;
  }
  return user.get('organizations.length') > 0;
}

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  session: Ember.inject.service(),

  routeIfNotAuthenticated: 'connexion',
  routeIfAlreadyAuthenticated: 'compte',
  routeForLoggedUserLinkedToOrganization: 'board',

  actions: {
    signin(email, password) {
      return this.get('session')
        .authenticate('authenticator:simple', email, password)
        .then(_ => {
          return this.get('store').queryRecord('user', {});
        })
        .then((user) => {
          const routeToRedirect = (isUserLinkedToOrganization(user)) ? this.routeForLoggedUserLinkedToOrganization : this.routeIfAlreadyAuthenticated;
          this.transitionTo(routeToRedirect);
        }).catch(_ => {
          this.transitionTo(this.routeIfNotAuthenticated);
        });
    }
  }
});
