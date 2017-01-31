import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord(modelName, clazz, query) {
    return Ember.$.getJSON( this.host + '/' + this.namespace + '/assessments/' + query.assessmentId +  '/solutions/' + query.answerId);
  }
});
