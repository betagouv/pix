import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  email: DS.attr('string'),
  type: DS.attr('string'),
  code: DS.attr('string')
});
