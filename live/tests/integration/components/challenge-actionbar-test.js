/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-actionbar',
  'Integration: ChallengeActionbarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-actionbar}}
      //     template content
      //   {{/challenge-actionbar}}
      // `);

      this.render(hbs`{{challenge-actionbar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
