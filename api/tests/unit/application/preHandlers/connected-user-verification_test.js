const { describe, it, expect, sinon, beforeEach, afterEach } = require('../../../test-helper');
const User = require('../../../../lib/domain/models/data/user');
const tokenService = require('../../../../lib/domain/services/token-service');
const ConnectedUserVerification = require('../../../../lib/application/preHandlers/connected-user-verification');

describe('Unit | Pre-handler | Connected User Verification', () => {

  describe('#verifyByToken', () => {

    let sandbox;
    let replyStub;
    let codeStub;
    const request = {
      headers: { authorization: 'VALID_TOKEN' }};

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      sandbox.stub(tokenService, 'verifyValidity');
      codeStub = sandbox.stub();
      replyStub = sandbox.stub().returns({
        code: codeStub
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should call verification from token', () => {
      // given

      // when
      const promise = ConnectedUserVerification.verifyByToken(request, replyStub);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(tokenService.verifyValidity);
        sinon.assert.calledWith(tokenService.verifyValidity, request.headers.authorization);
      });
    });


  });
});
