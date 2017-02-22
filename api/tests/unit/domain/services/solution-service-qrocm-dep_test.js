const { describe, it, expect } = require('../../../test-helper');
const service = require('../../../../lib/domain/services/solution-service-qrocm-dep');
const _ = require('../../../../lib/infrastructure/utils/lodash-utils');

describe('Unit | Service | SolutionServiceQrocmDep', function () {

  describe('_calculateValidation', function () {

    it('Should group validation by indexed user answer', function () {

      // Given
      const answersArg = { num1: 'google.fr', num2: 'bad answer', num3: 'bad answer' };
      const solutionsArgs = { Google: 'google,google.fr,google search', Yahoo: 'yahoo,yahoo answer', Bing: 'bing' };


      // When
      const underTest = service._calculateValidation(answersArg, solutionsArgs);

      // Then
      expect(_.size(underTest)).to.equal(3);
      expect(underTest['google.fr_num1']).to.be.an('array');
      expect(underTest['bad answer_num2']).to.be.an('array');
      expect(underTest['bad answer_num3']).to.be.an('array');
    });


    it('Each user answer must be evaluated against all possible solution', function () {

      // Given
      const answersArg = { num1: 'google.fr', num2: 'bad answer', num3: 'bad answer' };
      const solutionsArgs = { Google: 'google,google.fr,google search', Yahoo: 'yahoo,yahoo answer', Bing: 'bing' };

      // When
      const underTest = service._calculateValidation(answersArg, solutionsArgs);

      // Then
      expect(_.size(underTest['google.fr_num1'])).to.equal(3);
      expect(_.map(underTest['google.fr_num1'], 'adminAnswers')).to.contain('[\"yahoo\",\"yahoo answer\"]');
      expect(_.map(underTest['google.fr_num1'], 'adminAnswers')).to.contain('[\"google\",\"google.fr\",\"google search\"]');
      expect(_.map(underTest['google.fr_num1'], 'adminAnswers')).to.contain('[\"bing\"]');

    });

  });


});


