import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | adaptive course list', function() {
  setupComponentTest('adaptive-course-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#adaptive-course-list}}
    //     template content
    //   {{/adaptive-course-list}}
    // `);

    this.render(hbs`{{adaptive-course-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
