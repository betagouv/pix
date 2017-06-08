const jsonwebtoken = require('jsonwebtoken');
const settings = require('../../../lib/settings');

module.exports = {
  verify(token){
    return new Promise((resolve, reject) => {
      jsonwebtoken.verify(token, settings.authentification.secret, function(err, decoded) {
        if(err) {
          reject(false);
        }
      });
    });
  }
};
