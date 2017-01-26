import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord(modelName, query) {
    return Ember.$.getJSON( this.host + '/' + this.namespace + '/assessments/' + query.assessmentId +  '/solutions/' + query.answerId);
  }
});
