const service = require('../../../../lib/domain/services/solution-service-qrocm-dep');

describe.only('Unit | Service | SolutionServiceQrocmDep', function() {

  describe('#match', function () {

    it('should return "ok" if given answer matches solution, and the solution contains numbers', function() {
      // given
      const yamlAnswer = `num1: '4'\nnum2: '2'\nnum3: '1'\nnum4: '3'`;
      const yamlSolution =`num1:\n  - 4\nnum2:\n  - 2\nnum3:\n  - 1\nnum4:\n  - 3`;
      const yamlScoring = null;

      // when
      const result = service.match(yamlAnswer, yamlSolution, yamlScoring);

      // then
      expect(result).to.equal('ok');
    });

    it('should return "ok" if given answer matches solution, and the solution contains strings', function () {
      // given
      const yamlAnswer = `moteur 1: yahoo\nmoteur 2: google\nmoteur 3: bing`;
      const yamlSolution = `Google:\n- google\n- google.fr\n- google.com\n- google search\nYahoo:\n- yahoo\n- yahoo search\n- yahoo.fr\n- yahoo.com\nAltavista:\n- altavista\n- altavista.fr\n- altavista.com\nBing:\n- bing\n- bing.fr\n- bing.com`;
      const yamlScoring = null;

      // when
      const result = service.match(yamlAnswer, yamlSolution, yamlScoring);
      // then
      expect(result).to.equal('ok');

    });

    it('should return "ko" if given answer doesn\'t match solution, and the solution contains numbers', function() {
      // given
      const yamlAnswer1 = `num1: '4'\nnum2: '1'\nnum3: '2'\nnum4: '3'`;
      const yamlSolution =`num1:\n  - 4\nnum2:\n  - 2\nnum3:\n  - 1\nnum4:\n  - 3`;
      const yamlScoring = null;

      // when
      const result = service.match(yamlAnswer1, yamlSolution, yamlScoring);

      // then
      expect(result).to.equal('ko');
    });

    it('should return "ko" if given answer doesn\'t match solution, and the solution contains strings', function () {
      // given
      const yamlAnswer = `moteur 1: yahoo\nmoteur 2: google\nmoteur 3: mauvaise_reponse`;
      const yamlSolution = `Google:\n- google\n- google.fr\n- google.com\n- google search\nYahoo:\n- yahoo\n- yahoo search\n- yahoo.fr\n- yahoo.com\nAltavista:\n- altavista\n- altavista.fr\n- altavista.com\nBing:\n- bing\n- bing.fr\n- bing.com`;
      const yamlScoring = null;

      // when
      const result = service.match(yamlAnswer, yamlSolution, yamlScoring);
      // then
      expect(result).to.equal('ko');

    });
  });

  describe('cases which should not match', function () {

    const answerCases = [
      `num1: '4'\nnum2: '1'\nnum3: '2'\nnum4: '3'`,
      `num1: '2'\nnum2: '4'\nnum3: '1'\nnum4: '3'`,
      `num1: '2'\nnum2: '3'\nnum3: '1'\nnum4: '4'`,
      `num1: '7'\nnum2: '1'\nnum3: '2'\nnum4: '3'`,
      `num1: '1'\nnum2: '1'\nnum3: '2'\nnum4: '3'`,
      `num1: ''\nnum2: '1'\nnum3: '2'\nnum4: '3'`,
      `num1: '3'\nnum2: '1'\nnum3: '2'`
    ]
    const yamlSolution =`num1:\n  - 4\nnum2:\n  - 2\nnum3:\n  - 1\nnum4:\n  - 3`;
    const yamlScoring = null;

    answerCases.forEach(function (answerCase) {
      it('answer ' + answerCase + ' should not match', function () {
        const result = service.match(answerCase, yamlSolution, yamlScoring);
        expect(result).to.equal('ko');
      });
    })
  });

});
