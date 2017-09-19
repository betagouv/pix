const Boom = require('boom');
const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const passwordController = require('../../../../lib/application/passwords/password-controller');
const userService = require('../../../../lib/domain/services/user-service');
const tokenService = require('../../../../lib/domain/services/token-service');
const errorSerializer = require('../../../../lib/infrastructure/serializers/jsonapi/validation-error-serializer');
const { UserNotFoundError } = require('../../../../lib/domain/errors');

describe.only('Unit | Controller | PasswordController', () => {

  describe('#resetDemand', () => {

    it('should be a function', () => {
      //then
      expect(passwordController.resetDemand).to.be.a('function');
    });

    describe('Payload bad format cases: ', () => {

      let replyStub;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        sandbox.stub(Boom, 'badRequest').returns({});
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
            code: () => {
            }
          });
          // when
          passwordController.resetDemand(request, replyStub);

          // then
          sinon.assert.calledOnce(Boom.badRequest);
          sinon.assert.calledWith(replyStub, Boom.badRequest());
        });
      });
    });

    describe('When payload has a good format: ', () => {

      const request = { payload: { email: 'shif@fu.me' } };

      let replyStub;
      let sandbox;

      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        replyStub = sandbox.stub();
        sandbox.stub(userService, 'isUserExisting');
        sandbox.stub(tokenService, 'generateTemporaryKey');
        sandbox.stub(errorSerializer, 'serialize');
      });

      afterEach(() => {
        sandbox.restore();
      });

      describe('User existence test cases', () => {

        it('should verify user existence (by email)', () => {
          // given
          userService.isUserExisting.resolves();
          replyStub.returns({
            code: () => {
            }
          });

          //when
          const promise = passwordController.resetDemand(request, replyStub);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(userService.isUserExisting);
            sinon.assert.calledWith(userService.isUserExisting, request.payload.email);
          });
        });

        it('should rejects an error, when user is not found', () => {
          // given
          const error = new UserNotFoundError();
          const expectedErrorMessage = UserNotFoundError.getErrorMessage();
          const serializedError = {};
          errorSerializer.serialize.returns(serializedError);
          userService.isUserExisting.rejects(error);
          replyStub.returns({
            code: () => {
            }
          });

          //when
          const promise = passwordController.resetDemand(request, replyStub);

          // then
          return promise.then(() => {
            sinon.assert.calledOnce(errorSerializer.serialize);
            sinon.assert.calledWith(errorSerializer.serialize, expectedErrorMessage);
            sinon.assert.calledOnce(replyStub);
            sinon.assert.calledWith(replyStub, serializedError);
          });
        });

      });

      it('should ask for a temporary token generation', () => {
        // given
        const generatedToken = 'token';
        userService.isUserExisting.resolves();
        tokenService.generateTemporaryKey.resolves(generatedToken);
        replyStub.returns({
          code: () => {
          }
        });

        //when
        const promise = passwordController.resetDemand(request, replyStub);

        // then
        return promise.then(() => {
          sinon.assert.calledOnce(tokenService.generateTemporaryKey);
        });
      });
    });
  });

});
