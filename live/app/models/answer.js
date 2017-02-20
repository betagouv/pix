import Ember from 'ember';
import DS from 'ember-data';
import ValueAsArrayOfBoolean from './answer/value-as-array-of-boolean-mixin';
import ValueAsArrayOfString from './answer/value-as-array-of-string-mixin';

const { Model, attr, belongsTo } = DS;
const { computed } = Ember;

export default Model.extend(ValueAsArrayOfBoolean, ValueAsArrayOfString, {

  value: attr('string'),
  result: attr('string'),
  timeout: attr('number'),
  assessment: belongsTo('assessment'),
  challenge: belongsTo('challenge')
});
