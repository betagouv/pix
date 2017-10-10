const ResetPasswordDemand = require('../../../lib/domain/models/data/reset-password-demand');

module.exports = {
  create(demand) {
    return new ResetPasswordDemand(demand).save();
  },

  markAsBeingUsed(email) {
    return ResetPasswordDemand.where({ email }).save({ used: true }, {
      patch: true,
      require: false
    });
  },
  
  findByTemporaryKey(temporaryKey) {
    return ResetPasswordDemand.where({ temporaryKey, used: false })
      .fetch()
      .then(resetDemand => {
        if (!resetDemand) {
          return false;
        }
        return resetDemand;
      });
  },

  findByUserEmail(email) {
    return ResetPasswordDemand.where({ email: email }).fetch({ require: true });
  }
};
