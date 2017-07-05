import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  getAuthenticatedUserProfile() {
    const url = this.buildURL('user', 'me');
    return this.ajax(url, 'GET');
  }
});
