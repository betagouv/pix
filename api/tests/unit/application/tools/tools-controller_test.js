const {expect, sinon} = require('../../../test-helper');
const cache = require('../../../../lib/infrastructure/cache');
const {InvalidTokenError} = require('../../../../lib/domain/errors');
const authorizationToken = require('../../../../lib/infrastructure/validators/jsonwebtoken-verify');
const ToolsController = require('../../../../lib/application/tools/tools-controller');

describe('Unit | Controller | ToolsController', () => {

  describe('#removeCacheEntry', () => {
    const request = {
      headers: {authorization: 'INVALID_TOKEN'},
      payload: {
        'cache-key': 'test-cache-key'
      }
    };

    const replyStub = sinon.stub();
    const codeSpy = sinon.spy();

    beforeEach(() => {
      sinon.stub(cache, 'del');
      sinon.stub(authorizationToken, 'verify').resolves('user_id');
      replyStub.returns({
        code: codeSpy
      });
    });

    afterEach(() => {
      cache.del.restore();
      replyStub.reset();
      authorizationToken.verify.restore();
    });

    it('should exist', () => {
      // Then
      expect(ToolsController.removeCacheEntry).to.exist.and.to.be.a.function;
    });

    it('should call reply', () => {
      // when
      const promise = ToolsController.removeCacheEntry(request, replyStub);

      return promise.then(() => {
        // then
        sinon.assert.calledOnce(replyStub);
      });
    });

    describe('Success cases', () => {

      it('should delete cache entry with key provided', () => {
        // Given
        cache.del.returns(1);
        // When
        const promise = ToolsController.removeCacheEntry(request, replyStub);

        return promise.then(_ => {
          // Then
          sinon.assert.calledWith(codeSpy, 200);
          expect(replyStub.getCall(0).args[0]).to.be.equal('Entry successfully deleted');
        });
      });

    });

    describe('Error cases', () => {

      it('should return 401 status code, when token is non-valid', () => {
        // Given
        cache.del.returns(1);
        authorizationToken.verify.rejects(new InvalidTokenError());

        // When
        const promise = ToolsController.removeCacheEntry(request, replyStub);

        return promise.then(_ => {
          // Then
          sinon.assert.calledWith(codeSpy, 401);
          expect(replyStub.getCall(0).args[0]).to.be.equal('Error on Token');
        });
      });

      it('should reply with Error, when cache key is not found', () => {
        // Given
        cache.del.returns(0);

        // When
        const promise = ToolsController.removeCacheEntry(request, replyStub);

        return promise.then(_ => {
          // The
          expect(replyStub.getCall(0).args[0]).to.be.equal('Entry key is not found');
          sinon.assert.calledWith(codeSpy, 404);
        });
      });
    });

  });
});
