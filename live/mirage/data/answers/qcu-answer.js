import qcuChallenge from '../challenges/challenge-qcu';

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
          id: qcuChallenge.data.id
        }
      }
    }
  }
};

