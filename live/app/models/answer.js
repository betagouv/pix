import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;
const { computed } = Ember;

export default Model.extend({

  value: attr('string'),
  result: attr('string'),
  assessment: belongsTo('assessment'),
  challenge: belongsTo('challenge'),
  
  isPending: computed('result', function () {
    return this.get('result') === 'pending'
  }),
  isOk: computed('result', function () {
    return this.get('result') === 'ok'
  }),
  isNotOk: computed('result', function () {
    return this.get('result') === 'ko'
  })

});
