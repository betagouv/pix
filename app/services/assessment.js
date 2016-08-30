import Ember from 'ember';

export default Ember.Service.extend({

  getNextChallenge(currentChallenge, assessment) {

    const challenges = assessment.get('course.challenges');
    if (challenges.get('lastObject.id') === currentChallenge.get('id')) {
      return null;
    }
    return challenges.objectAt(challenges.indexOf(currentChallenge) + 1);
  }

});
