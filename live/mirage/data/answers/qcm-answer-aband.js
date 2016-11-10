import qcmChallenge from '../challenges/qcm-challenge';

export default {
  data: {
    type: 'answers',
    id: 'answer_qcm_aband_id',
    attributes: {
      value: '',
      result: 'aband'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenges',
          id: qcmChallenge.data.id
        }
      }
    }
  }
};
