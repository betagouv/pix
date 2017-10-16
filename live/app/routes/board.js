import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import BaseRoute from 'pix-live/routes/base-route';
import RSVP from 'rsvp';
import ENV from 'pix-live/config/environment';

export default BaseRoute.extend(AuthenticatedRouteMixin, {
  authenticationRoute: '/connexion',

  session: Ember.inject.service(),

  _getOrganizationSnapshotsExportUrl() {
    return `${ENV.APP.API_HOST}/api/organizations/${this.get('session.data.authenticated.userId')}/snapshots/export`;
  },

  model() {
    return this.get('store').findRecord('user', this.get('session.data.authenticated.userId'))
      .then((user) => {

        if (user.get('organizations.length') <= 0) {
          return this.transitionTo('compte');
        }

        const organization = user.get('organizations.firstObject');
        return RSVP.hash({
          organization,
          snapshots: organization.get('snapshots').reload(),
          organizationSnapshotsExportUrl: this._getOrganizationSnapshotsExportUrl()
        });
      })
      .catch(_ => {
        this.transitionTo('index');
      });
  }
});
