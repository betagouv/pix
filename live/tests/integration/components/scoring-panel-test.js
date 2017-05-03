import Ember from 'ember';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.only('Integration | Component | scoring panel', function() {

  setupComponentTest('scoring-panel', {
    integration: true
  });

  const assessmentWithTrophy = Ember.Object.create({estimatedLevel : 1, course : {isAdaptive : true}});
  const assessmentWithNoTrophy = Ember.Object.create({estimatedLevel : 0, course : {isAdaptive : true}});

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#scoring-panel}}
    //     template content
    //   {{/scoring-panel}}
    // `);

    this.render(hbs`{{scoring-panel}}`);
    expect(this.$()).to.have.length(1);
  });

  describe('view without trophy', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithNoTrophy);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('it should display nothing', function () {
      // then
      expect(this.$('.scoring-panel_trophy')).to.have.length(0);
      expect(this.$('.scoring-panel_text')).to.have.length(0);

    });
  });

  describe('view with a trophy', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithTrophy);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('should display the won trophy', function () {
      // then
      expect(this.$('.scoring-panel_trophy-svg')).to.have.length(1);
      expect(this.$('.scoring-panel_trophy-level')).to.have.length(1);
      expect(this.$('.scoring-panel_trophy-bêta')).to.have.length(1);
    });

    it('should display the congratulations', function () {
      // then
      expect(this.$('.scoring-panel_congrats-course-name')).to.have.length(1);
      expect(this.$('.scoring-panel_congrats-felicitations')).to.have.length(1);
      expect(this.$('.scoring-panel_congrats-scoring')).to.have.length(1);
      expect(this.$('.scoring-panel_congrats-beta')).to.have.length(1);
    });
  });
});
