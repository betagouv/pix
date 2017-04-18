import {expect} from 'chai';
import {
  describe,
  it
} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

const userEmpty = Ember.Object.create({});
const FORM_CONTAINER = '.signup-form-container';
const INPUT_TEXT_FIELD = '.signup-form__input-container';
const CHECKBOX_CGU_CONTAINER = '.signup-form__cgu-container';
const SUBMIT_BUTTON_CONTAINER = '.signup-form__submit-container';
const CGU_LINK = '.signup__cgu-link';
const CGU_LINK_CONTENT = 'conditions d\'​utilisation de Pix';
const SUBMIT_BUTTON = '.signup__submit-button';
const SUBMIT_BUTTON_CONTENT = 'Je m\'inscris';


describe.only('Integration | Component | signup form', function () {
  setupComponentTest('signup-form', {
    integration: true
  });


  describe('Component Rendering', function () {

    beforeEach(function () {
      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user}}`);
    });

    it('renders', function () {
      // Then
      expect(this.$()).to.have.length(1);
    });

    [
      {expectedRendering: 'form', input: FORM_CONTAINER, expected: 1},
      {expectedRendering: 'input', input: INPUT_TEXT_FIELD, expected: 4},
      {expectedRendering: 'checkbox', input: CHECKBOX_CGU_CONTAINER, expected: 1},
      {expectedRendering: 'button', input: SUBMIT_BUTTON_CONTAINER, expected: 1},

    ].forEach(function ({expectedRendering, input, expected}) {

      it(`Should render ${expectedRendering}`, function () {
        expect(this.$(input)).to.have.length(expected);
      });

    });

    [
      {
        expectedRendering: 'link',
        input: CGU_LINK,
        expectedLength: 1,
        expectedValue: CGU_LINK_CONTENT,
        expectedType: 'a'
      },
      {
        expectedRendering: 'link',
        input: SUBMIT_BUTTON,
        expectedLength: 1,
        expectedValue: SUBMIT_BUTTON_CONTENT,
        expectedType: 'button'
      },

    ].forEach(function ({expectedRendering, input, expectedLength, expectedValue, expectedType}) {

      it(`Should render ${expectedRendering}`, function () {
        expect(this.$(input)).to.have.length(expectedLength);
        expect(this.$(input).text()).to.equal(expectedValue);
        expect(this.$(input).prop('nodeName')).to.equal(expectedType.toUpperCase());
      });

    });
  });


  describe('Component behavior', function () {

    it.skip('should return true if action <Validate> is handled', function () {
      // given
      let isValidateInputHandled = false;
      this.on('validateInput', function (args) {
        isValidateInputHandled = args;
      });

      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user}}`);
      // when

      // then
      expect(isValidateInputHandled).to.be.true;
    });

    it('should return true if action <Signup> is handled', function () {
      // given
      let isFormSubmitted = false;
      this.on('signup', function () {
        isFormSubmitted = true;
      });

      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user signup="signup"}}`);

      // when
      $(SUBMIT_BUTTON).click();

      // then
      return wait().then(() => {
        expect(isFormSubmitted).to.be.true;
      });
    });
  });

  //action sendAction, render component, provided data
  // Handle any actions with
});
