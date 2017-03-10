import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | qcm solution panel', function() {
  setupComponentTest('qcm-solution-panel', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#qcm-solution-panel}}
    //     template content
    //   {{/qcm-solution-panel}}
    // `);

    this.render(hbs`{{qcm-solution-panel}}`);
    expect(this.$()).to.have.length(1);
  });
});
