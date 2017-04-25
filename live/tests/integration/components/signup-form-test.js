import {expect} from 'chai';
import {
  describe,
  it
} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

const FORM_CONTAINER = '.signup-form-container';
const FORM_HEADING_CONTAINER = '.signup-form__heading-container';
const FORM_HEADING = '.signup-form__heading';
const EXPECTED_FORM_HEADING_CONTENT = 'Inscription gratuite';

const INPUT_TEXT_FIELD = '.signup-form__input-container';

const CHECKBOX_CGU_CONTAINER = '.signup-form__cgu-container';
const CHECKBOX_CGU_INPUT = '.signup-form__cgu-checkbox';
const CHECKBOX_CGU_LABEL = '.signup-form__cgu-label';

const CGU_LINK = '.signup__cgu-link';
const CGU_LINK_CONTENT = 'conditions d\'​utilisation de Pix';

const SUBMIT_BUTTON_CONTAINER = '.signup-form__submit-container';
const SUBMIT_BUTTON = '.signup__submit-button';
const SUBMIT_BUTTON_CONTENT = 'Je m\'inscris';

const MESSAGE_ERROR_STATUS = 'signup-textfield__message--error';
const EMPTY_FIRSTNAME_ERROR_MESSAGE = 'Votre prénom n’est pas renseigné.';

const EMPTY_LASTNAME_ERROR_MESSAGE = 'Votre nom n’est pas renseigné.';
const INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE = 'Votre mot de passe doit comporter au moins une lettre, un chiffre et' +
  ' 8 caractères.';
/*const MESSAGE_DEFAULT_STATUS = 'signup-textfield__message--default';
const MESSAGE_SUCCESS_STATUS = 'signup-textfield__message--success';*/

const userEmpty = Ember.Object.create({});


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
      expect(this.$()).to.have.length(1);
    });

    it(`Should return true if heading content gets <${EXPECTED_FORM_HEADING_CONTENT}>`, function () {
      expect(this.$(FORM_HEADING).text()).to.equal(EXPECTED_FORM_HEADING_CONTENT);
    });

    [
      {expectedRendering: 'form', input: FORM_CONTAINER, expected: 1},
      {expectedRendering: 'div', input: FORM_HEADING_CONTAINER, expected: 1},
      {expectedRendering: 'h1', input: FORM_HEADING, expected: 1},
      {expectedRendering: 'input', input: INPUT_TEXT_FIELD, expected: 4},
      {expectedRendering: 'checkbox container', input: CHECKBOX_CGU_CONTAINER, expected: 1},
      {expectedRendering: 'checkbox', input: CHECKBOX_CGU_INPUT, expected: 1},
      {expectedRendering: 'checkbox label', input: CHECKBOX_CGU_LABEL, expected: 1},
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

    it('when focus-out on an empty input#firstname, validation message gets error class', function () {
      // given
      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user}}`);

      // when
      this.$('#firstname').val('');
      this.$('#firstname').trigger('focusout');

      // then
      return wait().then(() => {
        const divSiblingClass = this.$('#firstname').prev().attr('class');
        const divSiblingContent = this.$('#firstname').prev().text();
        expect(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
        expect(divSiblingContent).to.equal(EMPTY_FIRSTNAME_ERROR_MESSAGE);
      });
    });

    it('when focus-out on an empty input#lastname, validation message gets error class', function () {
      // given
      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user}}`);

      // when
      this.$('#lastname').val('');
      this.$('#lastname').trigger('focusout');

      // then
      return wait().then(() => {
        const divSiblingClass = this.$('#lastname').prev().attr('class');
        const divSiblingContent = this.$('#lastname').prev().text();
        expect(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
        expect(divSiblingContent).to.equal(EMPTY_LASTNAME_ERROR_MESSAGE);
      });
    });

    it('when focus-out on an empty input#email, validation message gets error class', function () {
      // given
      this.set('user', userEmpty);
      this.render(hbs`{{signup-form user=user}}`);

      // when
      this.$('#email').val('');
      this.$('#email').trigger('focusout');

      // then
      return wait().then(() => {
        const divSiblingClass = this.$('#email').prev().attr('class');
        const divSiblingContent = this.$('#email').prev().text();
        expect(divSiblingClass).to.contain(MESSAGE_ERROR_STATUS);
        expect(divSiblingContent).to.equal(INCORRECT_PASSWORD_FORMAT_ERROR_MESSAGE);
      });
    });

  });

});
