const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const snapshotAuthorization = require('../../../../lib/application/preHandlers/snapshot-authorization');
const tokenService = require('../../../../lib/domain/services/token-service');
const organizationRepository = require('../../../../lib/infrastructure/repositories/organization-repository');

describe('Unit | Pre-handler | Snapshot Authorization', () => {

  describe('#verify', () => {

    let sandbox;
    let replyStub;
    let codeStub;
    const request = {
      headers: { authorization: 'VALID_TOKEN' },
      params: {
        id: 8
      }
    };

    const requestWithTokenInParams = {
      headers: { },
      params: {
        id: 8,
        userToken: 'tt8'
      }
    };

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(tokenService, 'extractTokenFromAuthChain');
      sandbox.stub(tokenService, 'extractUserId');
      sandbox.stub(organizationRepository, 'getByUserId');
      codeStub = sandbox.stub();
      replyStub = sandbox.stub().returns({
        code: codeStub
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      // then
      expect(snapshotAuthorization.verify).to.be.a('function');
    });

    it('should get userId from token in headers', () => {
      // given
      tokenService.extractTokenFromAuthChain.returns('VALID_TOKEN');
      tokenService.extractUserId.returns('userId');
      organizationRepository.getByUserId.resolves([{ attributes : { id: 8 } }]);

      // when
      const promise = snapshotAuthorization.verify(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(tokenService.extractUserId);
        sinon.assert.calledWith(tokenService.extractUserId, request.headers.authorization);
      });
    });

    it('should get userId from token in params', () => {
      // given
      tokenService.extractUserId.returns('userId');
      organizationRepository.getByUserId.resolves([{ attributes : { id: 8 } }]);

      // when
      const promise = snapshotAuthorization.verify(requestWithTokenInParams, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(tokenService.extractUserId);
        sinon.assert.calledWith(tokenService.extractUserId, requestWithTokenInParams.params.userToken);
      });
    });

    describe('When snapshot is linked to userId (userId exist)', () => {

      it('should reply', (done) => {
        // given
        const fetchedOrganization = [{ attributes : { id: 8 } }];
        const extractedUserId = 'userId';
        tokenService.extractUserId.returns(extractedUserId);
        organizationRepository.getByUserId.resolves(fetchedOrganization);

        // when
        const promise = snapshotAuthorization.verify(request, replyStub);

        // then
        promise.then(() => {
          sinon.assert.calledOnce(organizationRepository.getByUserId);
          sinon.assert.calledWith(organizationRepository.getByUserId, extractedUserId);
          sinon.assert.calledOnce(replyStub);
          done();
        });
      });
    });

    describe('When userId (from token) is not linked to organization', () => {
      it('should take over the request and response with 401 status code', () => {
        // given
        const extractedUserId = null;
        const takeOverSpy = sinon.spy();

        codeStub.returns({
          takeover: takeOverSpy
        });
        tokenService.extractUserId.returns(extractedUserId);
        organizationRepository.getByUserId.resolves([]);
        // when
        const promise = snapshotAuthorization.verify(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(replyStub);
          sinon.assert.calledWith(codeStub, 401);
          sinon.assert.calledOnce(takeOverSpy);
        });
      });
    });

  });
});
