import RSVP from 'rsvp';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend(AuthenticatedRouteMixin, {
  authenticationRoute: '/connexion',
  session: Ember.inject.service(),

  model(params) {
    return RSVP.hash({
      user: this.get('store').findRecord('user', this.get('session.data.authenticated.userId'), { reload: true }),
      assessmentId: params.assessment_id
    })
      .catch(_ => {
        this.transitionTo('logout');
      });
  }
});
