import { computed } from '@ember/object';
import DS from 'ember-data';

const { Model, belongsTo, attr } = DS;

export default Model.extend({
  testsFinished: attr('string'),
  score: attr('number'),
  createdAt: attr('date'),
  organization: belongsTo('organization'),
  user: belongsTo('user'),
  idPix: attr('string'),
  campaignCode: attr('string'),
  numberOfTestsFinished: computed('testsFinished', function() {
    return this.get('testsFinished') || 0;
  })
});
