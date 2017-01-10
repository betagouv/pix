import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | modal mobile', function() {
  setupComponentTest('modal-mobile', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#modal-mobile}}
    //     template content
    //   {{/modal-mobile}}
    // `);

    this.render(hbs`{{modal-mobile}}`);
    expect(this.$()).to.have.length(1);
  });
});
