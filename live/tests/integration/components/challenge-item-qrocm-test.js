/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-item-qrocm',
  'Integration: ChallengeItemQrocmComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-item-qrocm}}
      //     template content
      //   {{/challenge-item-qrocm}}
      // `);

      this.render(hbs`{{challenge-item-qrocm}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
