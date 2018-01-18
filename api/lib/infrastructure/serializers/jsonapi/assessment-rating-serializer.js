const { Serializer } = require('jsonapi-serializer');
const AssessmentRating = require('../../../domain/models/AssessmentRating');

module.exports = {

  serialize(assessmentRating) {
    return new Serializer('assessment-rating', {
      attributes: ['estimatedLevel', 'pixScore'],
    }).serialize(assessmentRating);
  },

  deserialize(json) {
    return new AssessmentRating({
      id: json.data.id,
      pixScore: json.data.attributes['pix-score'],
      estimatedLevel: json.data.attributes['estimated-level'],
      assessmentId: json.data.relationships.assessment.data.id
    });
  }

};
