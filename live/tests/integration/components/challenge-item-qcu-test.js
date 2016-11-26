/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-item-qcu',
  'Integration: ChallengeItemQcuComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-item-qcu}}
      //     template content
      //   {{/challenge-item-qcu}}
      // `);

      this.render(hbs`{{challenge-item-qcu}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
