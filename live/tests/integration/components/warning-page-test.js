import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | warning page', function() {
  setupComponentTest('warning-page', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#warning-page}}
    //     template content
    //   {{/warning-page}}
    // `);

    this.render(hbs`{{warning-page}}`);
    expect(this.$()).to.have.length(1);
  });
});
