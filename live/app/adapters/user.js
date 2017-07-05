import ApplicationAdapter from './application';
import Ember from 'ember';
import RSVP from 'rsvp';

export default ApplicationAdapter.extend({

  getAuthenticatedUserProfile() {
    const url = this.buildURL('user', 'me');
    return this.ajax(url, 'GET');

    /*
    return new RSVP.Promise((resolve) => {
      return Ember.$.getJSON(`${this.host}/${this.namespace}/users/me`, (payload) => {
        let user = null;
        if (payload) {
          user = store.push(store.normalize('users', payload));
        }
        return resolve(user);
      });
    });
*/
  }
});
