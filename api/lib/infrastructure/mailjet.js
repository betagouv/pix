const mailjetConfig = require('../settings').mailjet;
const nodeMailjet = require('node-mailjet');

const WELCOME_EMAIL_TEMPLATE_ID = '129291';

function _formatPayload(email, template) {
  return {
    'FromEmail': 'communaute@pix.beta.gouv.fr',
    'FromName': 'Communauté Pix',
    'Subject': 'Bienvenue dans la communauté Pix',
    'MJ-TemplateID': template,
    'MJ-TemplateLanguage': 'true',
    'Recipients': [{'Email': email}]
  };
}

module.exports = {
  sendWelcomeEmail(receiverEmail){
    return sendEmail(receiverEmail, WELCOME_EMAIL_TEMPLATE_ID)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  },

  sendEmail(receiverEmail, template){
    const mailjet = nodeMailjet.connect(mailjetConfig.apiKey, mailjetConfig.apiSecret);

    return mailjet.post('send').request(_formatPayload(receiverEmail, template));
  }
};

