import Ember from 'ember';
import isEmailValid from 'pix-live/utils/email-validator';
import isPasswordValid from '../utils/password-validator';

const ERROR_INPUT_MESSAGE_MAP = {
  firstname: 'Votre prénom n’est pas renseigné.',
  lastname: 'Votre nom n’est pas renseigné.',
  email: 'Votre email n’est pas valide.',
  password: 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.'
};

function getErrorMessage(status, key) {
  return (status === 'error') ? ERROR_INPUT_MESSAGE_MAP[key] : null;
}

function getValidationStatus(isValidField) {
  return (isValidField) ? 'error' : 'success';
}

function isGivenEmptyValue(value) {
  return !value.trim() ? true : false;
}

export default Ember.Component.extend({
  classNames: ['signup-form'],
  cgu_checkbox: '',
  firstname: {
    status: 'default',
    message: null
  },
  lastname: {
    status: 'default',
    message: null
  },
  email: {
    status: 'default',
    message: null
  },
  password: {
    status: 'default',
    message: null
  },

  updateTextfieldModelObject (key, status, message) {
    const inputModelObject = {status, message};
    this.set(key, inputModelObject);
  },

  getModelAttributeValueFromKey(key) {
    const userModel = this.get('user');
    const inputValue = userModel.get(key);
    return inputValue;
  },

  actions: {
    validateInput(key){
      const modelAttrValue = this.getModelAttributeValueFromKey(key);
      const isEmptyValue = isGivenEmptyValue(modelAttrValue);
      const status = getValidationStatus(isEmptyValue);
      const message = getErrorMessage(status, key);
      this.updateTextfieldModelObject(key, status, message);
    },

    validateInputEmail(key){
      const inputValue = this.getModelAttributeValueFromKey(key);
      const isNotValidEmail = !isEmailValid(inputValue);
      const status = getValidationStatus(isNotValidEmail);
      const message = getErrorMessage(status, key);
      this.updateTextfieldModelObject(key, status, message);
    },

    validateInputPassword(key){
      const inputValue = this.getModelAttributeValueFromKey(key);
      const isNotValidPasswordFormat = !isPasswordValid(inputValue);
      const status =  getValidationStatus(isNotValidPasswordFormat);
      const message = getErrorMessage(status, key);
      this.updateTextfieldModelObject(key, status, message);
    },

    signup(){
      this.sendAction('signup');
    }
  }
});
