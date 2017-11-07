import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  queryRecord(store, type, query) {
    let url = `${this.host}/${this.namespace}/assessments/${query.assessmentId}/next`;
    if (query.challengeId) {
      url += `/${query.challengeId}`;
    }
    return this.ajax(url, 'GET');
  }

  /*
    // https://guides.emberjs.com/v2.16.0/models/finding-records/#toc_querying-for-a-single-record
    urlForQueryRecord({ assessmentId, challengeId }) {
      let url = `${this.host}/${this.namespace}/assessments/${assessmentId}/next`;
      if (challengeId) {
        url += `/${challengeId}`;
      }
      return url;
    }
  */

});
