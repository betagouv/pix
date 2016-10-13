const AirtableModel = require('./airtable-model');

class Challenge extends AirtableModel {

  toJSON() {

    const fields = this.record.fields;

    const result = {
      id: this.record.id,
      instruction: fields['Consigne'],
      proposals: fields['Propositions'],
      type: fields["Type d'épreuve"],
    };

    if (fields['Illustration de la consigne']) {
      result.illustrationUrl = fields['Illustration de la consigne'][0].url;
    }

    if (fields['Pièce jointe']) {
      const { url, filename } = fields['Pièce jointe'][0];
      result.attachmentUrl = url;
      result.attachmentFilename = filename;
    }

    return result;
  }

}

module.exports = Challenge;
