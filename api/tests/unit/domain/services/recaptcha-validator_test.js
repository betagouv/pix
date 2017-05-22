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
        const promise = reCaptcha.verify('INVALID_RECAPTCHA');
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

    it('should call the google reCaptcha API with good parameters', function() {
      // given
      const requestMock = sinon.mock(request);

      // Expect
      requestMock.expects('post').once();
      //requestMock.expects('post').withArgs('https://www.google.com/recaptcha/api/siteverify');

      // When
      reCaptcha.verify('my response');

      // Then
      requestMock.verify();
      requestMock.restore();

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

      });

    });

  });
});
