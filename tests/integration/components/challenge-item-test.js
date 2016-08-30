import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { describe, before } from 'mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describeComponent(
  'challenge-item',
  'Integration | ChallengeItem component',
  {
    integration: true
  },
  function () {

    /*
     * TODO: find a way to make `this` works in mocha hooks such as `before` in order to mutualize and reduce code
     */

    function renderChallengeItem_WithASimpleChallenge(context, challengeAttributes = {}) {

      const challenge = Ember.Object.create(challengeAttributes);
      context.set('challenge', challenge);

      const assessment = Ember.Object.create({});
      context.set('assessment', assessment);

      context.render(hbs`{{challenge-item challenge assessment}}`);
    }

    function renderChallengeItem_WithChallengePreviewMode(context, challengeAttributes = {}) {

      const challenge = Ember.Object.create(challengeAttributes);
      context.set('challenge', challenge);

      context.render(hbs`{{challenge-item challenge}}`);
    }

    describe('for a given challenge', function () {

      it('should render challenge instruction', function () {
        // given
        const instruction = 'My challenge instruction';

        // when
        renderChallengeItem_WithASimpleChallenge(this, { instruction });

        // then
        expect(this.$('.challenge-instruction').text()).to.contains(instruction);
      });

      it('should render challenge proposals', function () {
        // when
        renderChallengeItem_WithASimpleChallenge(this, { proposalsAsArray: ['Xi', 'Fu', 'Mi'] });

        // then
        const $proposals = this.$('.challenge-proposal');
        expect($proposals).to.have.lengthOf(3);
        expect($proposals.eq(0).text()).to.contains('Xi');
        expect($proposals.eq(1).text()).to.contains('Fu');
        expect($proposals.eq(2).text()).to.contains('Mi');
      });

      it('should display "Skip" button ', function () {
        // when
        renderChallengeItem_WithASimpleChallenge(this);

        // then
        expect(this.$('.skip-button')).to.have.lengthOf(1);
      });

      it('should display "Validate" button ', function () {
        // when
        renderChallengeItem_WithASimpleChallenge(this);

        // then

        expect(this.$('.validate-button')).to.have.lengthOf(1);
      });

    });

    describe('when used with mode "challenge-preview"', function () {

      it('should not display "Skip" button', function () {
        // when
        renderChallengeItem_WithChallengePreviewMode(this);

        // then
        expect(this.$('.skip-button')).to.have.lengthOf(0);
      });

      it('should not display "Validate" button', function () {
        // when
        renderChallengeItem_WithChallengePreviewMode(this);

        // then
        expect(this.$('.validate-button')).to.have.lengthOf(0);
      });

    });

  }
);
