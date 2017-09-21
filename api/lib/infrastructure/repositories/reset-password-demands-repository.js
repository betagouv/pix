const ResetPasswordDemand = require('../../../lib/domain/models/data/reset-password-demand');

module.exports = {
  create(demand) {
    return new ResetPasswordDemand(demand).save();
  },

  markAsBeingUsed(email) {
    return new ResetPasswordDemand({ email }).save({ used: true }, { patch: true });
  }
};
