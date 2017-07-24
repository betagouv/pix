import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | QrocmProposalComponent', function() {

  setupComponentTest('qrocm-proposal', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{qrocm-proposal}}`);
    expect(this.$()).to.have.length(1);
  });

  it('sets the initial inputs value according to the answer', function() {
    // given
    this.set('proposals', 'Two free softwares: ${software1#one} ${software2#two}');
    this.set('answer', { value: 'software1: Firefox\nsoftware2: LibreOffice\n' });
    // when
    this.render(hbs`{{qrocm-proposal proposals=proposals answer=answer}}`);
    // then
    const firstInput = this.$('.challenge-response__proposal-input').first();
    const secondInput = this.$('.challenge-response__proposal-input').last();
    expect(firstInput.val()).to.equal('Firefox');
    expect(secondInput.val()).to.equal('LibreOffice');
  });

  it('should send an action when one of the input value changes', function() {
    // given
    let didReceiveAction = false;
    let actionAnswerValue = null;
    const proposals = 'Two free softwares: ${software1#one} ${software2#two}';
    this.set('proposals', proposals);
    this.set('answer', { value: '' });
    this.set('externalAction', (answerValue) => {
      didReceiveAction = true;
      actionAnswerValue = answerValue;
    });
    this.render(hbs`{{qrocm-proposal proposals=proposals answer=answer answerChanged=(action externalAction)}}`);
    // when
    const inputElement = this.$('.challenge-response__proposal-input').last();
    inputElement.val('LibreOffice');
    inputElement.change();
    // then
    expect(inputElement.val()).to.equal('LibreOffice');
    expect(didReceiveAction).to.be.true;
    expect(actionAnswerValue).to.equal('software1: \'\'\nsoftware2: LibreOffice\n');
  });

});
