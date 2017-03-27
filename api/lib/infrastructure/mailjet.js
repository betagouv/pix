const mailjetConfig = require('../settings').mailjet;
const Mailjet = require('node-mailjet').connect(mailjetConfig.apiKey, mailjetConfig.apiSecret);
const welcomeEmailTemplateId = '129291';

function _formatPayload(email) {
  return {
    'FromEmail': 'communaute@pix.beta.gouv.fr',
    'FromName': 'communauté pix',
    'Subject': 'Bienvenue dans la communauté Pix',
    'MJ-TemplateID': welcomeEmailTemplateId,
    'MJ-TemplateLanguage': 'true',
    'Recipients': [{'Email': email}]
  };
}

module.exports = {
  sendWelcomeEmail(receiverEmail){
    return Mailjet
      .post('send')
      .request(_formatPayload(receiverEmail))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }
};

