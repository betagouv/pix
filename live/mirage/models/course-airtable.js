import { Model, hasMany } from "ember-cli-mirage";
import attr from 'ember-data/attr';

export default Model.extend({

  id: attr('string'),
  name: attr('string'),
  description: attr('string'),
  imageUrl: [attr('string')],
  challenges: [attr('string')]

});
