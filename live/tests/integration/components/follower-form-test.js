import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | follower form', function() {
  setupComponentTest('follower-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#follower-form}}
    //     template content
    //   {{/follower-form}}
    // `);

    this.render(hbs`{{follower-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
