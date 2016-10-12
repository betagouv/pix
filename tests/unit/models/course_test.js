const Course = require('../../../app/models/course');

describe('Model | Course', function () {

  describe('#toJSON', function () {

    it(`should convert record "id" into "id" property`, function () {
      // given
      const airtableRecord = { id: 'rec123', fields: {} };
      const course = new Course(airtableRecord);

      // when
      const json = course.toJSON();

      // then
      expect(json.id).to.equal(airtableRecord.id);
    });

    [
      { airtableField: 'Nom', airtableValue: 'course_name', modelProperty: 'name' },
      { airtableField: 'Description', airtableValue: 'course_description', modelProperty: 'description' },
      { airtableField: 'Durée', airtableValue: 'course_duration', modelProperty: 'duration' },
      { airtableField: 'Épreuves', airtableValue: ['ch1', 'ch2', 'ch3'], modelProperty: 'challenges' }

    ].forEach(({ airtableField, airtableValue, modelProperty }) => {

      it(`should convert record "${airtableField}" field into "${modelProperty}" property`, function () {
        // given
        fields = [];
        fields[airtableField] = airtableValue;
        const airtableRecord = { fields };
        const course = new Course(airtableRecord);

        // when
        const json = course.toJSON();

        // then
        expect(json[modelProperty]).to.equal(airtableRecord.fields[airtableField]);
      });

    });

    it(`should convert record "Image" into "imageUrl" property`, function () {
      // given
      const airtableRecord = {
        fields: {
          "Image": [{
            "url": "https://dl.airtable.com/qiFgajPJQoCJh7cN3251_keyboard-171845_1920.jpg",
          }]
        }
      };
      const course = new Course(airtableRecord);

      // when
      const json = course.toJSON();

      // then
      expect(json.imageUrl).to.equal(airtableRecord.fields['Image'][0].url);
    });

  });
});
