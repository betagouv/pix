import { expect } from 'chai';
import { describe, it } from 'mocha';
import AnswerValidator from 'pix-live/utils/answer-validators';

describe('Unit | Helpers | AnswerValidator', function() {

  it('basic behavior for validation success', function() {
    // given
    const validator = AnswerValidator.validatorForChallenge('QCU', 'my answer value');
    // then
    expect(validator.isValid()).to.be.true;
    expect(validator.value).to.equal('my answer value');
  });

  it('basic behavior for validation failure', function() {
    // given
    const validator = AnswerValidator.validatorForChallenge('QCU', null);
    // then
    expect(validator.isValid()).to.be.false;
    expect(validator.value).to.equal(null);
    expect(typeof validator.errorMessage).to.equal('string');
  });

  describe('QCU validation', function() {
    testInvalidAnswers('QCU', [null, '']);
    testValidAnswers('QCU', ['1']);
  });

  describe('QCM validation', function() {
    testInvalidAnswers('QCM', [null, '']);
    testValidAnswers('QCM', ['1', '1,2']);
  });

  describe('QROC validation', function() {
    testInvalidAnswers('QROC', [null, '']);
    testValidAnswers('QROC', ['i', 'Firefox', 'Steve Jobs']);
  });

  describe('QROCM validation', function() {
    testInvalidAnswers('QROCM', [null, '', 'logiciel1: \'\'\nlogiciel2: \'\'']);
    testValidAnswers('QROCM', ['logiciel1: word\nlogiciel2: \'\'', 'logiciel1: word\nlogiciel2: excel']);
  });

});

// Test helpers

function printable(answer) {
  return answer ? answer.replace(/\n/, '\\n') : answer;
}

function testValidAnswers(type, answers) {
  answers.forEach(function(answer) {
    it(`validates that a '${printable(answer)}' answer is valid`, function() {
      const validator = AnswerValidator.validatorForChallenge(type, answer);
      expect(validator.isValid()).to.be.true;
    });
  });
}

function testInvalidAnswers(type, answers) {
  answers.forEach(function(answer) {
    it(`validates that a '${printable(answer)}' answer is invalid`, function() {
      const validator = AnswerValidator.validatorForChallenge(type, answer);
      expect(validator.isValid()).to.be.false;
      expect(typeof validator.errorMessage).to.equal('string');
    });
  });
}
