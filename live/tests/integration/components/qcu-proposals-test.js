import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | QCU proposals', function() {

  setupComponentTest('qcu-proposals', {
    integration: true
  });

  it('renders radio buttons and labels', function() {
    // given
    this.set('proposals', '- prop 1\n- prop 2\n- prop 3');
    this.set('answer', { value: '2' });
    // when
    this.render(hbs`{{qcu-proposals proposals=proposals answer=answer}}`);
    // then
    expect(this.$('.proposal-text')).to.have.lengthOf(3);
    expect(this.$('input[type=radio]')).to.have.lengthOf(3);
  });

  it('sets the initial radio state according to the answer', function() {
    // given
    this.set('proposals', '- prop 1\n- prop 2\n- prop 3');
    this.set('answer', { value: '2' });
    // when
    this.render(hbs`{{qcu-proposals proposals=proposals answer=answer}}`);
    // then
    expect(this.$('input[type=radio]').eq(0).prop('checked')).to.be.false;
    expect(this.$('input[type=radio]').eq(1).prop('checked')).to.be.true;
    expect(this.$('input[type=radio]').eq(2).prop('checked')).to.be.false;
  });

  it('sends an action when a radio value changes', function() {
    // given
    let didReceiveAction = false;
    let actionAnswerValue = null;
    this.set('proposals', '- prop 1\n- prop 2\n- prop 3');
    this.set('answer', { value: '3' });
    this.set('externalAction', (answerValue) => {
      didReceiveAction = true;
      actionAnswerValue = answerValue;
    });
    this.render(hbs`{{qcu-proposals proposals=proposals answer=answer answerChanged=(action externalAction)}}`);
    // when
    const radioButton = this.$('input[type=radio]').eq(1);
    radioButton.prop('checked', true);
    radioButton.change();
    // then
    expect(radioButton.prop('checked')).to.be.true;
    expect(didReceiveAction).to.be.true;
    expect(actionAnswerValue).to.equal('2');
  });

});
