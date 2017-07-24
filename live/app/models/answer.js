import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  value: attr('string'),
  result: attr('string'),
  resultDetails : attr('string'),
  timeout: attr('number'),
  elapsedTime: attr('number'),
  assessment: belongsTo('assessment'),
  challenge: belongsTo('challenge')
});
