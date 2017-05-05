import Ember from 'ember';
import isEmailValid from 'pix-live/utils/email-validator';
import isPasswordValid from '../utils/password-validator';
import config from 'pix-live/config/environment';

const ERROR_INPUT_MESSAGE_MAP = {
  firstName: 'Votre prénom n’est pas renseigné.',
  lastName: 'Votre nom n’est pas renseigné.',
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
  registrationMessage: '',
  validation: {
    lastName: {
      message: null,
      status: 'default'
    },
    firstName: {
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
    }
  },

  _updateTextfieldModelObject (key, status, message) {
    const inputModelObject = {status, message};
    const statusObject = 'validation.'+key+'.status';
    const messageObject = 'validation.'+key+'.message';
    this.set(statusObject, status);
    this.set(messageObject, message);
    this.set(key, inputModelObject);
  },

  _getModelAttributeValueFromKey(key) {
    const userModel = this.get('user');
    return userModel.get(key);
  },

  _toggleConfirmation(message) {
    this.set('registrationMessage', message);
    Ember.run.later(()=>{
      this.set('registrationMessage', '');
    }, config.APP.MESSAGE_DISPLAY_DURATION);
  },

  _reset(){
    const defaultValidationObject = {
      lastName: {
        message: null,
        status: 'default'
      },
      firstName: {
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
      }
    };

    this.set('validation', defaultValidationObject);
  },

  actions: {
    validateInput(key){
      const modelAttrValue = this._getModelAttributeValueFromKey(key);
      const isEmptyValue = isGivenEmptyValue(modelAttrValue);
      const status = getValidationStatus(isEmptyValue);
      const message = getErrorMessage(status, key);
      this._updateTextfieldModelObject(key, status, message);
    },

    validateInputEmail(key){
      const inputValue = this._getModelAttributeValueFromKey(key);
      const isNotValidEmail = !isEmailValid(inputValue);
      const status = getValidationStatus(isNotValidEmail);
      const message = getErrorMessage(status, key);
      this._updateTextfieldModelObject(key, status, message);
    },

    validateInputPassword(key){
      const inputValue = this._getModelAttributeValueFromKey(key);
      const isNotValidPasswordFormat = !isPasswordValid(inputValue);
      const status = getValidationStatus(isNotValidPasswordFormat);
      const message = getErrorMessage(status, key);
      this._updateTextfieldModelObject(key, status, message);
    },

    signup(){
      const userObject = this.get('user');
      userObject.save()
        .then((res) => {
          Ember.Logger.info(res);
          this._toggleConfirmation('Le compte a été bien créé!');
          this.sendAction('refresh');
          this._reset();
        })
        .catch((err) => {
          Ember.Logger.info(userObject.get('errors'));//details
          this._toggleConfirmation(err.errors);
        });
    }
  }
});
