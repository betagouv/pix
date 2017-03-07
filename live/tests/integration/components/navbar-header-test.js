import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | navbar-header', function() {

  setupComponentTest('header-navbar', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{navbar-header}}`);
    expect(this.$()).to.have.length(1);
  });
});
