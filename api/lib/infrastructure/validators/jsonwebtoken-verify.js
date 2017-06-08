const jsonwebtoken = require('jsonwebtoken');
const settings = require('../../../lib/settings');

module.exports = {
  verify(token){
    return new Promise((resolve, reject) => {
      jsonwebtoken.verify(token, settings.authentification.secret, function(err, decoded) {
        if(err) {
          return reject(false);
        }
        const id = decoded.user_id;
        resolve(id);
      });
    });
  }
};
