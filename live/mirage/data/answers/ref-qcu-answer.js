import challenge from '../challenges/ref-qcu-challenge-full';

export default {
  data: {
    type: 'answers',
    id: 'ref_answer_qcu_id',
    attributes: {
      value: '1,2,5',
      result: 'ko'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenges',
          id: challenge.data.id
        }
      }
    }
  }
};

