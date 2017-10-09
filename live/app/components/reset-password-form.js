import Ember from 'ember';
import isPasswordValid from '../utils/password-validator';

const ERROR_PASSWORD_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.';
const VALIDATION_MAP = {
  default: {
    status: 'default', message: null
  },
  error: {
    status: 'error', message: ERROR_PASSWORD_MESSAGE
  },
  success: {
    status: 'success', message: null
  }
};

export default Ember.Component.extend({
  classNames: ['reset-password-form'],
  validation: VALIDATION_MAP['default'],

  fullname: Ember.computed('user', function() {
    return `${this.get('user.firstName')} ${ this.get('user.lastName')}`;
  }),

  actions: {
    validatePassword() {
      const password = this.get('user.password');
      const validationStatus = (isPasswordValid(password)) ? 'success' : 'error';
      this.set('validation', VALIDATION_MAP[validationStatus]);
    },

    handleResetPassword() {
      return this.get('user').save()
        .then(() => this.set('validation', VALIDATION_MAP['success']))
        .catch(() => this.set('validation', VALIDATION_MAP['error']));
    }
  }
});
