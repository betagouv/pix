const {describe, it, beforeEach, afterEach, sinon, expect} = require('../../../test-helper');
const reCaptcha = require('../../../../lib/domain/services/recaptcha-validator');

const request = require('request');

const expectedNotValidReCaptcha = {
  'success': false,
  'error-codes': [
    'missing-input-response',
    'missing-input-secret'
  ]
};

const expectedValidReCaptcha = {
  success: true
};

describe('Unit | Service | reCaptcha Validator', function() {
  describe('#Service:', function() {

    describe('Service with invalid user response', function() {
      [
        '',
        ' ',
        undefined,
        null,
      ].forEach((response) => {
        it(`should get error, when user response provided is ${response}`, function() {
          // when
          const verificationStatus = reCaptcha.verify(response);
          // then
          expect(verificationStatus).to.be.false;
        });
      });
    });

    describe('errors management', () => {
      let verifyErrorStub;
      beforeEach(() => {
        verifyErrorStub = sinon.stub(reCaptcha, 'verify').rejects(expectedNotValidReCaptcha);
      });

      afterEach(() => {
        verifyErrorStub.restore();
      });

      it('should get success, when user response is provided and valid', function() {
        // when
        const promise = reCaptcha.verify('VALID_RECAPTCHA');
        // then
        return promise.catch((verificationStatus) => {
          expect(verificationStatus).to.include.keys('success');
          expect(verificationStatus.success).to.be.false;
          expect(verificationStatus).to.include.keys('error-codes');
          expect(verificationStatus['error-codes'].length).to.be.at.least(1);
          expect(verificationStatus['error-codes'][0]).to.be.equal('missing-input-response');
        });

      });
    });

    describe('success management', () => {
      let verifySuccessStub;
      beforeEach(() => {
        verifySuccessStub = sinon.stub(reCaptcha, 'verify').resolves(expectedValidReCaptcha);
      });

      afterEach(() => {
        verifySuccessStub.restore();
      });

      it('should get success, when user response is provided and valid', function() {
        // when
        const promise = reCaptcha.verify('VALID_RECAPTCHA');
        // then
        return promise.then((verificationStatus) => {
          expect(verificationStatus).to.include.keys('success');
          expect(verificationStatus.success).to.be.true;
        });

      })

      it('should call the google reCaptcha API with good parameters', function() {
        // given
        const requestStub = sinon.spy(request, 'post');
        // When
        reCaptcha.getGoogleVerification('VALID_RECAPTCHA');
        // then
        expect(request.post.calledOnce).to.be.true;
        expect(request.post.getCall(0).args[0].form.secret).to.be.equal('test-recaptcha-key');
        expect(request.post.getCall(0).args[0].form.response).to.be.equal('VALID_RECAPTCHA');
        requestStub.restore();

      });

    });

  });
});
