const {describe, it, expect, sinon} = require('../../../test-helper');
const gRecaptcha = require('../../../../lib/infrastructure/validators/grecaptcha-validator');
const request = require('request');
const logger = require('../../../../lib/infrastructure/logger');

const INVALID_OR_UNKNOW_RECAPTCHA = 'INVALID_RECAPTCHA';
const RECAPTCHA_TOKEN = 'a-valid-recaptch-token-should-be-a-string-of-512-numalpha-characters';

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
        expect(uri).to.equal(`https://www.google.com/recaptcha/api/siteverify?secret=test-recaptcha-key&response=${RECAPTCHA_TOKEN}`);

        cb(null, {'body': '{\n  "success": true,\n  "challenge_ts": "2017-05-31T12:58:56Z",\n  "hostname": "",\n  "error-codes": [\n    "timeout-or-duplicate"\n  ]\n}'});
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
          const response = {statusCode: 200};
          const body = {
            'success': true
          };

          cb(err, response, body);
        });

        // when
        const promise = gRecaptcha.verify(RECAPTCHA_TOKEN);
        return expect(promise).to.be.resolved;
      });
    });

    describe('Error cases', function() {

      it('should return a rejected promise when user response token is invalid', function() {
        // given
        const loggerStub = sinon.stub(logger, 'error').returns({});
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

