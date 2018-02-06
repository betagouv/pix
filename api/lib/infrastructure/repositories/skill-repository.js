const cache = require('../cache');
const BookshelfSkill = require('../../domain/models/data/skill');
const Skill = require('../../domain/models/Skill');
const Bookshelf = require('../../infrastructure/bookshelf');
const airtable = require('../airtable');

function _toDomain(airtableSkill) {
  return new Skill({
    name: airtableSkill.get('Nom')
  });
}

module.exports = {

  findByCompetence(competence) {
    const cacheKey = 'skill-repository_find_by_competence_' + competence.reference;

    return new Promise((resolve, reject) => {
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);

        const query = {
          filterByFormula: `{Compétence} = "${competence.reference}"`
        };

        return airtable.findRecords('Acquis', query)
          .then((skills) => {
            skills = skills.map(_toDomain);
            cache.set(cacheKey, skills);
            return resolve(skills);
          });
      });
    });
  },

  save(arraySkills) {
    const SkillCollection = Bookshelf.Collection.extend({
      model: BookshelfSkill
    });
    return SkillCollection.forge(arraySkills)
      .invokeThen('save');
  }
};
