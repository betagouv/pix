import qcuAnswer from '../data/answers/qcu-answer';
import qcuAnswerWithImage from '../data/answers/qcu-answer-with-image';
import qcmAnswer from '../data/answers/qcm-answer';
import qcmAnswerKo from '../data/answers/qcm-answer-ko';
import qcmAnswerOk from '../data/answers/qcm-answer-ok';
import qrocAnswer from '../data/answers/qroc-answer';
import qrocAnswerKo from '../data/answers/qroc-answer-ko';
import qrocAnswerOk from '../data/answers/qroc-answer-ok';
import qrocmAnswer from '../data/answers/qrocm-answer';

export default function (schema, request) {

  const answers = {
    'answer_qcm_id': qcmAnswer,
    'answer_qcu_with_image_id': qcuAnswerWithImage,
    'answer_qcu_id': qcuAnswer,
    'answer_qroc_id': qrocAnswer,
    'answer_qroc_ok_id': qrocAnswerOk,
    'answer_qroc_ko_id': qrocAnswerKo,
    'answer_qrocm_id': qrocmAnswer,
    'answer_qcm_ko_id': qcmAnswerKo,
    'answer_qcm_ok_id': qcmAnswerOk
  };

  const answer = answers[request.params.id];

  if (answer) {
    return answer;
  } else {
    throw new Error('The answer you required in the fake server does not exist');
  }


}
