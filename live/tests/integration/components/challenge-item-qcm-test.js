/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'challenge-item-qcm',
  'Integration: ChallengeItemQcmComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#challenge-item-qcm}}
      //     template content
      //   {{/challenge-item-qcm}}
      // `);

      this.render(hbs`{{challenge-item-qcm}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
