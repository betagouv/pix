import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | scoring panel', function() {
  setupComponentTest('scoring-panel', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#scoring-panel}}
    //     template content
    //   {{/scoring-panel}}
    // `);

    this.render(hbs`{{scoring-panel}}`);
    expect(this.$()).to.have.length(1);
  });
});
