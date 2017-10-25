import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | QROC proposal', function() {

  setupComponentTest('qroc-proposal', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{qroc-proposal}}`);
    expect(this.$()).to.have.length(1);
  });

  describe('Component behavior when user fill input of challenge:', function() {

    it('should display a value when a non-empty value is providing by user', function() {
      // given
      const proposals = '${myInput}';
      this.set('proposals', proposals);
      this.set('answer', { value: 'myValue' });
      // when
      this.render(hbs`{{qroc-proposal proposals=proposals answer=answer}}`);
      // then
      expect(this.$('.challenge-response__proposal-input').val()).to.equal('myValue');
    });
  });

  //     block.push(Ember.Object.create({name: 'myInput', input: 'mylabel'}));

  describe('Component behavior when user skip challenge:', function() {

    [
      { input: 'aband', output: 'aband' },
      { input: '#aband#', output: '#aband#' },
      { input: 'aband#', output: 'aband#' },
      { input: 'ABAND', output: 'ABAND' },
      { input: '#ABAND', output: '#ABAND' },
      { input: 'ABAND#', output: 'ABAND#' },
      { input: '#ABAND#', output: '' },
      { input: '', output: '' }
    ].forEach(({ input, output }) => {

      it(`should display '' value ${input} is providing to component`, function() {
        // given
        this.set('proposals', '${myLabel}');
        this.set('answer', { value: input });
        // when
        this.render(hbs`{{qroc-proposal proposals=proposals answer=answer}}`);
        // then
        expect(this.$('.challenge-response__proposal-input').val()).to.be.equal(output);
      });

    });
  });

  it('should send an action when the input value changes', function() {
    // given
    let didReceiveAction = false;
    let actionAnswerValue = null;
    const proposals = '${myInput}';
    this.set('proposals', proposals);
    this.set('answer', { value: '' });
    this.set('externalAction', (answerValue) => {
      didReceiveAction = true;
      actionAnswerValue = answerValue;
    });
    this.render(hbs`{{qroc-proposal proposals=proposals answer=answer answerChanged=(action externalAction)}}`);
    // when
    const inputElement = this.$('.challenge-response__proposal-input');
    inputElement.val('My answer');
    inputElement.change();
    // then
    expect(inputElement.val()).to.equal('My answer');
    expect(didReceiveAction).to.be.true;
    expect(actionAnswerValue).to.equal('My answer');
  });
});
