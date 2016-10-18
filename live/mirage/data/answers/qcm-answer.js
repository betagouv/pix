export default {
  data: {
    type: 'answer',
    id: 'answer_qcm_id',
    attributes: {
      value: '1,2,5'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenge',
          id: 'challenge_qcm_id'
        }
      }
    }
  }
};

