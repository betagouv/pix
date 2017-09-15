const jwt = require('jsonwebtoken');

module.exports = {
  extractUserId({ authorization }) {
    const token = authorization && authorization.replace(/Bearer /g, '');
    try {
      return jwt.decode(token).user_id;
    }
    catch (e) {
      return null;
    }

  }
};
