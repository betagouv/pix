const oldJSONAPISerializer = require('./jsonapi-serializer');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const Feedback = require('../../../domain/models/data/feedback');

class FeedbackSerializer extends oldJSONAPISerializer {

  serialize(feedback) {
    return new JSONAPISerializer('feedbacks', {
      attributes: ['createdAt', 'email', 'content', 'assessment', 'challenge'],
      assessment: { ref: 'id' },
      challenge: { ref: 'id' },
      transform(feedback) {
        feedback.id = feedback.id.toString();
        feedback.assessment = { id: feedback.assessmentId };
        feedback.challenge = { id: feedback.challengeId };
        return feedback;
      }
    }).serialize(feedback);
  }

  deserialize(json) {
    const feedback = new Feedback({
      content: json.data.attributes.content,
      assessmentId: json.data.relationships.assessment.data.id,
      challengeId: json.data.relationships.challenge.data.id
    });

    if (json.data.id) {
      feedback.set('id', json.data.id);
    }
    if (json.data.attributes.email) {
      feedback.set('email', json.data.attributes.email);
    }

    return feedback;
  }

}

module.exports = new FeedbackSerializer();
