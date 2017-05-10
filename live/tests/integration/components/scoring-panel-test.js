import Ember from 'ember';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | scoring panel', function() {

  setupComponentTest('scoring-panel', {
    integration: true
  });

  const assessmentWithTrophy = Ember.Object.create({estimatedLevel : 1, course : {isAdaptive : true}});
  const assessmentWithNoTrophyAndSomePix = Ember.Object.create({estimatedLevel : 0, pixScore : 20, course : {isAdaptive : true}});
  const assessmentWithNoTrophyAndNoPix = Ember.Object.create({estimatedLevel : 0, pixScore : 0, course : {isAdaptive : true}});

  it('renders', function() {
    this.render(hbs`{{scoring-panel}}`);
    expect(this.$()).to.have.length(1);
  });

  describe('view without trophy', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithNoTrophyAndNoPix);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('it should display nothing', function () {
      // then
      expect(this.$('.scoring-panel__trophy')).to.have.lengthOf(0);
      expect(this.$('.scoring-panel__text')).to.have.lengthOf(0);

    });
  });

  describe('view with a trophy', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithTrophy);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('should display the won trophy', function () {
      // then
      expect(this.$('.scoring-panel__trophy-div')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__trophy-level')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__trophy-bêta')).to.have.lengthOf(1);
    });

    it('should display the congratulations', function () {
      // then
      expect(this.$('.scoring-panel__congrats-course-name')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-felicitations')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-scoring')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-beta')).to.have.lengthOf(1);
    });

    it('should display the "back to home" button', function () {
      // then
      expect(this.$('.scoring-panel__index-link')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__index-link-back').text()).to.be.equal('REVENIR À L\'ACCUEIL');
    });
  });

  describe('view with no trophy but some pix', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithNoTrophyAndSomePix);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('should display the won medal', function () {
      // then
      expect(this.$('.scoring-panel__medal-div')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__medal-pix-score')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__medal-pix-text')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__medal-bêta')).to.have.lengthOf(1);
    });

    it('should display the congratulations', function () {
      // then
      expect(this.$('.scoring-panel__congrats-course-name')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-felicitations')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-scoring')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-beta')).to.have.lengthOf(1);
    });
  });
});
