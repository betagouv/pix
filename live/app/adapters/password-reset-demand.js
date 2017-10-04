import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  queryRecord(modelName, clazz, query) {
    const url = this.buildURL('password-reset-demand', query.temporaryKey);
    return this.ajax(url, 'GET');
  }

});
