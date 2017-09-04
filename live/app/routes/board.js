import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import BaseRoute from 'pix-live/routes/base-route';
import RSVP from 'rsvp';

export default BaseRoute.extend(AuthenticatedRouteMixin, {

  authenticationRoute: '/connexion',

  session: Ember.inject.service(),

  model() {
    return this.get('store').findRecord('user', this.get('session.data.authenticated.userId'))
      .then((user) => {

        if (user.get('organizations.length') <= 0) {
          return this.transitionTo('compte');
        }

        return RSVP.hash({
          organization: user.get('organizations.firstObject'),
          //snapshots: applicationAdapter.querySnap(store, 'snapshot', { organizationId: user.get('organizations.firstObject.id') })
        });
      })
      .catch(_ => {
        this.transitionTo('index');
      });
  }
});
