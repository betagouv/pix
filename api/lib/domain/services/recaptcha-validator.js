const request = require('request');
module.exports = {

  verify(response) {
    if(!response || response.trim().length < 1) {
      return false;
    }
    return request.post('https://www.google.com/recaptcha/api/siteverify', {
      form: {
        secret: 'test-recaptcha-key',
        response: response
      }
    });
  }
};
