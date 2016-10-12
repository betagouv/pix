const AirtableModel = require('./airtable-model');

class Course extends AirtableModel {

  toJSON() {
    let imageUrl;
    if (this.record.fields['Image'] && this.record.fields['Image'].length > 0) {
      imageUrl = this.record.fields['Image'][0].url;
    }

    return {
      id: this.record.id,
      name: this.record.fields['Nom'],
      description: this.record.fields['Description'],
      duration: this.record.fields['Durée'],
      challenges: this.record.fields['Épreuves'],
      imageUrl
    };
  }

}

module.exports = Course;
