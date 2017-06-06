const {describe, it, expect, sinon} = require('../../../test-helper');
const gRecaptcha = require('../../../../lib/infrastructure/validators/grecaptcha-validator');
const request = require('request');
const logger = require('../../../../lib/infrastructure/logger');
const {googleReCaptcha} = require('../../../../lib/settings');

const INVALID_OR_UNKNOW_RECAPTCHA = 'INVALID_RECAPTCHA';
const RECAPTCHA_TOKEN = 'a-valid-recaptch-token-should-be-a-string-of-512-numalpha-characters';
const SUCCESSFULL_VERIFICATION_RESPONSE = {'body': '{\n  "success": true,\n "hostname": "",\n  "error-codes": [\n    "timeout-or-duplicate"\n  ]\n}'};
const UNSUCCESSFULL_VERIFICATION_RESPONSE = {'body': '{\n  "success": false,\n "hostname": "",\n  "error-codes": [\n    "timeout-or-duplicate"\n  ]\n}'};

describe('Unit | Service | google-recaptcha-validator', () => {

  describe('#verify', () => {

    it('should be a function', function() {
      expect(gRecaptcha.verify).to.be.a('function');
    });

    it('should call google verify with good url and query parameters', function() {
      // given
      const requestPostStub = sinon.stub(request, 'post', function(uri, cb) {
        // then
        requestPostStub.restore();
        expect(uri).to.equal(`https://www.google.com/recaptcha/api/siteverify?secret=${googleReCaptcha.secret}&response=${RECAPTCHA_TOKEN}`);

        cb(null, SUCCESSFULL_VERIFICATION_RESPONSE);
      });

      // when
      return gRecaptcha.verify(RECAPTCHA_TOKEN);
    });

    describe('Success case', function() {
      it('should return a resolved promise when user response token is valid', function() {
        // given
        const requestPostErrorStub = sinon.stub(request, 'post', function(uri, cb) {
          requestPostErrorStub.restore();
          const err = null;
          cb(err, SUCCESSFULL_VERIFICATION_RESPONSE);
        });

        // when
        const promise = gRecaptcha.verify(RECAPTCHA_TOKEN);
        return expect(promise).to.be.resolved;
      });
    });

    describe('Error cases', function() {

      it('should log an error and return a rejected promise, when user response token is invalid', function() {
        // given
        const loggerStub = sinon.stub(logger, 'error').returns({});
        const requestPostErrorStub = sinon.stub(request, 'post', function(uri, cb) {
          requestPostErrorStub.restore();
          const err = null;
          cb(err, UNSUCCESSFULL_VERIFICATION_RESPONSE);
        });

        // when
        const promise = gRecaptcha.verify(INVALID_OR_UNKNOW_RECAPTCHA);
        expect(promise).to.be.rejectedWith('Invalid reCaptcha token');
        loggerStub.restore();
        return expect(promise).to.be.rejected;
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

});

