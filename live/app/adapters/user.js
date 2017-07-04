import ApplicationAdapter from './application';
import Ember from 'ember';
import RSVP from 'rsvp';

export default ApplicationAdapter.extend({

  getAuthenticatedUserProfile(store) {
    return new RSVP.Promise((resolve) => {
      Ember.$.getJSON(`${this.host}/${this.namespace}/users/me`, (payload) => {
        let user = null;
        if (payload) {
          user = store.push(store.normalize('users', payload));
        }
        resolve(user);
      });
    });
  }
});
