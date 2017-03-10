import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | feature list', function() {

  setupComponentTest('feature-list', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{feature-list}}`);
    expect(this.$()).to.have.length(1);
  });

});
