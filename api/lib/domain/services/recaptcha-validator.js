const request = require('request');
const googleReCaptcha = require('../../settings').googleReCaptcha;

module.exports = {

  isNullOrEmptyResponse: function(response) {
    return !response || response.trim().length < 1;
  },

  getGoogleVerification: function(response) {
    return request.post({
      url: 'https://www.google.com/recaptcha/api/siteverify',
      form: {
        secret: googleReCaptcha.secret,
        response: response
      }
    }, function(err, httpResponse) {
      if(err) {
        return err;
      }
      return httpResponse;
    });

  },

  verify(response) {
    if(this.isNullOrEmptyResponse(response)) {
      return false;
    }
    return this.getGoogleVerification(response);
  }
};
