import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

function listPropsOf(obj) {
  var methods = [];
  for (var m in obj) {
    if (typeof obj[m] == "function" ) {
      methods.push(m);
    }
  }
  console.log(methods.join(","));
}

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  beforeModel: function(){
    listPropsOf(this.get('session'));
  },

  actions: {

    navigateToHome: function () {
      this.transitionTo('home');
    }
  }

});
