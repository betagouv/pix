const { expect, describe, beforeEach, afterEach, it, sinon } = require('../../../test-helper');
const ResetPasswordDemandRepository = require('../../../../lib/infrastructure/repositories/reset-password-demands-repository');
const ResetPasswordDemand = require('../../../../lib/domain/models/data/reset-password-demand');

describe('Unit | Repository | Reset Password Demand Repository', function() {

  describe('#create', () => {

    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(ResetPasswordDemand.prototype, 'save');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(ResetPasswordDemandRepository.create).to.be.a('function');
    });

    it('should save a new reset password demand', () => {
      // given
      const resetPasswordDemand = {};
      ResetPasswordDemand.prototype.save.resolves();

      // when
      const promise = ResetPasswordDemandRepository.create(resetPasswordDemand);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(ResetPasswordDemand.prototype.save);
      });
    });
  });

  describe('#markAsBeingUsed', () => {

    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(ResetPasswordDemand.prototype, 'save');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(ResetPasswordDemandRepository.markAsBeingUsed).to.be.a('function');
    });

    it('should save a new reset password demand', () => {
      // given
      const temporaryKey = 'temp_key';
      ResetPasswordDemand.prototype.save.resolves();

      // when 
      const promise = ResetPasswordDemandRepository.markAsBeingUsed(temporaryKey);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(ResetPasswordDemand.prototype.save);
        sinon.assert.calledWith(ResetPasswordDemand.prototype.save, { used: true }, { patch: true, require: false });
      });
    });
  });
});
