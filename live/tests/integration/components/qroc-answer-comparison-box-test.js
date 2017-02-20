import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | qroc answer comparison box', function () {
  setupComponentTest('qroc-answer-comparison-box', {
    integration: true
  });

  it('renders', function () {
    this.render(hbs`{{qroc-answer-comparison-box}}`);
    expect(this.$()).to.have.length(1);
  });
});
