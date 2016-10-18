import qcuChallengeWithImage from '../data/challenges/qcu-challenge-with-image';
import qcuChallengeWithAttachment from '../data/challenges/qcu-challenge-with-attachment';
import qcuChallenge from '../data/challenges/qcu-challenge';
import qcmChallenge from '../data/challenges/qcm-challenge';
import qrocmChallenge from '../data/challenges/qrocm-challenge';

export default function (schema, request) {

  switch (request.params.id) {

    case 'challenge_qrocm_id':
      return qrocmChallenge;
    case 'challenge_qcm_id':
      return qcmChallenge;    
    case 'qcu_challenge_with_image_id':
      return qcuChallengeWithImage;
    case 'qcu_challenge_with_attachment_id':
      return qcuChallengeWithAttachment;
    case 'challenge_qcu_id':
    default:
      return qcuChallenge;
  }
}
