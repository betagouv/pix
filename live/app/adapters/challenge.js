import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  // https://guides.emberjs.com/v2.16.0/models/finding-records/#toc_querying-for-a-single-record
  urlForQueryRecord({ assessmentId, challengeId }) {
    let url = `${this.host}/${this.namespace}/assessments/${assessmentId}/next`;
    if (challengeId) {
      url += `/${challengeId}`;
    }
    return url;
  }

});
