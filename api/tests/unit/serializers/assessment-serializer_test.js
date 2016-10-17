const serializer = require('../../../app/serializers/assessment-serializer');
const Assessment = require('../../../app/models/data/assessment');

describe('Serializer | AssessmentSerializer', function () {

  describe('#deserialize()', function () {

    it('should convert JSON API data into an Assessment model object', function () {
      const json = {
        data: {
          type: "assessment",
          id: 12345,
          attributes: {
            userId: 1,
            userName: 'Jon Snow',
            userEmail: 'jsnow@winterfell.got'
          },
          relationships: {
            course: {
              type: 'course',
              id: 'testedCourseId'
            }
          }
        }
      };

      // when
      const assessment = serializer.deserialize(json);

      // then
      expect(assessment.get('id')).to.equal(json.data.id);
      expect(assessment.get('courseId')).to.equal(json.data.relationships.course.id);
      expect(assessment.get('userId')).to.equal(json.data.attributes.userId);
      expect(assessment.get('userName')).to.equal(json.data.attributes.userName);
      expect(assessment.get('userEmail')).to.equal(json.data.attributes.userEmail);
    });

  });

});
