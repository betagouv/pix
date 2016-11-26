/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-item-generic',
  'Integration: ChallengeItemGenericComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-item-generic}}
      //     template content
      //   {{/challenge-item-generic}}
      // `);

      this.render(hbs`{{challenge-item-generic}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
