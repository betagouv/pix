const { describe, it, expect, sinon, beforeEach, afterEach, knex } = require('../../../test-helper');

const certificationChallengeRepository = require('../../../../lib/infrastructure/repositories/certification-challenge-repository');
const CertificationChallenge = require('../../../../lib/domain/models/data/certification-challenge');

describe('Unit | Repository | certification-challenge-repository', () => {

  const challengeObject = {
    id: 'challenge_id',
    competence: 'competenceId',
    testedSkill: '@skill2'
  };
  const certificationCourseObject = { id: 'certification_course_id' };
  const certificationChallenge = {
    challengeId: 'challenge_id',
    competenceId: 'competenceId',
    associatedSkill: '@skill2',
    courseId: 'certification_course_id'
  };
  const certificationChallengeBookshelf = new CertificationChallenge(certificationChallenge);

  describe('#save', function() {

    beforeEach(() => {
      sinon.stub(CertificationChallenge.prototype, 'save').resolves(certificationChallengeBookshelf);
    });

    afterEach(() => {
      CertificationChallenge.prototype.save.restore();
    });

    it('should save certification challenge object', () => {
      // when
      const promise = certificationChallengeRepository.save(challengeObject, certificationCourseObject);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(CertificationChallenge.prototype.save);
      });

    });

    it('should return certification challenge object', () => {
      // when
      const promise = certificationChallengeRepository.save(challengeObject, certificationCourseObject);

      // then
      return promise.then((savedCertificationChallenge) => {
        expect(savedCertificationChallenge).to.deep.equal(certificationChallenge);
      });
    });

  });

  describe('#findChallengesByCertificationCourseId', () => {

    const courseId = 'courseId';
    const challenge1 = {
      id: 1,
      challengeId: 'recQuelquechose',
      courseId,
      associatedSkill: '@brm7',
      competenceId: 'recCompetenceId1'
    };
    const challenge2 = {
      id: 2,
      challengeId: 'recAutrechose',
      courseId,
      associatedSkill: '@twi8',
      competenceId: 'recCompetenceId2'
    };
    const challenge3 = {
      id: 3,
      challengeId: 'recQuelqueAutrechose',
      courseId: 'otherCourseId',
      associatedSkill: '@twi8',
      competenceId: 'recCompetenceId2'
    };
    const challenges = [
      challenge1,
      challenge2,
      challenge3
    ];

    beforeEach(() => {
      return knex('certification-challenges').insert(challenges);
    });

    afterEach(() => {
      return knex('certification-challenges').delete();
    });

    it('should find all challenges related to a given courseId', () => {
      // when
      const promise = certificationChallengeRepository.findChallengesByCertificationCourseId(courseId);

      // then
      return promise.then((result) => {
        expect(result.length).to.equal(2);
        expect(result[0]).to.deep.equal(challenge1);
        expect(result[1]).to.deep.equal(challenge2);
      });
    });

    it('should return an empty array if there is no found challenges', function() {
      // when
      const promise = certificationChallengeRepository.findChallengesByCertificationCourseId('inexistantId');

      // then
      return promise.then((result) => {
        console.log((result));
        expect(result.length).to.equal(0);
      });
    });

    it('should throw an error if something went wrong', function() {
      //Given
      const error = new Error('Unable to fetch');
      const whereStub = sinon.stub(CertificationChallenge, 'where').returns({
        fetchAll: () => {
          return Promise.reject(error);
        }
      });

      // When
      const promise = certificationChallengeRepository.findChallengesByCertificationCourseId();

      // Then
      whereStub.restore();
      return promise
        .catch((err) => {
          expect(err).to.equal(error);
        });
    });

  });
});
