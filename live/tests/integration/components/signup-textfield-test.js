import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | signup textfield', function() {
  setupComponentTest('signup-textfield', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#signup-textfield}}
    //     template content
    //   {{/signup-textfield}}
    // `);

    this.render(hbs`{{signup-textfield}}`);
    expect(this.$()).to.have.length(1);
  });
});
