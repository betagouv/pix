import rawQcmChallenge     from '../data/challenges/raw-qcm-challenge';
import refQcmChallengeFull from '../data/challenges/ref-qcm-challenge-full';
import refQcuChallengeFull from '../data/challenges/ref-qcu-challenge-full';
import refQrocChallengeFull from '../data/challenges/ref-qroc-challenge-full';
import refQrocmChallengeFull from '../data/challenges/ref-qrocm-challenge-full';

export default function () {

  return {
    data: [
      rawQcmChallenge,
      refQcmChallengeFull.data,
      refQcuChallengeFull.data,
      refQrocChallengeFull.data,
      refQrocmChallengeFull.data
    ]
  }

}
