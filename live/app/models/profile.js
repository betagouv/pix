import DS from 'ember-data';
const {Model, belongsTo, hasMany} = DS;

export default Model.extend({
  user: belongsTo('user'),
  competences: hasMany('competence')
});
