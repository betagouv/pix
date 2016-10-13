import { Model } from 'ember-cli-mirage';
import { hasMany } from "ember-cli-mirage";
import attr from 'ember-data/attr';

export default Model.extend({
  id: attr('string'),
  instruction: attr('string'),
  type: attr('string'),
  proposals: attr('string')
});
