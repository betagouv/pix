const cache = require('../cache');
const airtable = require('../airtable');
const serializer = require('../serializers/airtable/challenge-serializer');

const AIRTABLE_TABLE_NAME = 'Epreuves';

function _fetchChallenge(id, cacheKey, resolve, reject) {
  airtable
    .getRecord(AIRTABLE_TABLE_NAME, id, serializer)
    .then(challenge => {
      cache.set(cacheKey, challenge);
      return resolve(challenge);
    })
    .catch(reject);
}

function _fetchChallenges(cacheKey, resolve, reject, viewName) {
  const query = {};
  if (viewName !== undefined) {
    query['view'] = viewName;
  }
  airtable
    .getRecords(AIRTABLE_TABLE_NAME, query, serializer)
    .then(challenges => {
      cache.set(cacheKey, challenges);
      return resolve(challenges);
    })
    .catch(reject);
}

module.exports = {

  list() {
    return new Promise((resolve, reject) => {
      const cacheKey = 'challenge-repository_list';
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);
        return _fetchChallenges(cacheKey, resolve, reject);
      });
    });
  },

  getFromCompetenceId(competenceId) {
    const viewNames = {
      'recsvLz0W2ShyfD63': '1.1 Mener une recherche et une veille d’information',
      'recIkYm646lrGvLNT': '1.2 Gérer des données',
      'recNv8qhaY887jQb2': '1.3 Traiter des données',
      'recOdC9UDVJbAXHAm': '3.1 Développer des documents textuels',
      'recbDTF8KwupqkeZ6': '3.2 Développer des documents multimedia',
      'recHmIWG6D0huq6Kx': '3.3 Adapter les documents à leur finalité',
      'rece6jYwH4WEw549z': '3.4 Programmer',
      'rec6rHqas39zvLZep': '4.1 Sécuriser l\'environnement numérique',
      'recofJCxg0NqTqTdP': '4.2 Protéger les données personnelles et la vie privée',
      'recfr0ax8XrfvJ3ER': '4.3 Protéger la santé, le bien-être et l\'environnement',
      'recIhdrmCuEmCDAzj': '5.1 Résoudre des problèmes techniques',
      'recudHE5Omrr10qrx': '5.2 Construire un environnement numérique',
      'recDH19F7kKrfL3Ii': '2.1 Interagir',
      'recFpYXCKcyhLI3Nu': '2.4 S\'insérer dans le monde numérique',
      'recMiZPNl7V1hyE1d': '2.3 Collaborer',
      'recgxqQfz3BqEbtzh': '2.2 Partager et publier'
    };
    return new Promise((resolve, reject) => {
      const cacheKey = `challenge-repository_get_from_competence_${competenceId}`;
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);
        return _fetchChallenges(cacheKey, resolve, reject, viewNames[competenceId]);
      });
    });
  },

  get(id) {
    return new Promise((resolve, reject) => {
      const cacheKey = `challenge-repository_get_${id}`;
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);
        return _fetchChallenge(id, cacheKey, resolve, reject);
      });
    });
  },

  refresh(id) {
    return new Promise((resolve, reject) => {
      const cacheKey = `challenge-repository_get_${id}`;
      cache.del(cacheKey, (err) => {
        if (err) return reject(err);
        const cacheSolutionKey = `solution_${id}`;
        cache.del(cacheSolutionKey, (err) => {
          if (err) return reject(err);
          return _fetchChallenge(id, cacheKey, resolve, reject);
        });
      });
    });
  }

};
