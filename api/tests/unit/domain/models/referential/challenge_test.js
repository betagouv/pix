const Challenge = require('../../../../../lib/domain/models/referential/challenge');

describe('Unit | Model | Challenge', function () {

  describe('#initialize()', function () {

    it(`should convert record "id" into "id" property`, function () {
      // given
      const airtableRecord = { id: 'rec123', fields: {} };

      // when
      const challenge = new Challenge(airtableRecord);

      // then
      expect(challenge.id).to.equal(airtableRecord.id);
    });

    [
      { airtableField: 'Consigne', modelProperty: 'instruction' },
      { airtableField: 'Propositions', modelProperty: 'proposals' },
      { airtableField: 'Type d\'épreuve', modelProperty: 'type' }

    ].forEach(({ airtableField, modelProperty }) => {

      it(`should convert record "${airtableField}" field into "${modelProperty}" property`, function () {
        // given
        fields = [];
        fields[airtableField] = `${modelProperty}_value`;
        const airtableRecord = { fields };

        // when
        const challenge = new Challenge(airtableRecord);

        // then
        expect(challenge[modelProperty]).to.equal(airtableRecord.fields[airtableField]);
      });

    });

    it(`should convert record "Illustration de la consigne" into "illustrationUrl" property`, function () {
      // given
      const airtableRecord = {
        fields: {
          "Illustration de la consigne": [{
            "url": "https://dl.airtable.com/ZJgAgXfaQ7KgM7atPPI1_Symboles%20CC.png",
          }]
        }
      };

      // when
      const challenge = new Challenge(airtableRecord);

      // then
      expect(challenge.illustrationUrl).to.equal(airtableRecord.fields['Illustration de la consigne'][0].url);
    });

    it(`should not return 'attachments' property when challenge has no attachment`, function () {
      // given
      const airtableRecord = { fields: { } };

      // when
      const challenge = new Challenge(airtableRecord);

      // then
      expect(challenge.attachments).to.not.exist;
    });

    it(`should convert record "Pièce jointe" into an array of 1 element when challenge has one attachment`, function () {
      // given
      const attachment = {
        "url": "https://dl.airtable.com/MurPbtCWS9cjyjGmYAMw_PIX_couleur_remplissage.pptx",
        "filename": "PIX_couleur_remplissage.pptx",
      };
      const airtableRecord = { fields: { 'Pièce jointe': [attachment] } };

      // when
      const challenge = new Challenge(airtableRecord);

      // then
      expect(challenge.attachments).to.have.lengthOf(1);
      expect(challenge.attachments[0]).to.equal(attachment.url);
    });

    it(`should convert record "Pièce jointe" into an array of 2 elements when challenge has multiple attachments`, function () {
      // given
      const attachmentDocx = {
        "url": "https://dl.airtable.com/MurPbtCWS9cjyjGmYAMw_PIX_couleur_remplissage.docx",
        "filename": "PIX_couleur_remplissage.docx",
      };
      const attachmentOdt = {
        "url": "https://dl.airtable.com/MurPbtCWS9cjyjGmYAMw_PIX_couleur_remplissage.odt",
        "filename": "PIX_couleur_remplissage.odt",
      };
      const airtableRecord = { fields: { 'Pièce jointe': [attachmentDocx, attachmentOdt] } };

      // when
      const challenge = new Challenge(airtableRecord);

      // then
      expect(challenge.attachments).to.have.lengthOf(2);
      expect(challenge.attachments[0]).to.equal(attachmentDocx.url);
      expect(challenge.attachments[1]).to.equal(attachmentOdt.url);
    });

  });
});
