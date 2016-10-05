/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-instruction',
  'Integration: ChallengeInstructionComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-instruction}}
      //     template content
      //   {{/challenge-instruction}}
      // `);

      this.render(hbs`{{challenge-instruction}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
