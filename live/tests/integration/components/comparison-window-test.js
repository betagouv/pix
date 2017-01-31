import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.skip('Integration | Component | comparison window', function() {
  setupComponentTest('comparison-window', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{comparison-window}}`);
    expect(this.$()).to.have.length(1);
  });

  it('QCM | show a empty checkbox and a green text if it\'s the correct answer and was not checked' , function () {
    const checkedCheckbox = [false, true, false, true];
    const checkboxSolutions = [false, true, true];

    this.render(hbs`{{comparison-window }}`);

    expect(this.$('.challenge-response__proposal-input')[0].is(':checked'));
    expect(checkedCheckbox).to.be.defined;
    expect(checkboxSolutions).to.be.defined;




  });

});
