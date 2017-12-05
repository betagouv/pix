const { Serializer } = require('jsonapi-serializer');
const Answer = require('../../../domain/models/data/answer');

module.exports = {

  serialize(snapshots) {
    return new Serializer('answer', {
      attributes: ['value', 'timeout', 'elapsedTime', 'result', 'resultDetails', 'assessment', 'challenge'],
      assessment: {
        ref: 'id',
        includes: false
      },
      challenge: {
        ref: 'id',
        includes: false
      },
      transform: (snapshot) => {
        const answer = Object.assign({}, snapshot.toJSON());
        answer.assessment = { id: snapshot.get('assessmentId') };
        answer.challenge = { id: snapshot.get('challengeId') };
        return answer;
      }
    }).serialize(snapshots);
  },

  deserialize(json) {
    const answer = new Answer({
      value: json.data.attributes.value,
      result: json.data.attributes.result,
      resultDetails: json.data.attributes['result-details'],
      timeout: json.data.attributes.timeout,
      elapsedTime: json.data.attributes['elapsed-time'],
      assessmentId: json.data.relationships.assessment.data.id,
      challengeId: json.data.relationships.challenge.data.id
    });

    if (json.data.id) {
      answer.set('id', json.data.id);
    }

    return answer;
  }

};
