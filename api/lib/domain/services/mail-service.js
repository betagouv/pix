const mailJet = require('../../infrastructure/mailjet');

const ACCOUNT_CREATION_EMAIL_TEMPLATE_ID = '143620';

function sendAccountCreationEmail (email) {
  return mailJet.sendEmail({ to: email, template: ACCOUNT_CREATION_EMAIL_TEMPLATE_ID });
}

module.exports = {
  sendAccountCreationEmail
};
