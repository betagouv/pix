const service = require('../../../../lib/domain/services/solution-service-qrocm-dep');

describe.only('Unit | Service | SolutionServiceQrocmDep', function () {

  describe('#match', function () {

    describe('when expected solutions are strings', function () {

      const solution = `Google:\n- google\n- google.fr\n- google.com\n- google search\nYahoo:\n- yahoo\n- yahoo search\n- yahoo.fr\n- yahoo.com\nAltavista:\n- altavista\n- altavista.fr\n- altavista.com\nBing:\n- bing\n- bing.fr\n- bing.com`;
      const scoring = null;

      it('should return "ok" if given answer matches solution', function () {
        // given
        const goodAnswer = `moteur 1: yahoo\nmoteur 2: google\nmoteur 3: bing`;
        // when
        const result = service.match(goodAnswer, solution, scoring, 3);
        // then
        expect(result).to.equal('ok');
      });

      [
        `moteur 1: yahoo\nmoteur 2: google\nmoteur 3: mauvaise_reponse`,
        `moteur 1: yahoo\nmoteur 2: google`
      ].forEach(function (badAnswer) {
        it(`should return "ko" if the given answer doesn't match the solution (answer = ${badAnswer})`, function () {
          const result = service.match(badAnswer, solution, scoring, 3);
          expect(result).to.equal('ko');
        });
      });

      describe.skip('when expected solutions are numbers', function () {

        it('should return "ok" if given answer matches solution', function () {
          // given
          const yamlAnswer = `num1: '4'\nnum2: '2'\nnum3: '1'\nnum4: '3'`;
          const yamlSolution = `num1:\n  - 4\nnum2:\n  - 2\nnum3:\n  - 1\nnum4:\n  - 3`;
          const yamlScoring = null;

          // when
          const result = service.match(yamlAnswer, yamlSolution, yamlScoring);

          // then
          expect(result).to.equal('ok');
        });
      });
    });
  });
  });


