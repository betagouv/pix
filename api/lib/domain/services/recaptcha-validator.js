const request = require('request');
const googleReCaptcha = require('../../settings').googleReCaptcha;
module.exports = {

  verify(response) {

    if(!response || response.trim().length < 1) {
      return false;
    }

    return request.post('https://www.google.com/recaptcha/api/siteverify', {
      secret: googleReCaptcha.secret,
      response: response
    });
  }
};
