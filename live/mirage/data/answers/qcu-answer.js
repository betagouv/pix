import qcuChallenge from '../challenges/qcu-challenge';

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

