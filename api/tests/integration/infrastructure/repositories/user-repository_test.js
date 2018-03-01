const { expect, knex, sinon } = require('../../../test-helper');
const faker = require('faker');
const bcrypt = require('bcrypt');

const Bookshelf = require('../../../../lib/infrastructure/bookshelf');
const BookshelfUser = require('../../../../lib/infrastructure/data/user');
const userRepository = require('../../../../lib/infrastructure/repositories/user-repository');
const { AlreadyRegisteredEmailError } = require('../../../../lib/domain/errors');
const DomainUser = require('../../../../lib/domain/models/User');
const { NotFoundError } = require('../../../../lib/domain/errors');

describe('Integration | Infrastructure | Repository | UserRepository', () => {

  let userId;
  const email = faker.internet.email().toLowerCase();
  const userPassword = bcrypt.hashSync('A124B2C3#!', 1);
  const inserted_user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email,
    password: userPassword,
    cgu: true
  };

  describe('#findUserById', () => {

    beforeEach(() => {
      return knex('users').insert(inserted_user)
        .then((result) => (userId = result.shift()));
    });

    afterEach(() => {
      return knex('users').delete();
    });

    describe('Success management', () => {

      it('should find a user by provided id', () => {
        return userRepository.findUserById(userId)
          .then((foundedUser) => {
            expect(foundedUser).to.exist;
            expect(foundedUser).to.be.an('object');
            expect(foundedUser.attributes.email).to.equal(inserted_user.email);
            expect(foundedUser.attributes.firstName).to.equal(inserted_user.firstName);
            expect(foundedUser.attributes.lastName).to.equal(inserted_user.lastName);
          });
      });

      it('should handle a rejection, when user id is not found', () => {
        const inexistenteId = 10093;
        return userRepository.findUserById(inexistenteId)
          .catch((err) => {
            expect(err).to.be.an.instanceof(BookshelfUser.NotFoundError);
          });
      });
    });
  });

  describe('#findByEmail', () => {

    beforeEach(() => {
      return knex('users').insert(inserted_user);
    });

    afterEach(() => {
      return knex('users').delete();
    });

    it('should be a function', () => {
      // then
      expect(userRepository.findByEmail).to.be.a('function');
    });

    it('should handle a rejection, when user id is not found', () => {
      // given
      const emailThatDoesNotExist = 10093;

      // when
      const promise = userRepository.findByEmail(emailThatDoesNotExist);

      // then
      return promise.catch((err) => {
        expect(err).to.be.instanceof(Bookshelf.Model.NotFoundError);
      });
    });

    it('should return a domain user when found', () => {
      // when
      const promise = userRepository.findByEmail(email);

      // then
      return promise.then((user) => {
        expect(user.email).to.equal(email);
      });
    });
  });

  describe('#isEmailAvailable', () => {

    beforeEach(() => {
      return knex('users').insert(inserted_user)
        .then((result) => (userId = result.shift()));
    });

    afterEach(() => {
      return knex('users').delete();
    });

    it('should return the email when the email is not registered', () => {
      // when
      const promise = userRepository.isEmailAvailable('email@example.net');

      // then
      return promise.then((email) => {
        expect(email).to.equal('email@example.net');
      });
    });

    it('should reject an AlreadyRegisteredEmailError when it already exists', () => {
      // when
      const promise = userRepository.isEmailAvailable(email);

      // then
      return promise.catch(err => {
        expect(err).to.be.an.instanceOf(AlreadyRegisteredEmailError);
      });

    });

  });

  describe('#save', () => {

    afterEach(() => {
      return knex('users').delete();
    });

    it('should save the user', () => {
      // given
      const email = 'my-email-to-save@example.net';
      const user = new DomainUser({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: email,
        password: 'Pix1024#',
        cgu: true,
      });

      // when
      const promise = userRepository.save(user);

      // then
      return promise
        .then(() => knex('users').select())
        .then((usersSaved) => {
          expect(usersSaved).to.have.lengthOf(1);
        });
    });

    it('should return a Domain User object', () => {
      // given
      const email = 'my-email-to-save@example.net';
      const user = new DomainUser({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: email,
        password: 'Pix1024#',
        cgu: true,
      });

      // when
      const promise = userRepository.save(user);

      // then
      return promise.then((userSaved) => {
        expect(userSaved).to.be.an.instanceOf(DomainUser);
        expect(userSaved.firstName).to.equal(user.firstName);
        expect(userSaved.lastName).to.equal(user.lastName);
        expect(userSaved.email).to.equal(user.email);
        expect(userSaved.cgu).to.equal(user.cgu);
      });
    });
  });

  describe('#updatePassword', () => {

    let user;

    beforeEach(() => {
      const userToSave = new DomainUser({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: 'my-email-to-save@example.net',
        password: 'Pix1024#',
        cgu: true,
      });

      return userRepository.save(userToSave)
        .then((savedUser) => {
          user = savedUser;
        });
    });

    afterEach(() => {
      return knex('users').delete();
    });

    it('should save the user', () => {
      // given
      const newPassword = '1235Pix!';

      // when
      const promise = userRepository.updatePassword(user.id, newPassword);

      // then
      return promise
        .then((updatedUser) => {
          expect(updatedUser).to.be.an.instanceOf(DomainUser);
          expect(updatedUser.password).to.equal(newPassword);
        });
    });
  });

  describe('#get', () => {

    beforeEach(() => {
      sinon.stub(BookshelfUser.prototype, 'where');
    });

    afterEach(() => {
      BookshelfUser.prototype.where.restore();
    });

    it('should resolve a domain User matching its ID', () => {
      // given
      const userId = 1234;
      const domainUser = new DomainUser({ id: userId, firstName: 'John', lastName: 'Doe', email: 'jdoe@example.net' });
      const bookshelfUser = { toDomainEntity: () => domainUser };
      const fetchStub = sinon.stub().resolves(bookshelfUser);
      BookshelfUser.prototype.where.returns({ fetch: fetchStub });

      // when
      const promise = userRepository.get(userId);

      // then
      return promise.then((result) => {
        expect(result).to.deep.equal(domainUser);
        expect(BookshelfUser.prototype.where).to.have.been.calledWithExactly({ id: userId });
        expect(fetchStub).to.have.been.calledWithExactly({ require: true, withRelated: ['pixRoles'] });
      });
    });

    it('should reject a domain NotFoundError when the user was  not found', () => {
      // given
      const userId = 1234;
      const fetchStub = sinon.stub().rejects(new BookshelfUser.NotFoundError());
      BookshelfUser.prototype.where.returns({ fetch: fetchStub });

      // when
      const promise = userRepository.get(userId);

      // then
      return promise
        .then(() => expect.fail('Expected an error to have been thrown.'))
        .catch(err => expect(err).to.be.an.instanceof(NotFoundError));
    });

  });

});

