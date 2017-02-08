import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

const LINK_VIEW = '.feedback-panel__view--link';
const FORM_VIEW = '.feedback-panel__view--form';
const MERCIX_VIEW = '.feedback-panel__view--mercix';
const OPEN_LINK = '.feedback-panel__open-link';
const BUTTON_SEND = '.feedback-panel__button--send';
const BUTTON_CANCEL = '.feedback-panel__button--cancel';

function expectLinkViewToBeVisible(component) {
  expect(component.$(LINK_VIEW)).to.have.length(1);
  expect(component.$(FORM_VIEW)).to.have.length(0);
  expect(component.$(MERCIX_VIEW)).to.have.length(0);
}

function expectFormViewToBeVisible(component) {
  expect(component.$(LINK_VIEW)).to.have.length(0);
  expect(component.$(FORM_VIEW)).to.have.length(1);
  expect(component.$(MERCIX_VIEW)).to.have.length(0);
}

function expectMercixViewToBeVisible(component) {
  expect(component.$(LINK_VIEW)).to.have.length(0);
  expect(component.$(FORM_VIEW)).to.have.length(0);
  expect(component.$(MERCIX_VIEW)).to.have.length(1);
}

describe('Integration | Component | feedback-panel', function () {

  setupComponentTest('feedback-panel', {
    integration: true
  });

  describe('Default rendering', function () {

    it('should display only the "link" view', function () {
      // when
      this.render(hbs`{{feedback-panel}}`);
      // then
      expectLinkViewToBeVisible(this);
    });

  });

  describe('Link view', function () {

    beforeEach(function () {
      this.render(hbs`{{feedback-panel status='FORM_CLOSED'}}`);
    });

    it('should display only the "link" view', function () {
      expectLinkViewToBeVisible(this);
    });

    it('the link label should be "Signaler un problème"', function () {
      expect(this.$(OPEN_LINK).text()).to.contains('Signaler un problème');
    });

    it('clicking on the open link should hide the "link" view and display the "form" view', function () {
      // when
      this.$(OPEN_LINK).click();
      // then
      expectFormViewToBeVisible(this);
    });

  });

  describe('Form view', function () {

    let isSaveMethodCalled = false;
    const storeStub = Ember.Service.extend({
      createRecord() {
        return Object.create({
          email: 'shi@fu.me',
          content: 'Lorem ipsum dolor sit amet.',
          save() {
            isSaveMethodCalled = true;
            return Ember.RSVP.resolve();
          }
        });
      }
    });

    beforeEach(function () {
      this.render(hbs`{{feedback-panel status='FORM_OPENED'}}`);

      // stub store service
      this.register('service:store', storeStub);
      this.inject.service('store', { as: 'store' });
      isSaveMethodCalled = false;
    });

    it('should display only the "form" view', function () {
      expectFormViewToBeVisible(this);
    });

    it('should contain email input field', function () {
      const $email = this.$('input.feedback-panel__email');
      expect($email).to.have.length(1);
      expect($email.attr('placeholder')).to.equal('Votre email (optionnel)');
    });

    it('should contain content textarea field', function () {
      const $password = this.$('textarea.feedback-panel__content');
      expect($password).to.have.length(1);
      expect($password.attr('placeholder')).to.equal('Votre message');
    });

    it('should contain "send" button with label "Envoyer" and placeholder "Votre email (optionnel)"', function () {
      const $buttonSend = this.$(BUTTON_SEND);
      expect($buttonSend).to.have.length(1);
      expect($buttonSend.text()).to.equal('Envoyer');
    });

    it('should contain "cancel" button with label "Annuler" and placeholder "Votre message"', function () {
      const $buttonCancel = this.$(BUTTON_CANCEL);
      expect($buttonCancel).to.have.length(1);
      expect($buttonCancel.text()).to.equal('Annuler');
    });

    it('clicking on "cancel" button should close the "form" view and and display the "link" view', function () {
      // given
      const $buttonCancel = this.$(BUTTON_CANCEL);
      // when
      $buttonCancel.click();
      // then
      expectLinkViewToBeVisible(this);
    });

    it('clicking on "send" button should close the "form" view and and display the "mercix" view', function () {
      // given
      const $buttonSend = this.$(BUTTON_SEND);
      // when
      $buttonSend.click();
      // then
      expectMercixViewToBeVisible(this);
    });

    it('clicking on "send" button should save the feedback into the store / API', function () {
      // given
      const $buttonSend = this.$(BUTTON_SEND);
      // when
      $buttonSend.click();
      // then
      expect(isSaveMethodCalled).to.be.true;
    });
  });

  describe('Form view', function () {

    beforeEach(function () {
      this.render(hbs`{{feedback-panel status='FORM_SENT'}}`);
    });

    it('should display only the "mercix" view', function () {
      expectMercixViewToBeVisible(this);
    });

  });
});
