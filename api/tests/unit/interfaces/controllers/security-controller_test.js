const { expect, sinon } = require('../../../test-helper');
const tokenService = require('../../../../lib/domain/services/token-service');
const securityController = require('../../../../lib/interfaces/controllers/security-controller');

describe('Unit | Interfaces | Controllers | SecurityController', () => {

  describe('#assertThatUserHasAValidAccessToken', () => {

    beforeEach(() => {
      sinon.stub(tokenService, 'extractTokenFromAuthChain');
      sinon.stub(tokenService, 'verifyValidity');
    });

    afterEach(() => {
      tokenService.extractTokenFromAuthChain.restore();
      tokenService.verifyValidity.restore();
    });

    it('should reply an auhorization object (with "credentials" property) when the request contains the authorization header with a valid JWT access token', () => {
      // given
      const validAccessToken = 'some.jwt.access_token';
      const request = { headers: { authorization: `Bearer ${validAccessToken}` } };
      const reply = { continue: sinon.stub() };
      tokenService.extractTokenFromAuthChain.returns(validAccessToken);
      tokenService.verifyValidity.resolves();

      // when
      const promise = securityController.assertThatUserHasAValidAccessToken(request, reply);

      // then
      return promise.then(() => {
        expect(reply.continue).to.have.been.calledWith({ credentials: { accessToken: validAccessToken } });
      });
    });

    it('should reply with an errror (HTTP status code 401) and stop request execution when authorization header is missing or JWT access token is invalid', () => {
      // given
      const request = { headers: { authorization: null } };
      const stubTakeOver = sinon.stub();
      const stubReplyCode = sinon.stub().returns({ takeover: stubTakeOver });
      const reply = sinon.stub().returns({ code: stubReplyCode });
      tokenService.verifyValidity.rejects(new Error('Missing or invalid access token'));

      // when
      const promise = securityController.assertThatUserHasAValidAccessToken(request, reply);

      // then
      return promise.then(() => {
        expect(stubReplyCode).to.have.been.calledWith(401);
        expect(stubTakeOver).to.have.been.calledOnce;
      });
    });
  });
});
