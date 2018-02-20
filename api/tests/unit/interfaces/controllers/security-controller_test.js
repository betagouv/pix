const { expect, sinon } = require('../../../test-helper');
const tokenService = require('../../../../lib/domain/services/token-service');
const securityController = require('../../../../lib/interfaces/controllers/security-controller');

describe('Unit | Interfaces | Controllers | SecurityController', () => {

  describe('#assertThatUserHasAValidAccessToken', () => {

    beforeEach(() => {
      sinon.stub(tokenService, 'verifyValidity');
    });

    afterEach(() => {
      tokenService.verifyValidity.restore();
    });

    it('should reply "true" when the request contains the authorization header with a valid JWT access token', () => {
      // given
      const request = { headers: { authorization: 'some.jwt.access_token' } };
      const reply = sinon.stub();
      tokenService.verifyValidity.resolves();

      // when
      const promise = securityController.assertThatUserHasAValidAccessToken(request, reply);

      // then
      return promise.then(() => {
        expect(reply).to.have.been.calledWith(true);
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
