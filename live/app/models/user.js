import Ember from 'ember';
import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  password: attr('string'),
  cgu: attr('boolean'),
  recaptchaToken: attr('string'),
  competences: hasMany('competence'),

  competenceAreas: Ember.computed('competences', async function() {
    const competences = await this.get('competences');
    return competences.reduce(async (areas, competence) => {
      const competenceArea = await competence.get('area');
      if (!areas[competenceArea.get('id')]) {
        areas[competenceArea.get('id')] = {
          name: competenceArea.get('name'),
          competences: []
        };
      }
      areas[competenceArea.get('id')].competences.push(competence);
      return areas;
    }, []);
  })
});
