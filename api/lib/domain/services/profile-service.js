const userRepository = require('../../infrastructure/repositories/user-repository');
const competenceRepository = require('../../infrastructure/repositories/competence-repository');
const areaRepository = require('../../infrastructure/repositories/area-repository');

const Profile = require('../../domain/models/data/profile');

const profileService = {
  buildUserProfile(user_id) {
    const user = userRepository.findUserById(user_id);
    const competences = competenceRepository.list();
    const areas = areaRepository.list();

    return Promise.all([user, competences, areas])
      .then(([user, competences, areas]) => {
        const profile = new Profile(user, competences, areas);
        return profile;
      });
  }
};
module.exports = profileService;
