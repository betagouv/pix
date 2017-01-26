import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  queryRecord(modelName, query) {
    return Ember.$.getJSON('http://localhost:3000/api/assessments/ref_assessment_id/solutions/ref_solution_id');
  }
});
