import { expect } from 'chai';
import EmberObject from '@ember/object';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | challenge item qmail', function() {
  setupComponentTest('challenge-item-qmail', {
    integration: true
  });

  it('renders', function() {
    // When
    this.render(hbs`{{challenge-item-qmail}}`);

    // Then
    expect(this.$()).to.have.length(1);
  });

  let assessment;
  let challenge;

  beforeEach(() => {
    assessment = EmberObject.create({});
    challenge = EmberObject.create({
      id: 'recTJ23Nj3bnkfl',
      instruction: 'Pour valider cette épreuve ...'
    });
  });

  it('displays the instruction block', function() {
    // Given
    this.set('assessment', assessment);
    this.set('challenge', challenge);

    // When
    this.render(hbs `{{challenge-item-qmail challenge=challenge assessment=assessment}}`);

    // Then
    const instructionPanel = document.querySelector('.challenge-statement__instruction-section');
    expect(instructionPanel).to.exist;
    expect(instructionPanel).to.contain.text('Pour valider cette épreuve ...');
  });

  describe('confirmation area', function() {
    it('should have a confirmation QMAIL area', function() {
      // Given
      this.set('assessment', assessment);
      this.set('challenge', challenge);

      // When
      this.render(hbs `{{challenge-item-qmail challenge=challenge assessment=assessment}}`);

      // Then
      const confirmationArea = document.querySelector('.rounded-panel.challenge-response');

      expect(confirmationArea).to.exist;
      expect(confirmationArea).to.contain('.rounded-panel__row.challenge-proposals');

    });

    it('should ask you to assert that you fullfilled the challenge\'s requirements', function() {
      // Given
      this.set('assessment', assessment);
      this.set('challenge', challenge);

      // When
      this.render(hbs `{{challenge-item-qmail challenge=challenge assessment=assessment}}`);

      // Then
      const confirmationContent = document.querySelector('.rounded-panel__row.challenge-proposals');
      expect(confirmationContent).to.contain('input[type=checkbox]');
      expect(confirmationContent).to.contain('label');

      const confirmationCheckox = document.querySelector('input[type=checkbox]');
      expect(confirmationCheckox).to.have.attribute('id', 'checkbox_qmail_confirmation');

      const confirmationLabel = document.querySelector('label');
      expect(confirmationLabel).to.have.attribute('for', 'checkbox_qmail_confirmation');
      expect(confirmationLabel).to.have.attribute('class', 'label-checkbox-proposal--qmail');
      expect(confirmationLabel).to.have.text('Je l\'ai fait');
    });
  });

  it('should allow you to skip or validate', function() {
    // Given
    this.set('assessment', assessment);
    this.set('challenge', challenge);

    // When
    this.render(hbs `{{challenge-item-qmail challenge=challenge assessment=assessment}}`);

    // Then
    const validationArea = document.querySelector('.challenge-actions');
    expect(validationArea).to.exist;
    expect(validationArea).to.contain('.challenge-actions__action.challenge-actions__action-validate');
    expect(validationArea).to.contain('.challenge-actions__action.challenge-actions__action-skip');
  });

});

