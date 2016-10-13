const Challenge = require('../../../app/models/challenge');

describe('Model | Challenge', function () {

  describe('#toJSON', function () {

    it(`should convert record "id" into "id" property`, function () {
      // given
      const airtableRecord = { id: 'rec123', fields: {} };
      const challenge = new Challenge(airtableRecord);

      // when
      const json = challenge.toJSON();

      // then
      expect(json.id).to.equal(airtableRecord.id);
    });

    [
      { airtableField: 'Consigne', airtableValue: 'challenge_instruction', modelProperty: 'instruction' },
      { airtableField: 'Propositions', airtableValue: 'challenge_proposals', modelProperty: 'proposals' },
      { airtableField: "Type d'épreuve", airtableValue: 'challenge_type', modelProperty: 'type' }

    ].forEach(({ airtableField, airtableValue, modelProperty }) => {

      it(`should convert record "${airtableField}" field into "${modelProperty}" property`, function () {
        // given
        fields = [];
        fields[airtableField] = airtableValue;
        const airtableRecord = { fields };
        const challenge = new Challenge(airtableRecord);

        // when
        const json = challenge.toJSON();

        // then
        expect(json[modelProperty]).to.equal(airtableRecord.fields[airtableField]);
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
      const challenge = new Challenge(airtableRecord);

      // when
      const json = challenge.toJSON();

      // then
      expect(json.illustrationUrl).to.equal(airtableRecord.fields['Illustration de la consigne'][0].url);
    });

    it(`should convert record "Pièce jointe" into "attachmentUrl" and "attachmentFilename" properties`, function () {
      // given
      const airtableRecord = {
        fields: {
          "Pièce jointe": [{
            "url": "https://dl.airtable.com/MurPbtCWS9cjyjGmYAMw_PIX_couleur_remplissage.pptx",
            "filename": "PIX_couleur_remplissage.pptx",
          }]
        }
      };
      const challenge = new Challenge(airtableRecord);

      // when
      const json = challenge.toJSON();

      // then
      expect(json.attachmentUrl).to.equal(airtableRecord.fields['Pièce jointe'][0].url);
      expect(json.attachmentFilename).to.equal(airtableRecord.fields['Pièce jointe'][0].filename);
    });

  });
});
