import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  beforeModel: function(){
    if (this.get('session.isAuthenticated')) {
      this.get('session').invalidate();
    }
    let session = this.get('session');
  },

  actions: {

    navigateToHome: function () {
      this.transitionTo('home');
    }
  }

});
