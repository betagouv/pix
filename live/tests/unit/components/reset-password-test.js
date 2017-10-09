import Ember from 'ember';
import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

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
      const userWithBadPassword = { firstName: 'toto', lastName: 'riri', password: 'Pix123 0' };
      component.set('user', userWithBadPassword);
      this.render();

      // when
      component.send('validatePassword');

      // then
      expect(component.get('validation')).to.eql(VALIDATION_MAP['success']);
    });

  });

});
