// import _ from 'lodash/lodash';
// import rawQcmChallenge from '../data/challenges/raw-qcm-challenge';
// import refQcmChallengeFull from '../data/challenges/ref-qcm-challenge';
import refQcuChallengeFull from '../data/challenges/ref-qcu-challenge';
import refQrocChallengeFull from '../data/challenges/ref-qroc-challenge';
import refQrocmChallengeFull from '../data/challenges/ref-qrocm-challenge';

export default function (schema, request) {

  const nextChallenge = {
    'raw_qcm_challenge_id': null,
    'ref_qcm_challenge_id': refQcuChallengeFull,
    'ref_qcu_challenge_id': refQrocChallengeFull,
    'ref_qroc_challenge_id': refQrocmChallengeFull,
    'ref_qrocm_challenge_id': null
  };

  if(!nextChallenge.hasOwnProperty(request.params.challengeId)) {
    throw new Error('This requested challenge is unknown : ' + request.params.challengeId);
  }

  const challenge = nextChallenge[request.params.challengeId];

  return challenge;

}
