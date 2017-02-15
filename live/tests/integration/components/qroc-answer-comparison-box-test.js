import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | qroc answer comparison box', function() {
  setupComponentTest('qroc-answer-comparison-box', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#qroc-answer-comparison-box}}
    //     template content
    //   {{/qroc-answer-comparison-box}}
    // `);

    this.render(hbs`{{qroc-answer-comparison-box}}`);
    expect(this.$()).to.have.length(1);
  });
});
