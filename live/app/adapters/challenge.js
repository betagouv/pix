import ApplicationAdapter from './application';
import RSVP from 'rsvp';
import { singularize } from 'ember-inflector';

export default ApplicationAdapter.extend({

  queryNext(store, assessmentId, challengeId) {
    const currentChallengeSuffix = challengeId ? `/${challengeId}` : '';
    const url = `${this.host}/${this.namespace}/assessments/${assessmentId}/next${currentChallengeSuffix}`;

    return this.ajax(url, 'GET').then(payload => {
      let challenge = null;
      if (payload) {
        payload.data.type = singularize(payload.data.type);
        challenge = store.push(payload);
        return RSVP.resolve(challenge);
      }

      return RSVP.reject(new Error(`There is no next challenge for assessment ${assessmentId}`));
    });

  queryRecord(store, type, query) {
    let url = `${this.host}/${this.namespace}/assessments/${query.assessmentId}/next`;
    if (query.challengeId) {
      url += `/${query.challengeId}`;
    }
    return this.ajax(url, 'GET');
  }

});
