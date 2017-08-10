const expect = require('chai').expect;
const Answer = require('../../../lib/cat/answer');
const Skill = require('../../../lib/cat/skill');
const Challenge = require('../../../lib/cat/challenge');

describe('Unit | Model | Answer', function() {

  describe('#maxDifficulty', function() {
    it('should exist', function() {
      // given
      const url1 = new Skill('url', 1);
      const challenge = new Challenge('recXXX', [url1]);
      const answer = new Answer(challenge, 'ko');

      // then
      expect(answer.maxDifficulty).to.exist;
    });

    it('should return the maximal skill difficulty of a challenge', function() {
      // given
      const web5 = new Skill('web', 5);
      const url1 = new Skill('url', 1);
      const challenge = new Challenge('recXXX', [url1, web5]);
      const answer = new Answer(challenge, 'ok');

      // when
      const maxDifficulty = answer.maxDifficulty;

      // then
      expect(maxDifficulty).to.equal(5);
    });
  });

  describe('#binaryOutcome', function() {
    it('should exist', function() {
      // given
      const challenge = new Challenge('recXXX', []);
      const answer = new Answer(challenge, 'ko');

      // then
      expect(answer.binaryOutcome).to.exist;
    });

    it('should return 1 if answer is correct', function() {
      // given
      const challenge = new Challenge('recXXX', []);
      const answer = new Answer(challenge, 'ok');

      // when
      const maxDifficulty = answer.binaryOutcome;

      // then
      expect(maxDifficulty).to.equal(1);
    });

    it('should return 0 if answer is not correct', function() {
      // given
      const challenge = new Challenge('recXXX', []);
      const answer = new Answer(challenge, 'partial');

      // when
      const maxDifficulty = answer.binaryOutcome;

      // then
      expect(maxDifficulty).to.equal(0);
    });
  });

  describe('Set', () => {

    describe('#union', () => {

      it('should concatenate two Set objects', () => {
        // given
        const setA = new Set([1, 2, 3]);
        const setB = new Set([4, 5, 6]);

        // when
        const setC = setA.union(setB);

        // then
        const expectedSet = new Set([1, 2, 3, 4, 5, 6]);
        expect(setC).to.deep.equal(expectedSet);
      });
    });

    describe('#difference', () => {

      it('should remove the Set values from another one', () => {
        // given
        const setA = new Set([1, 2, 3, 4, 5, 6]);
        const setB = new Set([1, 3, 5, 7]);

        // when
        const setC = setA.difference(setB);

        // then
        const expectedSet = new Set([2, 4, 6]);
        expect(setC).to.deep.equal(expectedSet);
      });
    });

  });

});
