const {describe, it, expect} = require('../../../test-helper');
const userService = require('../../../../lib/domain/services/profile-user-service');

describe('Unit | Service | Profil User Service', function() {

  describe('#getUser', () => {

    it('should exist', () => {
      expect(userService.getUser).to.exist;
    });

    it('should return a resolved promise', () => {
      // when
      const promise = userService.getUser('user-id');
      // then
      return expect(promise).to.be.fulfilled;
    });

    it('should return a user with all competences (areas included)', () => {
      // Given
      const expectedUser = {};
      // When
      const
        promise = userService.getUser('user-id');
      // Then
      return promise.then((user) => {
        expect(user).to.deep.equal(expectedUser);
      });
    });

  });
});
