import Ember from 'ember';
import DS from 'ember-data';
const {Model, attr, belongsTo} = DS;

export default Model.extend({
  name: attr('string'),
  level: attr('number'),
  area: belongsTo('area'),

  areaName: Ember.computed.alias('area.name')
});
