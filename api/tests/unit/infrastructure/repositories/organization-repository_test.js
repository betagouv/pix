const { describe, it, before, after, expect, knex, sinon } = require('../../../test-helper');
const faker = require('faker');
const bcrypt = require('bcrypt');

const Organization = require('../../../../lib/domain/models/data/organization');
const OrganizationRepository = require('../../../../lib/infrastructure/repositories/organization-repository');

describe('Unit | Repository | OrganizationRepository', function() {

  describe('#saveFromModel', () => {

    const userPassword = bcrypt.hashSync('A124B2C3#!', 1);
    const inserted_user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: userPassword,
      cgu: true
    };

    before(() => {
      return knex('users').insert(inserted_user);
    });

    after(() => {
      return knex('users').delete();
    });

    it('should be a function', function() {
      // then
      expect(OrganizationRepository.saveFromModel).to.be.a('function');
    });

    it('should save model in database', () => {
      // Given
      const organization = new Organization({});
      sinon.stub(organization, 'save').resolves();

      // When
      const promise = OrganizationRepository.saveFromModel(organization);

      // Then
      return promise.then(() => {
        sinon.assert.calledOnce(organization.save);
      });
    });
  });

  describe('#isCodeAvailable', () => {

    const organization = {
      email: faker.internet.email(),
      type: 'PRO',
      name: faker.name.firstName(),
      code: 'ABCD01'
    };

    before(() => {
      return knex('organizations').insert(organization);
    });

    after(() => {
      return knex('organizations').delete();
    });

    it('should be a function', () => {
      // then
      expect(OrganizationRepository.isCodeAvailable).to.be.a('function');
    });

    it('should return the code when the code is not already used', () => {
      // When
      const promise = OrganizationRepository.isCodeAvailable('ABCD02');

      // Then
      return promise.then((code) => {
        expect(code).to.equal('ABCD02');
      });
    });

    it('should reject when the organization already exists', () => {
      // When
      const promise = OrganizationRepository.isCodeAvailable('ABCD01');

      // Then
      return promise
        .then(() => {
          sinon.assert.fail('Should not be a success');
        })
        .catch(() => {
          expect(promise).to.be.rejected;
        });
    });
  });

  describe('#get', () => {

    const existingId = 1;
    const inserted_organization = {
      email: 'test@email.com',
      type: 'PRO',
      name: 'The name of the organization',
      userId: 294,
      id: existingId
    };

    before(() => {
      return knex('organizations')
        .delete()
        .then(() => {
          return knex('organizations').insert(inserted_organization);
        });
    });

    after(() => {
      return knex('organizations').delete();
    });

    it('should be a function', function() {
      // then
      expect(OrganizationRepository.get).to.be.a('function');
    });

    describe('success management', function() {

      it('should return a organization by provided id', function() {
        // then
        OrganizationRepository.get(existingId)
          .then((foundOrganization) => {
            expect(foundOrganization).to.exist;
            expect(foundOrganization).to.be.an('object');
            expect(foundOrganization.attributes.email).to.equal(inserted_organization.email);
            expect(foundOrganization.attributes.type).to.equal(inserted_organization.type);
            expect(foundOrganization.attributes.name).to.equal(inserted_organization.name);
            expect(foundOrganization.attributes.userId).to.equal(inserted_organization.userId);
            expect(foundOrganization.attributes.id).to.equal(inserted_organization.id);
          });
      });

      it('should return a rejection when organization id is not found', function() {
        const inexistenteId = 10083;
        return OrganizationRepository.get(inexistenteId)
          .catch((err) => {
            expect(err.message).to.equal('EmptyResponse');
          });
      });

    });
  });

  describe('#getByUserId', () => {

    const first_inserted_organization = {
      email: 'entreprise1@email.com',
      type: 'PRO',
      name: 'organization 1',
      userId: 1,
      id: 1,
      code: 'ABCD12'
    };

    const second_inserted_organization = {
      email: 'entreprise2@email.com',
      type: 'SCO',
      name: 'organization 2',
      userId: 2,
      id: 2,
      code: 'EFGH34'
    };

    const third_inserted_organization = {
      email: 'entreprise3@email.com',
      type: 'SUP',
      name: 'organization 3',
      userId: 1,
      id: 3,
      code: 'IJKL56'
    };

    const organizations = [first_inserted_organization, second_inserted_organization, third_inserted_organization];

    before(() => {
      return knex('organizations')
        .delete()
        .then(() => {
          return knex('organizations').insert(organizations);
        });
    });

    after(() => {
      return knex('organizations').delete();
    });

    it('should be a function', function() {
      // then
      expect(OrganizationRepository.getByUserId).to.be.a('function');
    });

    describe('success management', function() {

      it('should return an organization by provided userId', function(done) {
        // Given
        const userId = 2;

        // then
        OrganizationRepository.getByUserId(userId)
          .then((foundOrganization) => {
            expect(foundOrganization).to.exist;
            expect(foundOrganization).to.be.an('array');
            expect(foundOrganization[0].attributes.email).to.equal(second_inserted_organization.email);
            expect(foundOrganization[0].attributes.type).to.equal(second_inserted_organization.type);
            expect(foundOrganization[0].attributes.name).to.equal(second_inserted_organization.name);
            expect(foundOrganization[0].attributes.userId).to.equal(second_inserted_organization.userId);
            expect(foundOrganization[0].attributes.id).to.equal(second_inserted_organization.id);
            done()
          });
      });

      //Il faut rajouter un done pour que le test soit rouge ? sinon il ecrit juste une erreur avec un test vert
      //Test vert avec erreur sans done ou test rouge avec done ? lequel est le meilleur
      it('should return all organizations when provided userId has multiple organizations', function(done) {
        // Given
        const userId = 1;

        // then
        OrganizationRepository.getByUserId(userId)
          .then((foundOrganizations) => {
            expect(foundOrganizations).to.exist;
            expect(foundOrganizations).to.be.an('array');
            expect(foundOrganizations).to.have.lengthOf(2);
            done()
          });
      });

      it('should return a rejection when organization id is not found', function() {
        const userId = 10083;
        return OrganizationRepository.get(userId)
          .catch((err) => {
            expect(err.message).to.equal('EmptyResponse');
          });
      });

    });
  });
});
