import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import OriginalCourse from 'pix-live/models/course';
import CourseSerializer from 'pix-live/serializers/course';

describeModel(
  'course',
  'Unit | Serializer | Course',
  {
    needs: ['model:challenge']
  },
  function () {

    const serializer = new CourseSerializer();
    const Course = OriginalCourse.extend({}); // copy the class to avoid side effects
    Course.modelName = 'course';

    function normalizePayload(payload) {
      serializer.normalizeResponse(null, Course, payload, payload.id, null);
      return payload;
    }

    it('normalizes correctly', function () {

      const payload = {
        id: 'rec5duNNrPqbSzQ8o',
        name: "A la recherche de l'information #01",
        description: "Mener une recherche et une veille d'information",
        duration: 13,
        imageUrl: "https://dl.airtable.com/x5gtLtMTpyJBg9dJov82_keyboard-824317_960_720.jpg"
/*
        challenges: [
          "recphb0Gowk6hcXdp",
          "recB9k5U9GUCSVTuP",
          "rectN26toxkJmt9S4",
          "recj0g7zZF5LTxij5",
          "recFxCIKMhdRF6C0d",
          "recT0Ks2EDgoDgEKc",
          "recwWzTquPlvIl4So",
          "recUcM3s9DFvpnFqj",
          "recge9Mkog1drln4i",
          "recdTpx4c0kPPDTtf"
        ]
*/
      };

      const expected = {
        id: payload.id,
        name: payload.name,
        description: payload.description,
        duration: payload.duration,
        imageUrl: payload.imageUrl
      };
      const course = normalizePayload(payload);

      expect(course).to.be.deep.equal(expected);
    });
  }
);
