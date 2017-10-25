import refQcmChallengeFull from '../data/challenges/ref-qcm-challenge';
import refQcuChallengeFull from '../data/challenges/ref-qcu-challenge';
import refQrocChallengeFull from '../data/challenges/ref-qroc-challenge';
import refQrocmChallengeFull from '../data/challenges/ref-qrocm-challenge';

import refTimedChallengeBis from '../data/challenges/ref-timed-challenge-bis';

export default function(schema, request) {

  const assessmentId = request.params.assessmentId;
  const currentChallengeId = request.params.challengeId;

  // case 1 : we're trying to reach the first challenge for a given assessment
  if (!currentChallengeId) {
    if (assessmentId === 'ref_assessment_id') {
      return refQcmChallengeFull;
    } else {
      // get assessment
      const assessment = schema.assessments.find(assessmentId);
      if (!assessment) {
        throw new Error(`This assessment is not defined ${assessmentId}`);
      }
      return assessment.course.challenges.models[0];
    }
  }

  // case 2 : test already started, challenge exists.
  const nextChallenge = {

    // ref_course
    'ref_qcm_challenge_id': refQcuChallengeFull,
    'ref_qcu_challenge_id': refQrocChallengeFull,
    'ref_qroc_challenge_id': refQrocmChallengeFull,
    'ref_qrocm_challenge_id': 'null',

    'ref_timed_challenge_id': refTimedChallengeBis,
    'ref_timed_challenge_bis_id': 'null'

  };

  const challenge = nextChallenge[currentChallengeId];

  if (challenge) {
    return challenge;
  } else {
    const assessment = schema.assessments.find(assessmentId);
    const course = assessment.course;
    const challenges = course.challenges.models;

    const nextChallengeIndex = challenges.findIndex((challenge) => challenge.id === currentChallengeId) + 1;
    if (nextChallengeIndex >= challenges.length) {
      return null;
    }
    return challenges[nextChallengeIndex];
  }

}
