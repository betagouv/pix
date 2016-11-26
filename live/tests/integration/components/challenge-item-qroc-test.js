/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-item-qroc',
  'Integration: ChallengeItemQrocComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-item-qroc}}
      //     template content
      //   {{/challenge-item-qroc}}
      // `);

      this.render(hbs`{{challenge-item-qroc}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
