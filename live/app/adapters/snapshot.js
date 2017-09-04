import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  query(query) {
    const url = `${this.host}/${this.namespace}/organizations/${query.organizationId}/snapshots`;
    return this.ajax(url, 'GET');
  }
});
