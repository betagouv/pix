export default {
  data: {
    type: 'answer',
    id: 'answer_qcu_id',
    attributes: {
      value: '3'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenge',
          id: 'challenge_qcu_id'
        }
      }
    }
  }
};

