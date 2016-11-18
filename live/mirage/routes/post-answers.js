import _                  from 'lodash/lodash';
import qcmChallenge from '../data/challenges/qcm-challenge';
import qcuChallenge from '../data/challenges/qcu-challenge';
import qrocChallenge from '../data/challenges/qroc-challenge';
import qcuChallengeWithImage from '../data/challenges/qcu-challenge-with-image';
import qrocmChallenge from '../data/challenges/qrocm-challenge';

import refQcmChallengeFull from '../data/challenges/ref-qcm-challenge-full';
import refQcuChallengeFull from '../data/challenges/ref-qcu-challenge-full';
import refQrocChallengeFull from '../data/challenges/ref-qroc-challenge-full';
import refQrocmChallengeFull from '../data/challenges/ref-qrocm-challenge-full';

import qcmAnswer from '../data/answers/qcm-answer';
import qcuAnswer from '../data/answers/qcu-answer';
import qrocAnswer from '../data/answers/qroc-answer';
import qcuAnswerWithImage from '../data/answers/qcu-answer-with-image';
import qrocmAnswer from '../data/answers/qrocm-answer';

import refQcuAnswer          from '../data/answers/ref-qcu-answer';
import refQcmAnswer          from '../data/answers/ref-qcm-answer';
import refQrocAnswer          from '../data/answers/ref-qroc-answer';
import refQrocmAnswer          from '../data/answers/ref-qrocm-answer';


export default function (schema, request) {

const answer = JSON.parse(request.requestBody);
const challengeId = answer.data.relationships.challenge.data.id;  

const allChallenges = [
 qcmChallenge,
 qcuChallenge,
 qrocChallenge,
 qcuChallengeWithImage,
 qrocmChallenge,
 refQcmChallengeFull,
 refQcuChallengeFull,
 refQrocChallengeFull,
 refQrocmChallengeFull
];

const allAnswers = [
 qcmAnswer,
 qcuAnswer,
 qrocAnswer,
 qcuAnswerWithImage,
 qrocmAnswer,
 refQcuAnswer,
 refQcmAnswer,
 refQrocAnswer,
 refQrocmAnswer
];

const answers = _.map(allChallenges, function(oneChallenge, index) {
  return {id: oneChallenge.data.id, obj: allAnswers[index]}
});

const finalAnswer = _.find(answers, {id:challengeId});

if (finalAnswer) {
  return finalAnswer.obj;
} else {
  throw new Error('Unable to POST this answer in the stub, sorry');
}

}
