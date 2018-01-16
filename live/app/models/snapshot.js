import Ember from 'ember';
import DS from 'ember-data';

const { Model, belongsTo, attr } = DS;
const TOTAL_NUMBER_OF_COMPETENCES = 16;

export default Model.extend({
  completionPercentage: attr('string'),
  score: attr('number'),
  createdAt: attr('date'),
  organization: belongsTo('organization'),
  user: belongsTo('user'),
  studentCode: attr('string'),
  campaignCode: attr('string'),
  testsFinished: Ember.computed('completionPercentage', function() {
    return Math.round(this.get('completionPercentage')*TOTAL_NUMBER_OF_COMPETENCES/100);
  })
});
