import challenge from '../challenges/ref-qcm-challenge';

export default {
  data: {
    type: 'answers',
    id: 'ref_answer_qcm_id',
    attributes: {
      value: '2,4',
      result: 'ko'
    },
    relationships: {
      challenge: {
        data: {
          type: 'challenges',
          id: challenge.data.id
        }
      },
      assessment: {
        data: {
          type: 'assessments',
          id: 'ref_assessment_id'
        }
      }
    }
  }
};

