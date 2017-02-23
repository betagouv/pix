import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | qrocm solution panel', function() {
  setupComponentTest('qrocm-solution-panel', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#qrocm-solution-panel}}
    //     template content
    //   {{/qrocm-solution-panel}}
    // `);

    this.render(hbs`{{qrocm-solution-panel}}`);
    expect(this.$()).to.have.length(1);
  });
});
