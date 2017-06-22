const {describe, it, expect} = require('../../../test-helper');
const Profile = require('../../../../lib/domain/models/data/profile');
const faker = require('faker');

describe('Unit | Domain | Class | Profile', () => {

  describe('Profile', () => {

    it('should be exist', () => {
      expect(Profile).to.exist
    });

    it('should be a class', () => {
      expect(new Profile()).to.be.an.instanceof(Profile);
    });

    it('should create an instance of Profile', () => {
      // given
      const user = {
        'first-name': faker.name.findName(),
        'last-name': faker.name.findName()
      };

      const competences = [
        {
          id: 'recsvLDFHShyfDXXXXX',
          name: '1.1 Mener une recherche d’information',
          areaId: 'recvoGdo0z0z0pXWZ'
        },
        {
          id: 'recsvLDFHShyfDXXXXX',
          name: '1.1 Mener une recherche d’information',
          areaId: 'recvoGdo0z0z0pXWZ'
        }];

      const areas = [
        {
          id: 1,
          name: 'Domaine 1'
        },
        {
          id: 2,
          name: 'Domaine 2'
        }
      ];

      // when
      const profile = new Profile(user, competences, areas);
      // then
      expect(profile).to.be.an.instanceof(Profile);
      expect(profile.user).to.be.equal(user);
      expect(profile.competences).to.be.equal(competences);
      expect(profile.areas).to.be.equal(areas);
    });

  });

});
