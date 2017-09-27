const { expect, describe, beforeEach, afterEach, it, sinon } = require('../../../test-helper');
const ResetPasswordDemandRepository = require('../../../../lib/infrastructure/repositories/password-reset-demands-repository');
const ResetPasswordDemand = require('../../../../lib/domain/models/data/password-reset-demand');

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

  describe('#findByTemporaryKey', () => {

    beforeEach(() => {
      sinon.stub(ResetPasswordDemand, 'where');
    });

    afterEach(() => {
      ResetPasswordDemand.where.restore();
    });

    it('should be a function', () => {
      // then
      expect(ResetPasswordDemandRepository.findByTemporaryKey).to.be.a('function');
    });

    it('should retrieve a record', () => {
      // given
      const foundedDemand = {};
      const fetchStub = sinon.stub().resolves(foundedDemand);
      const temporaryKey = 'temp_key';
      ResetPasswordDemand.where.returns({
        fetch: fetchStub
      });
      const expectedWhereArgs = { temporaryKey, used: false };

      // when
      const promise = ResetPasswordDemandRepository.findByTemporaryKey(temporaryKey);

      // then
      return promise.then((foundedRecord) => {
        sinon.assert.calledOnce(ResetPasswordDemand.where);
        sinon.assert.calledWith(ResetPasswordDemand.where, expectedWhereArgs);
        sinon.assert.calledOnce(fetchStub);
        expect(foundedRecord).to.equal(foundedDemand);
      });
    });

  });
});
