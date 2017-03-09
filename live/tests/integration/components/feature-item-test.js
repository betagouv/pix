import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | feature item', function() {
  setupComponentTest('feature-item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#feature-item}}
    //     template content
    //   {{/feature-item}}
    // `);

    this.render(hbs`{{feature-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
