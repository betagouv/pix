import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  session: Ember.inject.service(),

  routeIfAlreadyAuthenticatedAndLinkedToOrganization: '/board',
  routeIfAlreadyAuthenticated: '/compte',

  actions: {
    signin(email, password) {
      return this.get('session')
        .authenticate('authenticator:simple', email, password)
        .then((data) => {
          const route = (data && data.isOrganization) ? this.routeIfAlreadyAuthenticatedAndLinkedToOrganization : this.routeIfAlreadyAuthenticated;
          this.transitionTo(route);
        });
    }
  }
});
