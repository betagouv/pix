import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describeComponent(
  'challenge-item',
  'Integration: ChallengeItemComponent',
  {
    integration: true
  },
  function () {

    it('should render challenge instruction', function () {
      // given
      const challenge = Ember.Object.create({
        instruction: 'My challenge instruction'
      });
      this.set('challenge', challenge);

      // when
      this.render(hbs`{{challenge-item challenge=challenge}}`);

      // then
      const $instruction = this.$('.challenge-instruction');
      expect($instruction.text()).to.contains(challenge.get('instruction'));
    });

    it('should render challenge proposals', function () {
      // given
      const challenge = Ember.Object.create({
        proposalsAsArray: ['Xi', 'Fu', 'Mi']
      });
      this.set('challenge', challenge);

      // when
      this.render(hbs`{{challenge-item challenge=challenge}}`);

      // then
      const $proposals = this.$('.challenge-proposal');
      expect($proposals).to.have.lengthOf(3);
      expect($proposals.eq(0).text()).to.contains('Xi');
      expect($proposals.eq(1).text()).to.contains('Fu');
      expect($proposals.eq(2).text()).to.contains('Mi');
    });
  }
);
