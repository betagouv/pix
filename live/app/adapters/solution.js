import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord(modelName, clazz, query) {
    let prefix = '/';
    if (this.host !== '/') {
      prefix = this.host + ('/');
    }
    return Ember.$.getJSON( prefix + this.namespace + '/assessments/' + query.assessmentId +  '/solutions/' + query.answerId);
  }
});
