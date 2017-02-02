/* global describe, after, afterEach, beforeEach, it, knex, expect, nock, before */
const AnswerRepository = require('../../../../lib/infrastructure/repositories/answer-repository');

describe.only('Unit | Repository | AnswerRepository', function () {


  const inserted_answer_1 = {
    value: '1,2',
    result: 'ko',
    challengeId: 'challenge_1234',
    assessmentId: 1234
  };

  const inserted_answer_2 = {
    value: '1,2,4',
    result: 'ok',
    challengeId: 'challenge_000',
    assessmentId: 1
  };

  beforeEach(function (done) {
    knex('answers').delete().then(() => {
      knex('answers').insert([inserted_answer_1, inserted_answer_2]).then((id) => {
        // inserted_answer_1_id = id;
        done();
      });
    });
  });

  afterEach(function (done) {
    knex('answers').delete().then(() => {done();});
  });

  it('true should be true', function () {
    expect(true).to.equal(true);
  });

  it('should find sth in database, *ucker', function (done) {
    knex.select('*').from('answers').then((answers) => {
      // const theAnswer = answers[0];
      // expect(theAnswer.result).to.equal('ok');
      console.log('theAnswer - - - -' + JSON.stringify(answers));
      const givenAnswers = AnswerRepository.findByChallengeAndAssessment('challenge_1234', 1234);
      expect(givenAnswers).to.exist;
      console.log('givenAnswers - - - -' + JSON.stringify(givenAnswers));
      done();
    });
  });

  it('should findByChallengeAndAssessment, *ucker', function (done) {
    expect(AnswerRepository.findByChallengeAndAssessment).to.exist;

    done();
  });



});
