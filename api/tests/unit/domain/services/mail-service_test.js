const { describe, it, beforeEach, afterEach, sinon } = require('../../../test-helper');

const mailJet = require('../../../../lib/infrastructure/mailjet');
const mailService = require('../../../../lib/domain/services/mail-service');

describe('Unit | Service | MailService', function () {

  describe('#sendAccountCreationEmail', () => {

    let sendEmailStub;

    beforeEach(() => {
      sendEmailStub = sinon.stub(mailJet, "sendEmail").resolves()
    });

    afterEach(() => {
      sendEmailStub.restore();
    });

    it('should user mailJet to send an email', () => {
      // Given
      const email = 'text@example.net';


      // When
      const promise = mailService.sendAccountCreationEmail(email);

      // Then
      return promise.then(() => {
        sinon.assert.calledWith(sendEmailStub, {
          to: email,
          template: '143620',
          from: 'ne-pas-repondre@pix.beta.gouv.fr',
          fromName: 'PIX - Ne pas répondre',
          subject: 'Création de votre compte PIX'
        });
      });
    });
  });

  /*const mjSuccessfullData = {
   response: {
   statusCode: 200
   }
   };

   const mjUnsuccessfullData = {
   response: {
   statusCode: 400
   }
   };

   describe('#sendWelcomeEmail', function () {
   it('should return an object data and be ok when receiver email is provided', function (done) {
   //Given
   sinon.stub(Mailjet, 'sendWelcomeEmail', _ => mjSuccessfullData);

   // When
   const result = Mailjet.sendWelcomeEmail('flo@pix.com');

   //Then
   expect(result).to.be.an('object');
   expect(result.response.statusCode).to.be.ok;
   Mailjet.sendWelcomeEmail.restore();
   done();
   });

   it('should be nok when bad request', function (done) {
   // Given
   sinon.stub(Mailjet, 'sendWelcomeEmail', _ => mjUnsuccessfullData);

   // When
   const result = Mailjet.sendWelcomeEmail('');

   // Then
   expect(result).to.be.an('object');
   expect(result.response.statusCode).to.be.falsy;
   Mailjet.sendWelcomeEmail.restore();
   done();
   });
   });

   describe('#sendAccountCreationEmail', () => {
   it('should', () => {

   const mailJetMock = sinon.mock(nodeMailjet);

   // Given
   //sinon.stub(Mailjet, 'sendWelcomeEmail', _ => mjSuccessfullData);

   // When
   const result = Mailjet.sendWelcomeEmail('people@pix.com');

   // Then
   return result.then(() => {

   });
   });
   });*/
});
