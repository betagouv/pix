const cache = require('../cache');
const challengeRepository = require('./challenge-repository');

function _fetchSkillsFromCompetence(competenceId, cacheKey, resolve, reject) {
  challengeRepository.list()
    .then(challenges => challenges.filter(challenge => ['validé', 'validé sans test', 'pré-validé'].includes(challenge.status) && challenge.competence == competenceId))
    .then(filteredChallenges => {
      const skills = new Set();
      filteredChallenges.forEach(challenge => challenge.knowledgeTags.forEach(skill => skills.add(skill)));
      cache.set(cacheKey, skills);
      return resolve(skills);
    })
    .catch(reject);
}

module.exports = {

  getFromCompetence(competenceId) {
    return new Promise((resolve, reject) => {
      const cacheKey = 'skill-repository_list_${id}';
      cache.get(cacheKey, (err, cachedValue) => {
        if (err) return reject(err);
        if (cachedValue) return resolve(cachedValue);
        return _fetchSkillsFromCompetence(competenceId, cacheKey, resolve, reject);
      });
    });
  }

};
