import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord(modelName, query) {
    return Ember.$.getJSON( this.host + '/' + this.namespace + '/assessments/ref_assessment_id/solutions/ref_solution_id');
  }
});
