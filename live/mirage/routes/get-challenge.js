import _                                  from 'lodash/lodash';

import refQcmChallengeFull from '../data/challenges/ref-qcm-challenge-full';
import refQcuChallengeFull from '../data/challenges/ref-qcu-challenge-full';
import refQrocChallengeFull from '../data/challenges/ref-qroc-challenge-full';
import refQrocmChallengeFull from '../data/challenges/ref-qrocm-challenge-full';

export default function (schema, request) {

  const allChallenges = [
    refQcmChallengeFull,
    refQcuChallengeFull,
    refQrocChallengeFull,
    refQrocmChallengeFull
  ];

  const challenges = _.map(allChallenges, function (oneChallenge) {
    return { id: oneChallenge.data.id, obj: oneChallenge }
  });

  const challenge = _.find(challenges, { id: request.params.id });

  if (challenge) {
    return challenge.obj;
  } else {
    throw new Error('The challenge you required in the fake server does not exist ' + request.params.id);
  }

}
