const { describe, it, expect } = require('../../../../test-helper');
const serializer = require('../../../../../lib/infrastructure/serializers/jsonapi/feedback-serializer');

describe('Unit | Serializer | JSONAPI | feedback-serializer', function() {

  describe('#serialize()', function() {

    it('should convert a Feedback model object into JSON API data', function() {
      // given
      const feedback = {
        id: 'feedback_id',
        email: 'shi@fu.me',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscet.',
        assessmentId: 'assessment_id',
        challengeId: 'challenge_id',
        createdAt: '2017-09-01 12:14:33'
      };

      const serializedFeedback = {
        data: {
          type: 'feedbacks',
          id: 'feedback_id',
          attributes: {
            email: feedback.email,
            content: feedback.content,
            'created-at': feedback.createdAt
          },
          relationships: {
            assessment: {
              data: {
                id: 'assessment_id',
                type: 'assessments'
              }
            },
            challenge: {
              data: {
                id: 'challenge_id',
                type: 'challenges'
              }
            }
          }

        }
      };

      // when
      const response = serializer.serialize(feedback);

      // then
      expect(response).to.deep.equal(serializedFeedback);
    });

  });

  describe('#deserialize()', function() {

    it('should convert JSON API data into a Feedback model object', function() {
      // given
      const serializedFeedback = {
        data: {
          type: 'feedbacks',
          id: 'feedback_id',
          attributes: {
            email: 'tic-et-tac@pix.com',
            content: 'Bienvenue chez Pix !',
          },
          relationships: {
            assessment: {
              data: {
                type: 'assessments',
                id: 'assessment_id'
              }
            },
            challenge: {
              data: {
                type: 'challenges',
                id: 'challenge_id'
              }
            }
          }
        }
      };

      // when
      const feedback = serializer.deserialize(serializedFeedback);

      // then
      expect(feedback.id).to.equal(serializedFeedback.data.id);
      expect(feedback.get('assessmentId')).to.equal(serializedFeedback.data.relationships.assessment.data.id);
      expect(feedback.get('challengeId')).to.equal(serializedFeedback.data.relationships.challenge.data.id);
      expect(feedback.get('email')).to.equal(serializedFeedback.data.attributes.email);
      expect(feedback.get('content')).to.equal(serializedFeedback.data.attributes.content);
    });

  });

});
