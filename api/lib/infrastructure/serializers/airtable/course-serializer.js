const _ = include('lib/utils/lodash-utils');
const Course = require('../../../domain/models/referential/course');

class CourseSerializer {

  deserialize(airtableRecord) {
    const course = new Course();

    course.id = airtableRecord.id;

    if (airtableRecord.fields) {

      const fields = airtableRecord.fields;

      this.name = fields['Nom'];
      this.description = fields['Description'];
      this.duration = fields['Durée'];
      this.isAdaptive = fields['Adaptatif ?'];

      if (fields['Image'] && fields['Image'].length > 0) {
        this.imageUrl = fields['Image'][0].url;
      }

      // See https://github.com/Airtable/airtable.js/issues/17
      const debuggedFieldsEpreuves = fields['Épreuves'];
      if (_.isArray(debuggedFieldsEpreuves)) {
        _.reverse(debuggedFieldsEpreuves);
      }
      this.challenges = debuggedFieldsEpreuves;
    }

    return course;
  }
}
module.exports = new CourseSerializer();
