import BaseRoute from 'pix-live/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    const assessmentId = params.assessment_id;
    return this.get('store').findRecord('assessment', assessmentId);
  },

  afterModel(assessment) {

    let courseChallenges;
    let lastAnswerChallenge;

    assessment.get('course')
      .then(course => course.get('challenges'))
      .then(challenges => courseChallenges = challenges)
      .then(() => assessment.get('answers'))
      .then(answers => answers.get('lastObject'))
      .then(lastAnswer => lastAnswer.get('challenge'))
      .then(fetchedChallenge => lastAnswerChallenge = fetchedChallenge)
      .then(() => {
        const nextChallengeIndex = courseChallenges.indexOf(lastAnswerChallenge) + 1;
        if (nextChallengeIndex >= courseChallenges.length) {
          this.transitionTo('assessments.get-results', assessment.get('id'));
        }
        const nextChallenge = courseChallenges.objectAt(nextChallengeIndex);
        this.transitionTo('assessments.get-challenge', assessment.get('id'), nextChallenge.get('id'));
      });
  },

  actions: {
    error() {
      this.transitionTo('index');
    }
  }
});
