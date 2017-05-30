const request = require('request');
const config = require('../../settings');
const logger = require('../logger');
const error = require('./errors');

module.exports = {

  verify(responseToken) {
    return new Promise((resolve, reject) => {
      request.post(`https://www.google.com/recaptcha/api/siteverify?secret=${config.googleReCaptcha.secret}&response=${responseToken}`, (err, response, body) => {
        if(err) {
          logger.error(err);
          return reject('An error occurred during connection to the Google servers');
        }

        if(!body || !body.success) {
          const recaptchaError = new error.InvalidRecaptchaTokenError('Invalid reCaptcha token');
          reject(recaptchaError);
        }

        resolve();
      });
    });
  }
};

