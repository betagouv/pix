import qrocmChallenge from '../challenges/qrocm-challenge';

export default {
  data: {
    type: 'answer',
    id: 'answer_qrocm_id',
    attributes: {
      value: 'logiciel 1 = "LOTUS", logiciel 2 = "FIREFOX", logiciel 3 = "GOOGLE"'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenge',
          id: qrocmChallenge.data.id
        }
      }
    }
  }
};

