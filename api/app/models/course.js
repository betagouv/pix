const AirtableModel = require('./airtable-model');

class Course extends AirtableModel {

  toJSON() {

    const fields = this.record.fields;

    const result = {
      id: this.record.id,
      name: fields['Nom'],
      description: fields['Description'],
      duration: fields['Durée'],
      challenges: fields['Épreuves'],
    };

    if (fields['Image'] && fields['Image'].length > 0) {
      result.imageUrl = fields['Image'][0].url;
    }

    return result;
  }

}

module.exports = Course;
