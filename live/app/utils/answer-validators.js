import _ from 'pix-live/utils/lodash-custom';

// Base class for answers validators
//
// Usage:
//   let validator = new AnswerValidator.validatorForChallenge('QCM', answerValue); // returns a QcmValidator instance
//   validator.isValid();    // returns a boolean
//   validator.errorMessage; // returns the validation error message (if any)
export default class AnswerValidator {

  // Factory function: returns a new validator for the given challenge and answer value.
  static validatorForChallenge(challengeType, value) {
    const validatorClasses = {
      'QCUIMG':    QcuValidator,
      'QCU':       QcuValidator,
      'QRU':       QcuValidator,
      'QCMIMG':    QcmValidator,
      'QCM':       QcmValidator,
      'QROC':      QrocValidator,
      'QROCM':     QrocmValidator,
      'QROCM-IND': QrocmValidator,
      'QROCM-DEP': QrocmValidator
    };
    const validatorClass = validatorClasses[challengeType.toUpperCase()];
    return new validatorClass(value);
  }

  constructor(value, errorMessage) {
    this.value        = value;
    this.errorMessage = errorMessage;
  }

  isValid() {
    return !!this._validate();
  }

  _validate() {
    throw new Error('This method must be implemented by subclasses');
  }
}

// Concrete implementations of AnswerValidator

class QcuValidator extends AnswerValidator {
  constructor(value) {
    super(value, 'Pour valider, sélectionner une réponse. Sinon, passer.');
  }

  _validate() {
    return this.value && this.value.length >= 1;
  }
}

class QcmValidator extends AnswerValidator {
  constructor(value) {
    super(value, 'Pour valider, sélectionner au moins une réponse. Sinon, passer.');
  }

  _validate() {
    return this.value && this.value.length >= 1;
  }
}

class QrocValidator extends AnswerValidator {
  constructor(value) {
    super(value, 'Pour valider, saisir une réponse. Sinon, passer.');
  }

  _validate() {
    return this.value && this.value.length >= 1;
  }
}

class QrocmValidator extends AnswerValidator {
  constructor(yamlValue) {
    super(yamlValue, 'Pour valider, saisir au moins une réponse. Sinon, passer.');
  }

  _parsedValue() {
    try {
      return jsyaml.load(this.value);
    } catch (e) {
      return undefined;
    }
  }

  _validate() {
    const hasAtLeastOneAnswer = _(this._parsedValue()).hasSomeTruthyProps();
    return _.isTruthy(hasAtLeastOneAnswer);
  }
}
