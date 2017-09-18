const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const userRepository = require('../../../../lib/infrastructure/repositories/user-repository');
const userService = require('../../../../lib/domain/services/user-service');

describe('Unit | Service | User Service', () => {

  describe('#isUserExisting', () => {
    let sandbox;
    const email = 'shi@fu.me';

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(userRepository, 'findByEmail');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call a userRepository#findByEmail', () => {
      // given
      userRepository.findByEmail.resolves();

      // when
      const promise = userService.isUserExisting(email);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(userRepository.findByEmail);
        sinon.assert.calledWith(userRepository.findByEmail, email);
      });
    });

    it('should return true, when user is found', () => {
      // given
      const foundUser = {};
      userRepository.findByEmail.resolves(foundUser);

      // when
      const promise = userService.isUserExisting(email);

      // then
      return promise.then((result) => {
        expect(result).to.equal(true);
      });
    });

    it('should return false when no user found', () => {
      // given
      userRepository.findByEmail.rejects();

      // when
      const promise = userService.isUserExisting(email);

      // then
      return promise.then((result) => {
        expect(result).to.equal(false);
      });
    });
  });
});
