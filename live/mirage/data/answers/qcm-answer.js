import qcmChallenge from '../challenges/qcm-challenge';

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
          id: qcmChallenge.data.id
        }
      }
    }
  }
};

