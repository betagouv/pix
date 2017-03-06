const { describe, it, expect } = require('../../../test-helper');

const service = require('../../../../lib/domain/services/solution-service');

describe('Unit | Service | SolutionService', function () {

  describe('#_timedOut', function () {

    const allCases = [
      {when: 'partially correct & timeout negative', preresult: 'partially' , timeout: -5, output: 'timedout'},
      {when: 'correct & timeout negative', preresult: 'ok' , timeout: -5, output: 'timedout'},
      {when: 'partially correct & timeout 0', preresult: 'partially' , timeout: 0, output: 'partially'},
      {when: 'correct & timeout 0', preresult: 'ok' , timeout: 0, output: 'ok'},
      {when: 'partially correct & timeout positive', preresult: 'partially' , timeout: 5, output: 'partially'},
      {when: 'user abandoned and timeout < 0', preresult: 'aband' , timeout: -5, output: 'aband'},
      {when: 'user abandoned and timeout 0', preresult: 'aband' , timeout: 0, output: 'aband'},
      {when: 'user abandoned and timeout > 0', preresult: 'aband' , timeout: +5, output: 'aband'},

    ];

    allCases.forEach(function (caze) {
      it(caze.when + ', should return ' + caze.output + ' when preresult is "' + caze.preresult + '" and timeout is "' + caze.timeout + '"', function () {
        expect(service._timedOut(caze.preresult, caze.timeout)).to.equal(caze.output);
      });
    });

  });

});

