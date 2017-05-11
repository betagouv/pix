import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | scoring panel tantpix', function() {
  setupComponentTest('scoring-panel-tantpix', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#scoring-panel-tantpix}}
    //     template content
    //   {{/scoring-panel-tantpix}}
    // `);

    this.render(hbs`{{scoring-panel-tantpix}}`);
    expect(this.$()).to.have.length(1);
  });

});
