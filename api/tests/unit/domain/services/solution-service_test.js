const { describe, it, before, after, expect, knex, sinon } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service');
const Answer = require('../../../../lib/domain/models/data/answer');
const Solution = require('../../../../lib/domain/models/referential/solution');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');
const SolutionRepository = require('../../../../lib/infrastructure/repositories/solution-repository');

describe('Unit | Service | SolutionService', function () {

  const twoPossibleSolutions = 'Google:\n- Google\n- google.fr\n- Google Search\nYahoo:\n- Yahoo\n- Yahoo Answer';
  const threePossibleSolutions = 'Google:\n- Google\n- google.fr\n- Google Search\nYahoo:\n- Yahoo\n- Yahoo Answer\nBing:\n- Bing';

  function buildSolution(type, value, scoring) {
    const solution = new Solution({id: 'solution_id'});
    solution.type = type;
    solution.value = value;
    solution.scoring = _.ensureString(scoring).replace(/@/g, '');
    return solution;
  }

  function buildAnswer(value, timeout) {
    const answer = new Answer({id: 'answer_id'});
    answer.attributes = {value, timeout};
    return answer;
  }

  describe('#match', function () {

    describe('if answer is #ABAND#', function () {

      it('should return "aband"', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('SOME_TYPE', null);
        expect(service.match(answer, solution)).to.equal('aband');
      });

      // XXX prevent bug after commit #9332cd2
      it('should return "aband" even if question type is QCU', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QCU', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QCM', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QCM', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROC', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROC', 'Good answer');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROCM-ind', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROCM-ind', '9lettres:\n- courgette\n6lettres:\n- tomate\n- etamot');
        expect(service.match(answer, solution)).to.equal('aband');
      });

      it('should return "aband" even if question type is QROCM-dep', function () {
        const answer = buildAnswer('#ABAND#');
        const solution = buildSolution('QROCM-dep', twoPossibleSolutions);
        expect(service.match(answer, solution)).to.equal('aband');
      });

    });

    describe('if solution type is QRU', function () {

      it('should return "unimplemented"', function () {
        const answer = buildAnswer('some answer');
        const solution = buildSolution('QRU', 'some value');
        expect(service.match(answer, solution)).to.equal('unimplemented');
      });

    });

    describe('if solution type is QCU', function () {

      it('should return "ok" when answer and solution are equal', function () {
        const answer = buildAnswer('same value');
        const solution = buildSolution('QCU', 'same value');
        expect(service.match(answer, solution)).to.equal('ok');
      });

      it('should return "timedout" when answer and solution are equal, but timeout is negative', function () {
        const answer = buildAnswer('same value', -15);
        const solution = buildSolution('QCU', 'same value');
        expect(service.match(answer, solution)).to.equal('timedout');
      });

      it('should return "ko" when answer and solution are different', function () {
        const answer = buildAnswer('answer value');
        const solution = buildSolution('QCU', 'different solution value');
        expect(service.match(answer, solution)).to.equal('ko');
      });

    });

    describe('if solution type is QCM', function () {

      const successfulCases = [
        {answer: '1', solution: '1'},
        {answer: '1, 2', solution: '1, 2'},
        {answer: '1, 2, 3', solution: '1, 2, 3'},
        {answer: '1,2,3', solution: '1,2,3'},
        {answer: '3, 2, 1', solution: '1, 2, 3'},
        {answer: '1,2,3', solution: '1, 2, 3'},
        {answer: '1,   2,   3   ', solution: '1, 2, 3'},
        {answer: '1, 2, 3', solution: '1, 2, 3'}
      ];

      successfulCases.forEach(function (testCase) {
        it('should return "ok" when answer is "' + testCase.answer + '" and solution is "' + testCase.solution + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QCM', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ok');
        });
      });

      const failedCases = [
        {answer: '2', solution: '1'},
        {answer: '1, 3', solution: '1, 2'},
        {answer: '1, 2, 3', solution: '1, 2'},
        {answer: '3, 1', solution: '1, 2'}
      ];

      failedCases.forEach(function (testCase) {
        it('should return "ko" when answer is "' + testCase.answer + '" and solution is "' + testCase.solution + '"', function () {
          const answer = buildAnswer(testCase.answer);
          const solution = buildSolution('QCM', testCase.solution);
          expect(service.match(answer, solution)).to.equal('ko');
        });
      });

    });

    describe('if solution type is none of the above ones', function () {

      it('should return "unimplemented"', function () {
        const answer = buildAnswer('some value');
        const solution = buildSolution('SOME_TYPE', 'Some variant');
        expect(service.match(answer, solution)).to.equal('unimplemented');
      });

    });

  });

  describe('#_timedOut', function () {
    it('should return "timedout" if result is partially correct and timeout is negative', function () {
      expect(service._timedOut('partially', -5)).to.equal('timedout');
    });
    it('should return "timedout" if result is "ok" and timeout is negative', function () {
      expect(service._timedOut('ok', -5)).to.equal('timedout');
    });
    it('should return "partially" if result is partially correct and timeout is 0', function () {
      expect(service._timedOut('partially', 0)).to.equal('partially');
    });
    it('should return "ok" if result is "ok" and timeout is 0', function () {
      expect(service._timedOut('ok', 0)).to.equal('ok');
    });
    it('should return "partially" if result is partially correct and timeout is positive', function () {
      expect(service._timedOut('partially', 11)).to.equal('partially');
    });
    it('should return "ok" if result is "ok" and timeout is 0', function () {
      expect(service._timedOut('ok', 11)).to.equal('ok');
    });
    it('should return "aband" if result is "aband" and timeout is negative', function () {
      expect(service._timedOut('aband', -5)).to.equal('aband');
    });
    it('should return "aband" if result is "aband" and timeout is 0', function () {
      expect(service._timedOut('aband', 0)).to.equal('aband');
    });
    it('should return "aband" if result is "aband" and timeout is positive', function () {
      expect(service._timedOut('aband', 11)).to.equal('aband');
    });
  });


  describe('#revalidate', function () {

    const ko_answer = {
      id: 1,
      value: '1,2,3',
      result: 'ko',
      challengeId: 'any_challenge_id'
    };

    const ok_answer = {
      id: 2,
      value: '1, 2, 3',
      result: 'partially',
      challengeId: 'any_challenge_id'
    };

    const unimplemented_answer = {
      id: 4,
      value: '1,2,3',
      result: 'unimplemented',
      challengeId: 'any_challenge_id'
    };

    const aband_answer = {
      id: 5,
      value: '#ABAND#',
      result: 'aband',
      challengeId: 'any_challenge_id'
    };

    const timedout_answer = {
      id: 6,
      value: '1,2,3',
      result: 'timedout',
      challengeId: 'any_challenge_id'
    };

    before(function (done) {
      knex('answers').delete().then(() => {
        knex('answers').insert([ko_answer, ok_answer, unimplemented_answer, aband_answer, timedout_answer]).then(() => {
          done();
        });
      });
    });

    after(function (done) {
      knex('answers').delete().then(() => {done();});
    });


    it('If the answer is timedout, resolve to the answer itself, unchanged', function (done) {
      expect(service.revalidate).to.exist;
      service.revalidate(new Answer(timedout_answer)).then(function (foundAnswer) {
        expect(foundAnswer.id).equals(timedout_answer.id);
        expect(foundAnswer.attributes.value).equals(timedout_answer.value);
        expect(foundAnswer.attributes.result).equals(timedout_answer.result);
        expect(foundAnswer.attributes.challengeId).equals(timedout_answer.challengeId);
        done();
      });
    });

    it('If the answer is aband, resolve to the answer itself, unchanged', function (done) {
      expect(service.revalidate).to.exist;
      service.revalidate(new Answer(aband_answer)).then(function (foundAnswer) {
        expect(foundAnswer.id).equals(aband_answer.id);
        expect(foundAnswer.attributes.value).equals(aband_answer.value);
        expect(foundAnswer.attributes.result).equals(aband_answer.result);
        expect(foundAnswer.attributes.challengeId).equals(aband_answer.challengeId);
        done();
      });
    });

    it('If the answer is ko, resolve to the answer itself, with result corresponding to the matching', function (done) {

      // given
      const MATCHING_RETURNS = '#ANY_RESULT#';

      sinon.stub(SolutionRepository, 'get').resolves({}); // avoid HTTP call, but what it replies doesn't matter
      sinon.stub(service, 'match').returns(MATCHING_RETURNS);
      expect(service.revalidate).to.exist;

      // when
      service.revalidate(new Answer(ko_answer)).then(function (foundAnswer) {

        // then
        expect(SolutionRepository.get.callOnce);
        expect(service.match.callOnce);
        expect(foundAnswer.id).equals(ko_answer.id);
        expect(foundAnswer.attributes.result).equals(MATCHING_RETURNS);

        SolutionRepository.get.restore();
        service.match.restore();
        done();
      });

    });

    it('If the answer is ok, resolve to the answer itself, with result corresponding to the matching', function (done) {

      // given
      const MATCHING_RETURNS = '#ANY_RESULT#';

      sinon.stub(SolutionRepository, 'get').resolves({}); // avoid HTTP call, but what it replies doesn't matter
      sinon.stub(service, 'match').returns(MATCHING_RETURNS);
      expect(service.revalidate).to.exist;

      // when
      service.revalidate(new Answer(ok_answer)).then(function (foundAnswer) {

        // then
        expect(SolutionRepository.get.callOnce);
        expect(service.match.callOnce);
        expect(foundAnswer.id).equals(ok_answer.id);
        expect(foundAnswer.attributes.result).equals(MATCHING_RETURNS);

        SolutionRepository.get.restore();
        service.match.restore();
        done();
      });

    });


    it('If the answer is unimplemented, resolve to the answer itself, with result corresponding to the matching', function (done) {

      // given
      const MATCHING_RETURNS = '#ANY_RESULT#';

      sinon.stub(SolutionRepository, 'get').resolves({}); // avoid HTTP call, but what it replies doesn't matter
      sinon.stub(service, 'match').returns(MATCHING_RETURNS);
      expect(service.revalidate).to.exist;

      // when
      service.revalidate(new Answer(unimplemented_answer)).then(function (foundAnswer) {

        // then
        expect(SolutionRepository.get.callOnce);
        expect(service.match.callOnce);
        expect(foundAnswer.id).equals(unimplemented_answer.id);
        expect(foundAnswer.attributes.result).equals(MATCHING_RETURNS);

        SolutionRepository.get.restore();
        service.match.restore();
        done();
      });

    });

  });

});
