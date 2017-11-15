const cache = require('../cache');
const airtable = require('../airtable');
const serializer = require('../serializers/airtable/competence-serializer');

const AIRTABLE_TABLE_NAME = 'Competences';
const cacheKey = 'competence-repository_list';

module.exports = {

  list() {
    const cachedCompetences = cache.get(cacheKey);

    if (cachedCompetences) {
      return Promise.resolve(cachedCompetences);
    }

    return airtable
      .getRecords(AIRTABLE_TABLE_NAME, {}, serializer)
      .then((competences) => {
        cache.set(cacheKey, competences);
        return competences;
      });
  },

};
