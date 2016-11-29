import challenge from '../challenges/ref-qroc-challenge';

export default {
  data: {
    type: 'answers',
    id: 'ref_answer_qroc_id',
    attributes: {
      value: '1,2,5',
      result: 'pending'
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

