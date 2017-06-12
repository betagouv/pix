const jsonwebtoken = require('jsonwebtoken');
const settings = require('../../../lib/settings');

function _extractTokenFromAuthChain(authChain) {
  const bearerIndex = authChain.indexOf('Bearer ');
  if(bearerIndex < 0) {
    return false;
  }
  return authChain.replace(/Bearer /g, '');
}

module.exports = {
  verify(authChain) {
    const token = (authChain) ? _extractTokenFromAuthChain(authChain) : '';
    return new Promise((resolve, reject) => {
      if(!token) {
        return reject(false);
      }
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
