const {describe, it, after, beforeEach, before, expect, sinon} = require('../../test-helper');
const faker = require('faker');

const server = require('../../../server');

describe.only('Acceptance | Controller | users-controller-get-profile', function() {

  describe('GET /users', function() {

    describe('Errors case:', () => {
      const options = {
        method: 'GET',
        url: '/api/users',
        payload: {}
      };

      it('should return 401 HTTP status code, when empty authorization', () => {
        // When
        return server.injectThen(options).then(response => {
          // Then
          expect(response.statusCode).to.equal(401);
        });
      });

      it('should return 401, when authorization is not valid', () => {
        // Given
        options['headers'] = {authorization: 'INVALID_TOKEN'};
        // When
        return server.injectThen(options).then(response => {
          // Then
          expect(response.statusCode).to.equal(401);
        });
      });

      /*
       * Return user
       * return 401 if token is non-valid
       *
       * */

    })
  });
});
