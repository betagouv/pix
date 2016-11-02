import qcuAnswer from '../data/answers/qcu-answer';
import qcuAnswerWithImage from '../data/answers/qcu-answer-with-image';
import qcmAnswer from '../data/answers/qcm-answer';
import qrocmAnswer from '../data/answers/qrocm-answer';
import qcmAnswerKo from '../data/answers/qcm-answer-ko';
import qcmAnswerOk from '../data/answers/qcm-answer-ok';

export default function (schema, request) {

  switch (request.params.id) {

    case qcmAnswer.data.id:
      return qcmAnswer;
    case qcuAnswerWithImage.data.id:
      return qcuAnswerWithImage;
    case qcuAnswer.data.id:
      return qcuAnswer;
    case qrocmAnswer.data.id:
      return qrocmAnswer;
    case qcmAnswerKo.data.id:
      return qcmAnswerKo;
    case qcmAnswerOk.data.id:
      return qcmAnswerOk;
    default:
      throw new Error('The answer you required in the fake server does not exists');
  }

}
