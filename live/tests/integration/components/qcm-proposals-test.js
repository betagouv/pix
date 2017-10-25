import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | QCM proposals', function() {

  setupComponentTest('qcm-proposals', {
    integration: true
  });

  it('renders checkboxes and labels', function() {
    // given
    this.set('proposals', '- possibilite 1, et/ou\n - possibilite 2');
    this.set('answer', { value: '' });
    // when
    this.render(hbs`{{qcm-proposals proposals=proposals answer=answer}}`);
    // then
    expect(this.$('label').first().text().trim()).to.equal('possibilite 1, et/ou');
    expect(this.$('label').last().text().trim()).to.equal('possibilite 2');
  });

  it('sets the initial checkbox state according to the answer', function() {
    // given
    this.set('proposals', '- possibilite 1, et/ou\n - possibilite 2');
    this.set('answer', { value: '2' });
    // when
    this.render(hbs`{{qcm-proposals proposals=proposals answer=answer}}`);
    // then
    const firstCheckbox = this.$('input[type=checkbox]').first();
    const secondCheckbox = this.$('input[type=checkbox]').last();
    expect(firstCheckbox.prop('checked')).to.be.false;
    expect(secondCheckbox.prop('checked')).to.be.true;
  });

  it('should send an action when a checkbox value changes', function() {
    // given
    let didReceiveAction = false;
    let actionAnswerValue = null;
    this.set('proposals', '- possibilite 1, et/ou\n - possibilite 2');
    this.set('answer', { value: '' });
    this.set('externalAction', (answerValue) => {
      didReceiveAction = true;
      actionAnswerValue = answerValue;
    });
    this.render(hbs`{{qcm-proposals proposals=proposals answer=answer answerChanged=(action externalAction)}}`);
    // when
    const checkbox = this.$('input[type=checkbox]').last();
    checkbox.prop('checked', true);
    checkbox.change();
    // then
    expect(checkbox.prop('checked')).to.be.true;
    expect(didReceiveAction).to.be.true;
    expect(actionAnswerValue).to.equal('2');
  });

});

