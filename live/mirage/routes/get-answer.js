import qcuAnswer from '../data/answers/qcu-answer';
import qcmAnswer from '../data/answers/qcm-answer';
import qrocmAnswer from '../data/answers/qrocm-answer';

export default function (schema, request) {

  switch (request.params.id) {

    case 'answer_qrocm_id':
      return qrocmAnswer;
    case 'answer_qcm_id':
      return qcmAnswer;
    case 'answer_qcu_id':
    default:
      return qcuAnswer;
  }

}
