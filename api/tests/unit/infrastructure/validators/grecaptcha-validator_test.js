const {describe, it, expect, beforeEach, afterEach, sinon} = require('../../../test-helper');
const gRecaptcha = require('../../../../lib/infrastructure/validators/grecaptcha-validator');
const request = require('request');
const logger = require('../../../../lib/infrastructure/logger');

const INVALID_RECAPTCHA_TOKEN = 'INVALID_RECAPTCHA';
const RECAPTCHA_TOKEN = '03AOPBWq981qDlqqeuJvRRPOdV_jUsJKV7K9y8EdroTMzC50kWInTzGqEdKAhaSRozRS2Z84XzrpmcGmmF1qxC06lGPxbBfYOon_dVIie98Dr-sclrLJ69D6C3E5r9DLxNvKZjSF9cEmp7HdJzHR1Bw5-fqoqAw-9daY05zEU7abA6Wr59RPs8UvU1QnWXACcbIDW64F723EeAOWBuq14vUaYJRWGEhSbucM7uL7Uc9YbErVbJoVmH5YwVPuQiHBv9F39UBUC7qIaSKbruIy6lD7pKL0_Acyy_BGkaTSavHAdTBG_b091ex6-XheE8UigM2YeTKnch_6sandf0lmt47SCvwFlvBBMQMWJL2h8fpXfijP2kTEQiMlIhdOEslkqDykE6hCMtZLsE';

describe.only('Unit | Service | google-recaptcha-validator', () => {

  describe('#verify', () => {

    it('should be a function', function() {
      expect(gRecaptcha.verify).to.be.a('function');
    });

    it('should call google verify with good url and query parameters', function() {
      // given
      const reCaptchaToken = '1234';
      const requestPostStub = sinon.stub(request, 'post', function(uri, cb) {
        // then
        requestPostStub.restore();
        expect(uri).to.equal(`https://www.google.com/recaptcha/api/siteverify?secret=test-recaptcha-key&response=${reCaptchaToken}`);
        cb(null, null, {
          'success': true
        });
      });

      // when
      return gRecaptcha.verify(reCaptchaToken);
    });

    describe('Success case', function() {

    });

    describe('Error cases', function() {

      it('should return a rejected promise when user response token is invalid', function() {
        // given
        const requestPostErrorStub = sinon.stub(request, 'post', function(uri, cb) {
          requestPostErrorStub.restore();
          const err = null;
          const response = {statusCode: 200};
          const body = {
            'success': false,
            'error-codes': ['invalid-input-secret']
          };

          cb(err, response, body);
        });

        // when
        const promise = gRecaptcha.verify(INVALID_RECAPTCHA_TOKEN);
        return expect(promise).to.be.rejected;
      });
    });

    it('should return a rejected promise when request failed for network reason', function() {
      // given
      const loggerStub = sinon.stub(logger, 'error').returns({});
      const requestPostErrorStub = sinon.stub(request, 'post', function(uri, cb) {
        requestPostErrorStub.restore();
        const err = new Error();
        const response = {};
        const body = {};

        cb(err, response, body);
      });

      // when
      const promise = gRecaptcha.verify('foo-bar');
      loggerStub.restore();
      return expect(promise).to.be.rejectedWith('An error occurred during connection to the Google servers');
    });

    it('should call logger once time, when request failed for network reason', function() {
      // given
      const loggerStub = sinon.stub(logger, 'error').returns({});
      const requestPostErrorStub = sinon.stub(request, 'post', function(uri, cb) {
        requestPostErrorStub.restore();
        const err = new Error();
        const response = {};
        const body = {};

        cb(err, response, body);
      });

      // when
      return gRecaptcha.verify('foo-bar').catch(() => {
        loggerStub.restore();
        sinon.assert.calledOnce(loggerStub);

      });
    });
  });

});

describe('Google reCaptcha validator behavior', () => {

  describe('#reCaptcha validator error cases', () => {

    describe('#reCaptcha validator success', () => {

      it.skip('should get an JSON response', function() {
        // when
        const gResponse = gRecaptcha.verify(INVALID_RECAPTCHA_TOKEN);
        const responseDataType = (!!JSON.parse(gResponse));
        console.log(gResponse.success);
        // then
        expect(responseDataType).to.be.true;
      });

    });

  });
});
