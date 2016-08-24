import { Model, hasMany } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({

  name: attr('string'),
  description: attr('string'),
  duration: attr('number'),
  imageUrl: attr('string'),
  challenges: hasMany('challenge', { inverse: null })

});
