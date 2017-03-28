const mailjetConfig = require('../settings').mailjet;
const nodeMailjet = require('node-mailjet');
const mailjet = nodeMailjet.connect(mailjetConfig.apiKey, mailjetConfig.apiSecret);
const WELCOME_EMAIL_TEMPLATE_ID = '129291';

function _formatPayload(email) {
  return {
    'FromEmail': 'communaute@pix.beta.gouv.fr',
    'FromName': 'Communauté Pix',
    'Subject': 'Bienvenue dans la communauté Pix',
    'MJ-TemplateID': WELCOME_EMAIL_TEMPLATE_ID,
    'MJ-TemplateLanguage': 'true',
    'Recipients': [{'Email': email}]
  };
}

module.exports = {
  sendWelcomeEmail(receiverEmail){
    return mailjet
      .post('send')
      .request(_formatPayload(receiverEmail));
  }
};

