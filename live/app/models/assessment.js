import { computed } from '@ember/object';
import DS from 'ember-data';

const { attr, Model, belongsTo, hasMany } = DS;

export default Model.extend({

  course: belongsTo('course', { inverse: null }),
  answers: hasMany('answer'),
  userName: attr('string'),
  userEmail: attr('string'),
  firstChallenge: computed.alias('course.challenges.firstObject'),
  estimatedLevel: attr('number'),
  pixScore: attr('number'),

});
