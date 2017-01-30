import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | comparison window', function() {
  setupComponentTest('comparison-window', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#comparison-window}}
    //     template content
    //   {{/comparison-window}}
    // `);

    this.render(hbs`{{comparison-window}}`);
    expect(this.$()).to.have.length(1);
  });

  it(`QCM | show a empty checkbox and a green text if it's the correct answer and was not checked` , function () {
    checkedCheckbox = [false, true, false, true];
    checkboxSolutions = [false, true, true];

    this.render(hbs`{{comparison-window }}`);

    expect(this.$('.challenge-response__proposal-input')[0].is(':checked'));



  });

});
