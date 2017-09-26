const jsonwebtoken = require('jsonwebtoken');
const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const settings = require('../../../../lib/settings');
const resetPasswordService = require('../../../../lib/domain/services/reset-password-service');
const tokenService = require('../../../../lib/domain/services/token-service');
const resetPasswordRepository = require('../../../../lib/infrastructure/repositories/reset-password-demands-repository');
const { InvalidTemporaryKeyError, PasswordResetDemandNotFoundError } = require('../../../../lib/domain/errors');

describe('Unit | Service | Password Service', function() {

  describe('#generateTemporaryKey', function() {

    beforeEach(() => {
      sinon.stub(jsonwebtoken, 'sign');
    });

    afterEach(() => {
      jsonwebtoken.sign.restore();
    });

    it('should be a function', () => {
      expect(resetPasswordService.generateTemporaryKey).to.exist.and.to.be.a('function');
    });

    it('should call sign function from jwt', () => {
      // given
      const signParams = {
        payload: { data: settings.temporaryKey.payload },
        secret: settings.temporaryKey.secret,
        expiration: { expiresIn: settings.temporaryKey.tokenLifespan }
      };

      // when
      resetPasswordService.generateTemporaryKey();

      // then
      sinon.assert.calledOnce(jsonwebtoken.sign);
      sinon.assert.calledWith(jsonwebtoken.sign, signParams.payload, signParams.secret, signParams.expiration);
    });
  });

  describe('#invalidOldResetPasswordDemand', function() {

    beforeEach(() => {
      sinon.stub(resetPasswordRepository, 'markAsBeingUsed');
    });

    afterEach(() => {
      resetPasswordRepository.markAsBeingUsed.restore();
    });

    it('should be a function', () => {
      expect(resetPasswordService.invalidOldResetPasswordDemand).to.exist.and.to.be.a('function');
    });

    it('should call reset password repository', () => {
      // given
      const userEmail = 'shi@fu.me';
      resetPasswordRepository.markAsBeingUsed.resolves();

      // when
      const promise = resetPasswordService.invalidOldResetPasswordDemand(userEmail);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(resetPasswordRepository.markAsBeingUsed);
        sinon.assert.calledWith(resetPasswordRepository.markAsBeingUsed, userEmail);
      });
    });
  });

  describe('#verifyDemand', () => {

    it('should be a function', () => {
      // then
      expect(resetPasswordService.verifyDemand).to.be.a('function');
    });

    describe('TemporaryKey validity check', () => {

      let sandbox;
      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        sandbox.stub(tokenService, 'verifyValidity');
        sandbox.stub(resetPasswordRepository, 'findByTemporaryKey');
      });

      afterEach(() => {
        sandbox.restore();
      });

      describe('When temporary is not valid', () => {
        it('should reject with an InvalidTemporaryKeyError', () => {
          // given
          const token = 'invalid_token';
          tokenService.verifyValidity.returns(false);

          // when
          const promise = resetPasswordService.verifyDemand(token);

          // then
          return promise.catch((err) => {
            expect(err).to.be.an.instanceOf(InvalidTemporaryKeyError);
          });
        });
      });

      describe('When temporary is valid', () => {

        it('should verify temporaryKey existence', () => {
          // given
          const token = 'valid_token';
          tokenService.verifyValidity.returns(true);
          resetPasswordRepository.findByTemporaryKey.resolves(true);

          // when
          const promise = resetPasswordService.verifyDemand(token);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(resetPasswordRepository.findByTemporaryKey);
            sinon.assert.calledWith(resetPasswordRepository.findByTemporaryKey);
            sinon.assert.calledOnce(tokenService.verifyValidity);
            sinon.assert.calledWith(tokenService.verifyValidity, token);
          });

        });

        it('should return an PasswordResetDemandNotFoundError', () => {
          // given
          const token = 'valid_but_unkonwn_token';
          tokenService.verifyValidity.returns(true);
          resetPasswordRepository.findByTemporaryKey.resolves(false);

          // when
          const promise = resetPasswordService.verifyDemand(token);

          // then
          return promise.catch((err) => {
            expect(err).to.an.instanceOf(PasswordResetDemandNotFoundError);
          });
        });
      });

    });

  });
});
