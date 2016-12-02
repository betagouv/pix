const assessmentService = require('../../../app/services/assessment');

describe('assessmentService', function() {

  describe('#getNextChallenge()', function() {

    function instantiateModels(challengesArray) {
      const course = {'challenges': challengesArray};
      const assessment = {'course': course};
      challenges = challengesArray;

      return { challenges, assessment };
    }

    it('should return the next challenge if the current one is not the last one', function() {

      const { challenges, assessment } = instantiateModels([7, 3, 5]);
      expect(assessmentService.getNextChallenge(challenges[0], assessment)).to.equal(challenges[1]);
    });

    it('should return null if the challenge is the current one the last one', function() {

      const { challenges, assessment } = instantiateModels([7, 3, 5]);
      expect(assessmentService.getNextChallenge(challenges[2], assessment)).to.be.null;
    });
  });
});
