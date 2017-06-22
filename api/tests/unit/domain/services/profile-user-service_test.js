const {describe, it, expect, sinon, beforeEach, afterEach} = require('../../../test-helper');
const profileService = require('../../../../lib/domain/services/profile-user-service');
const userRepository = require('../../../../lib/infrastructure/repositories/user-repository');
const competenceRepository = require('../../../../lib/infrastructure/repositories/competence-repository');
const areaRepository = require('../../../../lib/infrastructure/repositories/area-repository');
const faker = require('faker');

describe('Unit | Service | Profil User Service', function() {

  const fakeUserRecords = {
    'first-name': faker.name.findName(),
    'last-name': faker.name.findName(),
    'email': faker.internet.email
  };
  const fakeCompetenceRecords = [
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

  const fakeAreaRecords = [
    {
      id: 1,
      name: 'Domaine 1'
    },
    {
      id: 2,
      name: 'Domaine 2'
    }
  ];

  describe('#getUser', () => {

    it('should exist', () => {
      expect(profileService.buildUserProfile).to.exist;
    });

    describe('Enhanced user', () => {

      let userStub;
      let competencesStub;
      let areasStub;

      beforeEach(() => {
        userStub = sinon.stub(userRepository, 'findUserById').resolves(fakeUserRecords);
        competencesStub = sinon.stub(competenceRepository, 'list').resolves(fakeCompetenceRecords);
        areasStub = sinon.stub(areaRepository, 'list').resolves(fakeAreaRecords);
      });

      afterEach(() => {
        userStub.restore();
        competencesStub.restore();
        areasStub.restore();
      });

      it('should return a resolved promise', () => {
        // when
        const promise = profileService.buildUserProfile('user-id');
        // then
        return expect(promise).to.be.fulfilled;
      });

      it('should return an enhanced user with all competences and area', () => {
        // Given
        const expectedUser = {
          user: fakeUserRecords,
          competences: fakeCompetenceRecords,
          areas: fakeAreaRecords
        };

        // When
        const promise = profileService.buildUserProfile('user-id');
        // Then
        return promise.then((enhancedUser) => {
          expect(enhancedUser).to.deep.equal(expectedUser);
        });
      });

    });

  });
});
