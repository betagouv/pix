const {describe, it, after, beforeEach, before, expect, sinon} = require('../../test-helper');
const faker = require('faker');
const server = require('../../../server');
const authorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');
const UserRepository = require('../../../lib/infrastructure/repositories/user-repository');
const User = require('../../../lib/domain/models/data/user');
const {NotFoundError} = require('../../../lib/domain/errors');

describe.only('Acceptance | Controller | users-controller-get-profile', function() {

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

      it('should return 401  HTTP status code, when authorization is valid but user not found', (done) => {
        const authorizationTokenStub = sinon.stub(authorizationToken, 'verify').resolves(4);
        const UserRepositoryStub = sinon.stub(UserRepository, 'findUserById').rejects(new NotFoundError());
        options['headers'] = {authorization: 'VALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          authorizationTokenStub.restore();
          UserRepositoryStub.restore();
          expect(response.statusCode).to.equal(401);
          done();
        });
      });

    });

    describe.skip('Success cases:', function() {

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
        options['headers'] = {authorization: 'VALID_TOKEN'};
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
