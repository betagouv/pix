const {describe, it, after, beforeEach, before, expect, sinon} = require('../../test-helper');
const faker = require('faker');
const server = require('../../../server');
const authorizationToken = require('../../../lib/infrastructure/validators/jsonwebtoken-verify');

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

      it('should return 401  HTTP status code, when authorization is valid but user not found');

      /*
       * Return user
       * return 401 if token is non-valid
       *
       * */

    });

    describe('Success cases:', function() {

      it('should response with 201 HTTP status code, when authorization is valid and user is found', () => {
        // Given
        const authorizationTokenStub = sinon.stub(authorizationToken, 'verify').resolves();
        options['headers'] = {authorization: 'VALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          authorizationTokenStub.restore();
          expect(response.statusCode).to.equal(201);
        });
      });
    });
  });
});
