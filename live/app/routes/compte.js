import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  authenticationRoute: '/',
  session: Ember.inject.service(),

  model() {
    const store = this.get('store');
    return store.findRecord('user', this.get('session.data.authenticated.userId')).catch(_ => {
      this.transitionTo('logout');
    });
  },

  actions: {
    searchForOrganization(code) {
      return this.get('store').query('organization', {
        filter: {
          code
        }
      }).then((organisations) => {
        const isOrganizationFound = organisations.content.length === 1;
        return isOrganizationFound ? organisations.get('firstObject') : null;
      });
    },

    shareProfileSnapshot(organization) {
      return this.get('store').createRecord('snapshot', { organization }).save();
    }
  }
});
