import DS from 'ember-data';

export default DS.Model.extend({

  course: DS.belongsTo('course')

});
