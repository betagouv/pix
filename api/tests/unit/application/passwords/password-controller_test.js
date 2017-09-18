const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const passwordController = require('../../../../lib/application/passwords/password-controller');
const userService = require('../../../../lib/domain/services/user-service');

describe('Unit | Controller | PasswordController', () => {

  describe('#resetDemand', () => {

    it('should be a function', () => {
      //then
      expect(passwordController.resetDemand).to.be.a('function');
    });

    describe('Payload bad format cases: ', () => {

      let replyStub;
      let codeSpy;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        codeSpy = sandbox.spy();
      });

      afterEach(() => {
        sandbox.restore();
      });

      [
        { request: {}, description: 'no payload' },
        { request: { payload: {} }, description: 'empty payload' },
        { request: { payload: { key: 'value' } }, description: 'no email key in payload' }

      ].forEach(({ request, description }) => {
        it(`should reply with 400 status, when ${description} provided`, () => {
          // given
          replyStub.returns({
            code: codeSpy
          });
          // when
          passwordController.resetDemand(request, replyStub);

          // then
          sinon.assert.calledWith(codeSpy, 400);
        });
      });
    });

    describe('When payload has a good format: ', () => {

      const request = { payload: { email: 'shif@fu.me' } };

      let replyStub;
      let codeSpy;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        codeSpy = sandbox.spy();
        sandbox.stub(userService, 'isUserExisting');
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should verify user existence (by email)', () => {
        // given
        userService.isUserExisting.resolves();
        replyStub.returns({
          code: codeSpy
        });

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(userService.isUserExisting);
          sinon.assert.calledWith(userService.isUserExisting, request.payload.email);
        });
      });

    });
  });

});
