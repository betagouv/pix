const mailJet = require('../../infrastructure/mailjet');

const ACCOUNT_CREATION_EMAIL_TEMPLATE_ID = '143620';

function sendAccountCreationEmail(email) {
  return mailJet.sendEmail({
    to: email,
    template: ACCOUNT_CREATION_EMAIL_TEMPLATE_ID,
    from: 'ne-pas-repondre@pix.beta.gouv.fr',
    fromName: 'PIX - Ne pas répondre',
    subject: 'Création de votre compte PIX'
  });
}

module.exports = {
  sendAccountCreationEmail
};
