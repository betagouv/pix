import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describe('Integration | Component | comparison-window', function () {

  setupComponentTest('comparison-window', {
    integration: true
  });

  describe('rendering', function () {

    it('renders', function () {
      this.render(hbs`{{comparison-window}}`);
      expect(this.$()).to.have.lengthOf(1);
    });

    it('should render challenge result (in the header)', function () {
      // when
      this.render(hbs`{{comparison-window}}`);
      // then
      expect(this.$('.comparison-window__header')).to.have.length(1);
    });

    it('should render an SVG that correspond to a correct answer', function () {
      // given
      const answer = Ember.Object.extend({ id: 'answer_id', isResultOk: true }).create();
      this.set('answer', answer);
      // when
      this.render(hbs`{{comparison-window answer=answer }}`);
      // then
      expect(this.$('svg.svg-correct-answer')).to.have.length(1);
    });

    it('should render an SVG that correspond to an incorrect answer', function () {
      // given
      const answer = Ember.Object.extend({ id: 'answer_id', isResultNotOk: true }).create();
      this.set('answer', answer);
      // when
      this.render(hbs`{{comparison-window answer=answer }}`);
      // then
      expect(this.$('svg.svg-incorrect-answer')).to.have.length(1);
    });

    it('should render an SVG that correspond to an abandoned answer', function () {
      // given
      const answer = Ember.Object.extend({ id: 'answer_id', isResultWithoutAnswer: true }).create();
      this.set('answer', answer);
      // when
      this.render(hbs`{{comparison-window answer=answer }}`);
      // then
      expect(this.$('svg.svg-without-answer')).to.have.length(1);
    });

    it('should render an SVG that correspond to a timedout answer', function () {
      // given
      const answer = Ember.Object.extend({ id: 'answer_id', isResultTimedOut: true }).create();
      this.set('answer', answer);
      // when
      this.render(hbs`{{comparison-window answer=answer }}`);
      // then
      expect(this.$('svg.svg-timedout-answer')).to.have.length(1);
    });

    it('should render challenge instruction', function () {
      // when
      this.render(hbs`{{comparison-window}}`);
      // then
      expect(this.$('.comparison-window__challenge-instruction')).to.have.length(1);
    });

    it('should render corrected answers when challenge', function () {
      // when
      this.render(hbs`{{comparison-window}}`);
      // then
      expect(this.$('.comparison-window__corrected-answers')).to.have.length(1);
    });

    it('should render corrected answers when challenge type is QROC', function () {
      // given
      const challenge = Ember.Object.create({ type: 'QROC' });
      this.set('challenge', challenge);

      // when
      this.render(hbs`{{comparison-window challenge=challenge}}`);
      // then
      expect(this.$('.comparison-window__corrected-answers--qroc')).to.have.length(1);
    });

    it('should render a feedback panel', function () {
      //when
      this.render(hbs`{{comparison-window}}`);
      //then
      expect(this.$('.comparison-window__feedback-panel')).to.have.length(1);
    });
  });
});
