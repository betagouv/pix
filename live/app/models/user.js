import DS from 'ember-data';
const {Model, attr} = DS;

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  email: attr('string'),
  password: attr('string'),
  cgu: attr('boolean')
});
