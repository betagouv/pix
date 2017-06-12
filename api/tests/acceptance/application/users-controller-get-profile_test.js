const {describe, it, expect, sinon} = require('../../test-helper');
const faker = require('faker');
const server = require('../../../server');
const authorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');
const UserRepository = require('../../../lib/infrastructure/repositories/user-repository');
const User = require('../../../lib/domain/models/data/user');
const {NotFoundError} = require('../../../lib/domain/errors');

const expectedResultWhenInvalidToken = {
  errors: [{
    status: '400',
    title: 'Invalid Attribute',
    detail: 'Le token n\'est pas valid',
    source: {'pointer': '/data/attributes/authorization'},
    meta: {'field': 'authorization'}
  }]
};

const expectedResultUserNotFounded = {
  errors: [{
    status: '400',
    title: 'Invalid Attribute',
    detail: 'Cet utilisateur est introuvable',
    source: {'pointer': '/data/attributes/authorization'},
    meta: {'field': 'authorization'}
  }]
};

const expectedResultWhenErrorOccured = {
  errors: [{
    status: '400',
    title: 'Invalid Attribute',
    detail: 'Une erreur est survenue lors de l’authentification de l’utilisateur',
    source: {'pointer': '/data/attributes/authorization'},
    meta: {'field': 'authorization'}
  }]
};

describe('Acceptance | Controller | users-controller-get-profile', function() {

  const options = {
    method: 'GET',
    url: '/api/users',
    payload: {}
  };

  describe('GET /users', function() {

    describe('Errors case:', () => {

      it('should response with 401 HTTP status code, when empty authorization', () => {
        // When
        return server.injectThen(options).then(response => {
          // Then
          expect(response.statusCode).to.equal(401);
          expect(response.result).to.be.deep.equal(expectedResultWhenInvalidToken);
        });
      });

      it('should response with 401  HTTP status code, when authorization is not valid', () => {
        // Given
        options['headers'] = {authorization: 'INVALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          expect(response.statusCode).to.equal(401);
        });
      });

      it('should return 401  HTTP status code, when authorization is valid but user not found', () => {
        const authorizationTokenStub = sinon.stub(authorizationToken, 'verify').resolves(4);
        const UserRepositoryStub = sinon.stub(UserRepository, 'findUserById').returns(Promise.reject(new NotFoundError()));
        options['headers'] = {authorization: 'Bearer VALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          authorizationTokenStub.restore();
          UserRepositoryStub.restore();
          expect(response.statusCode).to.equal(401);
          expect(response.result).to.deep.equal(expectedResultUserNotFounded);
        });
      });

      it('should return 401  HTTP status code, when authorization is valid but error occurred', () => {
        const authorizationTokenStub = sinon.stub(authorizationToken, 'verify').resolves(4);
        const UserRepositoryStub = sinon.stub(UserRepository, 'findUserById').returns(Promise.reject(new Error()));
        options['headers'] = {authorization: 'Bearer VALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          authorizationTokenStub.restore();
          UserRepositoryStub.restore();
          expect(response.statusCode).to.equal(401);
          expect(response.result).to.deep.equal(expectedResultWhenErrorOccured);
        });
      });

    });

    describe('Success cases:', function() {

      it('should response with 201 HTTP status code, when authorization is valid and user is found', () => {
        // Given
        const user = new User({
          'first-name': faker.name.firstName(),
          'last-name': faker.name.lastName(),
          email: faker.internet.email(),
          password: 'A124B2C3#!',
          cgu: true
        });

        const authorizationTokenStub = sinon.stub(authorizationToken, 'verify').resolves(1);
        const UserRepositoryStub = sinon.stub(UserRepository, 'findUserById').resolves(user);
        options['headers'] = {authorization: 'Bearer VALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          authorizationTokenStub.restore();
          UserRepositoryStub.restore();
          expect(response.statusCode).to.equal(201);
        });
      });
    });
  });
});
