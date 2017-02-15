import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | course item', function() {
  setupComponentTest('course-item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#course-item}}
    //     template content
    //   {{/course-item}}
    // `);

    this.render(hbs`{{course-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
