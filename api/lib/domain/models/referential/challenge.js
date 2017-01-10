const AirtableModel = require('./airtable-model');

class Challenge extends AirtableModel {

  initialize() {

    super.initialize();

    if (this.record.fields) {

      const fields = this.record.fields;
      this.instruction = fields['Consigne'];
      this.proposals = fields['Propositions'];
      this.type = fields['Type d\'épreuve'];

      if (fields['Illustration de la consigne']) {
        this.illustrationUrl = fields['Illustration de la consigne'][0].url;
      }

      if (fields['Pièce jointe']) {
        this.attachments = fields['Pièce jointe'].map(attachment => attachment.url);
      }
    }
  }

}

module.exports = Challenge;
