import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | g recaptcha', function() {
  setupComponentTest('g-recaptcha', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#g-recaptcha}}
    //     template content
    //   {{/g-recaptcha}}
    // `);

    this.render(hbs`{{g-recaptcha}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render the google recaptcha', function() {
    // given

    // when

    // then

  });
});
