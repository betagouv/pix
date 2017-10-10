import Ember from 'ember';
import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

const ERROR_PASSWORD_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et 8 caractères.';
const VALIDATION_MAP = {
  default: {
    status: 'default', message: null
  },
  error: {
    status: 'error', message: ERROR_PASSWORD_MESSAGE
  },
  success: {
    status: 'success', message: 'Votre mot de passe a été bien mis à jour'
  }
};

describe('Unit | Component | reset password form', function() {
  setupComponentTest('reset-password-form', {
    needs: ['component:form-textfield'],
    unit: true
  });

  it('should be rendered', function() {
    // given
    const component = this.subject();

    // when
    this.render();

    // then
    expect(component).to.be.ok;
    expect(this.$()).to.have.length(1);
  });

  describe('fullname', () => {

    const userIdentity = {
      firstName: 'Manu',
      lastName: 'Phillip'
    };

    const user = Ember.Object.create(userIdentity);

    it('should be computed when a user is provided', function() {
      // given
      const component = this.subject();
      component.set('user', user);
      const expectedFullname = `${userIdentity.firstName} ${userIdentity.lastName}`;

      // when
      this.render();

      // then
      expect(component.get('fullname')).to.equal(expectedFullname);
    });
  });

  describe('validatePassword', () => {

    let component;

    beforeEach(function() {
      component = this.subject();
    });

    it('should set validation status to default, when component is rendered', function() {
      // when
      this.render();

      // then
      expect(component.get('validation')).to.eql(VALIDATION_MAP['default']);
    });

    it('should set validation status to error, when there is an validation error on password field', function() {
      //given
      const userWithBadPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix' };
      component.set('user', userWithBadPassword);
      this.render();

      // when
      component.send('validatePassword');

      // then
      expect(component.get('validation')).to.eql(VALIDATION_MAP['error']);
    });

    it('should set validation status to success, when password is valid', function() {
      //given
      const userWithGoodPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix123 0 #' };
      component.set('user', userWithGoodPassword);
      this.render();

      // when
      component.send('validatePassword');

      // then
      expect(component.get('validation')).to.eql(VALIDATION_MAP['success']);
    });

  });

  describe('handleResetPassword', () => {
    let component;
    const save = () => {
      return Ember.RSVP.resolve();
    };

    const userWithGoodPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix123 0 #', save };

    beforeEach(function() {
      component = this.subject();
    });

    describe('When user password is saved', () => {
      it('should update validation with success data', function() {
        // given
        component.set('user', userWithGoodPassword);
        this.render();

        // when
        Ember.run(() => {
          component.send('handleResetPassword');
        });

        // then
        expect(component.get('validation')).to.eql(VALIDATION_MAP['success']);
      });

      it('should reset paswword input', function() {
        // given
        component.set('user', userWithGoodPassword);
        this.render();

        // when
        Ember.run(() => {
          component.send('handleResetPassword');
        });

        // then
        expect(component.get('user.password')).to.eql(null);
      });

    });

    describe('When user password saving fails', () => {
      const saveWithRejection = () => {
        return Ember.RSVP.reject();
      };

      it('should set validation with errors data', function() {
        // given
        const userWithBadPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix', save: saveWithRejection };
        component.set('user', userWithBadPassword);
        this.render();

        // when
        Ember.run(() => {
          component.send('handleResetPassword');
        });

        // then
        expect(component.get('validation')).to.eql(VALIDATION_MAP['error']);
      });
    });

  });
});
