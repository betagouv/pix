const { describe, it, expect, beforeEach, afterEach, sinon } = require('../../../test-helper');
const Bookshelf = require('../../../../lib/infrastructure/bookshelf');
const userRepository = require('../../../../lib/infrastructure/repositories/user-repository');
const assessmentRepository = require('../../../../lib/infrastructure/repositories/assessment-repository');
const challengeRepository = require('../../../../lib/infrastructure/repositories/challenge-repository');
const answerRepository = require('../../../../lib/infrastructure/repositories/answer-repository');
const competenceRepository = require('../../../../lib/infrastructure/repositories/competence-repository');
const userService = require('../../../../lib/domain/services/user-service');
const { UserNotFoundError } = require('../../../../lib/domain/errors');

const Answer = require('../../../../lib/domain/models/data/answer');
const Skill = require('../../../../lib/domain/models/Skill');

describe('Unit | Service | User Service', () => {

  describe('#isUserExistingByEmail', () => {

    const email = 'shi@fu.me';

    beforeEach(() => {
      sinon.stub(userRepository, 'findByEmail');
    });

    afterEach(() => {
      userRepository.findByEmail.restore();
    });

    it('should call a userRepository#findByEmail', () => {
      // given
      userRepository.findByEmail.resolves();

      // when
      const promise = userService.isUserExistingByEmail(email);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(userRepository.findByEmail);
        sinon.assert.calledWith(userRepository.findByEmail, email);
      });
    });

    it('should return true, when user is found', () => {
      // given
      const foundUser = {};
      userRepository.findByEmail.resolves(foundUser);

      // when
      const promise = userService.isUserExistingByEmail(email);

      // then
      return promise.then((result) => {
        expect(result).to.equal(true);
      });
    });

    it('should throw an error, when no user found', () => {
      // given
      userRepository.findByEmail.rejects();

      // when
      const promise = userService.isUserExistingByEmail(email);

      // then
      return promise.catch((result) => {
        expect(result).to.be.an.instanceOf(UserNotFoundError);
      });
    });
  });

  describe('#isUserExistingById', () => {

    const userId = 4367;

    beforeEach(() => {
      sinon.stub(userRepository, 'findUserById');
    });

    afterEach(() => {
      userRepository.findUserById.restore();
    });

    it('should call a userRepository.findUserById', () => {
      // given
      userRepository.findUserById.resolves();

      // when
      const promise = userService.isUserExistingById(userId);

      // then
      return promise.then(() => {
        sinon.assert.calledOnce(userRepository.findUserById);
        sinon.assert.calledWith(userRepository.findUserById, userId);
      });
    });

    it('should return true, when user is found', () => {
      // given
      const foundUser = {};
      userRepository.findUserById.resolves(foundUser);

      // when
      const promise = userService.isUserExistingById(userId);

      // then
      return promise.then((result) => {
        expect(result).to.equal(true);
      });
    });

    it('should throw an error, when no user found', () => {
      // given
      userRepository.findUserById.rejects();

      // when
      const promise = userService.isUserExistingById(userId);

      // then
      return promise.catch((result) => {
        expect(result).to.be.an.instanceOf(UserNotFoundError);
      });
    });
  });

  describe('#getSkillProfile', () => {

    let sandbox;
    const userId = 63731;

    const AnswerCollection = Bookshelf.Collection.extend({
      model: Answer
    });
    const answerCollectionWithEmptyData = AnswerCollection.forge([]);

    beforeEach(() => {
      sandbox = sinon.sandbox.create();

      sandbox.stub(assessmentRepository, 'findLastCompletedAssessmentsForEachCoursesByUser').resolves([
        { id: 13 }, { id: 1637 }
      ]);
      sandbox.stub(challengeRepository, 'list').resolves([
        {
          'id': 'challengeRecordIdOne',
          'skills': ['@recherche4'],
          'competence': 'competenceRecordIdOne'
        },
        {
          'id': 'challengeRecordIdTwo',
          'skills': ['@remplir2'],
          'competence': 'competenceRecordIdTwo'
        },
        {
          'id': 'challengeRecordIdThree',
          'skills': ['@collaborer4'],
          'competence': 'competenceRecordIdThatDoesNotExistAnymore',
        },
        {
          'id': 'challengeRecordIdFour',
          'skills': ['@remplir4'],
          'competence': 'competenceRecordIdTwo'
        },
        {
          'id': 'challengeRecordIdFive',
          'skills': ['@url3'],
          'competence': 'competenceRecordIdTwo'
        },
        {
          'id': 'challengeRecordIdSix',
          'skills': ['@web1'],
          'competence': 'competenceRecordIdTwo'
        },
        {
          'id': 'challengeRecordIdSeven',
          'skills': ['@citation4'],
          'competence': 'competenceRecordIdOne'
        },
        {
          'id': 'challengeRecordIdEight',
          'skills': ['@citation4', '@moteur3'],
          'competence': 'competenceRecordIdOne'
        },
        {
          'id': 'challengeRecordWithoutSkills',
          'competence': 'competenceRecordIdOne'
        }
      ]);
      sandbox.stub(answerRepository, 'findCorrectAnswersByAssessment').resolves(answerCollectionWithEmptyData);
      sandbox.stub(competenceRepository, 'list').resolves([
        {
          id: 'competenceRecordIdOne',
          index: '1.1',
          name: '1.1 Construire un flipper',
        },
        {
          id: 'competenceRecordIdTwo',
          index: '1.2',
          name: '1.2 Adopter un dauphin',
        }]);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should load achieved assessments', () => {
      // When
      const promise = userService.getSkillProfile(userId);

      // Then
      return promise.then(() => {
        sinon.assert.calledOnce(assessmentRepository.findLastCompletedAssessmentsForEachCoursesByUser);
        sinon.assert.calledWith(assessmentRepository.findLastCompletedAssessmentsForEachCoursesByUser, userId);
      });
    });

    it('should list available challenges', () => {
      // When
      const promise = userService.getSkillProfile(userId);

      // Then
      return promise.then(() => {
        sinon.assert.calledOnce(challengeRepository.list);
      });
    });

    it('should list right answers for every assessment fulfilled', () => {
      // When
      const promise = userService.getSkillProfile(userId);

      // Then
      return promise.then(() => {
        sinon.assert.calledTwice(answerRepository.findCorrectAnswersByAssessment);
      });
    });

    it('should list available competences', () => {
      // When
      const promise = userService.getSkillProfile(userId);

      // Then
      return promise.then(() => {
        sinon.assert.calledOnce(competenceRepository.list);
      });
    });

    context('when all informations needed are collected', () => {

      it('should assign skill to related competence', () => {
        // Given
        const answerInstance = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
        const answerCollectionWithOneAnswer = AnswerCollection.forge([answerInstance]);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionWithOneAnswer);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [new Skill('@remplir2')],
              challenges: [
                {
                  id: 'challengeRecordIdTwo',
                  competence: 'competenceRecordIdTwo',
                  skills: ['@remplir2']
                }
              ]
            }]);
        });
      });

      context('when selecting challenges to validate the skills per competence', () => {
        context('when only one challenge validate the skill', () => {
          it('should select the same challenge', () => {
            // Given
            const answer = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
            const answerCollectionWithOneAnswer = AnswerCollection.forge([answer]);

            answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
            answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionWithOneAnswer);

            // When
            const promise = userService.getSkillProfile(userId);

            // Then
            return promise.then((skillProfile) => {
              expect(skillProfile).to.deep.equal([
                {
                  id: 'competenceRecordIdOne',
                  index: '1.1',
                  name: '1.1 Construire un flipper',
                  skills: [],
                  challenges: []
                },
                {
                  id: 'competenceRecordIdTwo',
                  index: '1.2',
                  name: '1.2 Adopter un dauphin',
                  skills: [new Skill('@remplir2')],
                  challenges: [
                    {
                      id: 'challengeRecordIdTwo',
                      competence: 'competenceRecordIdTwo',
                      skills: ['@remplir2']
                    }
                  ]
                }]);
            });
          });
        });

        context('when two challenges validate the same skill', () => {
          it('should select the unanswered challenge', () => {
            // Given
            const answer = new Answer({ challengeId: 'challengeRecordIdSeven', result: 'ok' });
            const answerCollectionWithOneAnswer = AnswerCollection.forge([answer]);

            answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithOneAnswer);
            answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionWithEmptyData);

            // When
            const promise = userService.getSkillProfile(userId);

            // Then
            return promise.then((skillProfile) => {
              expect(skillProfile).to.deep.equal([
                {
                  id: 'competenceRecordIdOne',
                  index: '1.1',
                  name: '1.1 Construire un flipper',
                  skills: [new Skill('@citation4')],
                  challenges: [
                    {
                      id: 'challengeRecordIdEight',
                      competence: 'competenceRecordIdOne',
                      skills: ['@citation4', '@moteur3']
                    }
                  ]
                },
                {
                  id: 'competenceRecordIdTwo',
                  index: '1.2',
                  name: '1.2 Adopter un dauphin',
                  skills: [],
                  challenges: []
                }]);
            });
          });

          it('should select a challenge for every skill', () => {
            // Given
            const answer = new Answer({ challengeId: 'challengeRecordIdOne', result: 'ok' });
            const answer2 = new Answer({ challengeId: 'challengeRecordIdEight', result: 'ok' });
            const answerCollectionWithTwoAnswers = AnswerCollection.forge([answer, answer2]);

            answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithTwoAnswers);
            answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionWithEmptyData);

            // When
            const promise = userService.getSkillProfile(userId);

            // Then
            return promise.then((skillProfile) => {
              expect(skillProfile).to.deep.equal([
                {
                  id: 'competenceRecordIdOne',
                  index: '1.1',
                  name: '1.1 Construire un flipper',
                  skills: [new Skill('@citation4'), new Skill('@recherche4'), new Skill('@moteur3')],
                  challenges: [
                    {
                      'competence': 'competenceRecordIdOne',
                      'id': 'challengeRecordIdOne',
                      'skills': [
                        '@recherche4'
                      ]
                    },
                    {
                      'competence': 'competenceRecordIdOne',
                      'id': 'challengeRecordIdSeven',
                      'skills': [
                        '@citation4'
                      ]
                    },
                    {
                      'competence': 'competenceRecordIdOne',
                      'id': 'challengeRecordIdEight',
                      'skills': [
                        '@citation4',
                        '@moteur3'
                      ]
                    }
                  ]
                },
                {
                  id: 'competenceRecordIdTwo',
                  index: '1.2',
                  name: '1.2 Adopter un dauphin',
                  skills: [],
                  challenges: []
                }]);
            });
          });

        });
      });

      it('should group skills by competence ', () => {
        // Given
        const answerA1 = new Answer({ challengeId: 'challengeRecordIdOne', result: 'ok' });
        const answerCollectionA = AnswerCollection.forge([answerA1]);

        const answerB1 = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
        const answerB2 = new Answer({ challengeId: 'challengeRecordIdFive', result: 'ok' });
        const answerCollectionB = AnswerCollection.forge([answerB1, answerB2]);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionA);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionB);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [new Skill('@recherche4')],
              challenges: [
                {
                  competence: 'competenceRecordIdOne',
                  id: 'challengeRecordIdOne',
                  skills: [
                    '@recherche4'
                  ]
                }
              ]
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [new Skill('@url3'), new Skill('@remplir2')],
              challenges: [
                {
                  id: 'challengeRecordIdTwo',
                  competence: 'competenceRecordIdTwo',
                  skills: ['@remplir2']
                },
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdFive',
                  skills: [
                    '@url3'
                  ]
                }
              ]
            }]);
        });
      });

      it('should sort in desc grouped skills by competence', () => {
        // Given
        const answer1 = new Answer({ challengeId: 'challengeRecordIdFour', result: 'ok' });
        const answer2 = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
        const answer3 = new Answer({ challengeId: 'challengeRecordIdFive', result: 'ok' });
        const answerCollectionArray = AnswerCollection.forge([answer1, answer2, answer3]);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionArray);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [
                new Skill('@remplir4'),
                new Skill('@url3'),
                new Skill('@remplir2')
              ],
              challenges: [
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdFour',
                  skills: [
                    '@remplir4'
                  ]
                },
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdTwo',
                  skills: [
                    '@remplir2'
                  ]
                },
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdFive',
                  skills: [
                    '@url3'
                  ]
                }
              ]
            }
          ]);
        });
      });

      it('should return the three most difficult skills sorted in desc grouped by competence', () => {
        // Given
        const answer1 = new Answer({ challengeId: 'challengeRecordIdFour', result: 'ok' });
        const answer2 = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
        const answer3 = new Answer({ challengeId: 'challengeRecordIdFive', result: 'ok' });
        const answer4 = new Answer({ challengeId: 'challengeRecordIdSix', result: 'ok' });
        const answerCollectionArray = AnswerCollection.forge([answer1, answer2, answer3, answer4]);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionArray);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [
                new Skill('@remplir4'),
                new Skill('@url3'),
                new Skill('@remplir2')
              ],
              challenges: [
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdFour',
                  skills: [
                    '@remplir4'
                  ]
                },
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdFive',
                  skills: [
                    '@url3'
                  ]
                },
                {
                  competence: 'competenceRecordIdTwo',
                  id: 'challengeRecordIdTwo',
                  skills: [
                    '@remplir2'
                  ]
                }
              ]
            }
          ]);
        });
      });

      it('should not add a skill twice', () => {
        // Given
        const answer = new Answer({ challengeId: 'challengeRecordIdTwo', result: 'ok' });
        const answerCollectionArray = AnswerCollection.forge([answer, answer]);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionArray);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [new Skill('@remplir2')],
              challenges: [
                {
                  id: 'challengeRecordIdTwo',
                  skills: ['@remplir2'],
                  competence: 'competenceRecordIdTwo'
                }
              ]
            }]);
        });
      });

      it('should not assign skill, when the challenge id is not found', () => {
        // Given
        const answer = new Answer({ challengeId: 'challengeRecordIdThatDoesNotExist', result: 'ok' });
        const answerCollectionArray = AnswerCollection.forge(answer);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionArray);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [],
              challenges: []
            }]);
        });
      });

      it('should not assign skill, when the competence is not found', () => {
        // Given
        const answer = new Answer({ challengeId: 'challengeRecordIdThree', result: 'ok' });
        const answerCollectionArray = AnswerCollection.forge(answer);

        answerRepository.findCorrectAnswersByAssessment.withArgs(13).resolves(answerCollectionWithEmptyData);
        answerRepository.findCorrectAnswersByAssessment.withArgs(1637).resolves(answerCollectionArray);

        // When
        const promise = userService.getSkillProfile(userId);

        // Then
        return promise.then((skillProfile) => {
          expect(skillProfile).to.deep.equal([
            {
              id: 'competenceRecordIdOne',
              index: '1.1',
              name: '1.1 Construire un flipper',
              skills: [],
              challenges: []
            },
            {
              id: 'competenceRecordIdTwo',
              index: '1.2',
              name: '1.2 Adopter un dauphin',
              skills: [],
              challenges: []
            }]);
        });
      });

    });
  });

});
