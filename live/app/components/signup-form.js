import Ember from 'ember';
import isEmailValid from 'pix-live/utils/email-validator';
const ERROR_INPUT_MESSAGE_MAP = {
  firstname: 'Votre prénom n’est pas renseigné.',
  lastname: 'Votre nom n’est pas renseigné.',
  email: 'Votre email n’est pas valide.',
  password: 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.'
};

function cloneFromKey(key) {
  return Object.assign({}, this.get(key));
}
function updateObjectValue(status, message) {
  return {
    status: status,
    message: message
  };
}
export default Ember.Component.extend({
  classNames: ['signup-form'],
  cgu_checkbox: '',
  firstname: {
    status: 'default',
    message: ''
  },
  lastname: {
    status: 'default',
    message: ''
  },
  email: {
    status: 'default',
    message: ''
  },
  password: {
    status: 'default',
    message: ''
  },

  actions: {
    validateInput({value, key}){
      const status = (!value.trim()) ? 'error' : 'success';
      const message = (status === 'error')? ERROR_INPUT_MESSAGE_MAP[key] : '';
      let inputValidationObject = cloneFromKey.call(this, key);
      inputValidationObject = updateObjectValue(status, message);
      this.set(key, inputValidationObject);
    },

    validateInputEmail({value, key}){
      const status = isEmailValid(value.trim()) ? 'success' : 'error';
      const message = (status === 'error')? ERROR_INPUT_MESSAGE_MAP[key] : '';
      let emailValidationObject = cloneFromKey.call(this, key);
      emailValidationObject = updateObjectValue(status, message);
      this.set(key, emailValidationObject);
    },

    signup(){
      this.sendAction('signup');
    }
  }
});
