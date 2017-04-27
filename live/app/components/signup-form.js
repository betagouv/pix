import Ember from 'ember';
import isEmailValid from 'pix-live/utils/email-validator';
import isPasswordValid from '../utils/password-validator';

const ERROR_INPUT_MESSAGE_MAP = {
  firstname: 'Votre prénom n’est pas renseigné.',
  lastname: 'Votre nom n’est pas renseigné.',
  email: 'Votre email n’est pas valide.',
  password: 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.'
};

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

  actions: {
    validateInput({value, key}){
      const status = (!value.trim()) ? 'error' : 'success';
      const message = (status === 'error') ? ERROR_INPUT_MESSAGE_MAP[key] : null;
      this.updateTextfieldModelObject(key, status, message);
    },

    validateInputEmail({value, key}){
      const status = isEmailValid(value) ? 'success' : 'error';
      const message = (status === 'error') ? ERROR_INPUT_MESSAGE_MAP[key] : null;
      this.updateTextfieldModelObject(key, status, message);
    },

    validateInputPassword({value, key}){
      const status = isPasswordValid(value) ? 'success' : 'error';
      const message = (status === 'error') ? ERROR_INPUT_MESSAGE_MAP[key] : null;
      this.updateTextfieldModelObject(key, status, message);
    },

    signup(){
      this.sendAction('signup');
    }
  }
});
