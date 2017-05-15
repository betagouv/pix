import Ember from 'ember';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | scoring panel', function() {

  setupComponentTest('scoring-panel', {
    integration: true
  });

  const assessmentWithTrophy = Ember.Object.create({estimatedLevel : 1, pixScore : 67, course : {isAdaptive : true}});
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
      expect(this.$('.scoring-panel__reward')).to.have.lengthOf(1);
      expect(this.$('.trophy-item')).to.have.lengthOf(1);
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

  describe('view with a medal (no trophy but some pix)', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithNoTrophyAndSomePix);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('should display the won medal', function () {
      // then
      // then
      expect(this.$('.scoring-panel__reward')).to.have.lengthOf(1);
      expect(this.$('.medal-item')).to.have.lengthOf(1);
    });

    it('should display the congratulations', function () {
      // then
      expect(this.$('.scoring-panel__congrats-course-name')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-pas-mal')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-scoring')).to.have.lengthOf(1);
      expect(this.$('.scoring-panel__congrats-beta')).to.have.lengthOf(1);
    });
  });

  describe('#backToHome Button', function () {

    beforeEach(function () {
      this.set('assessment', assessmentWithTrophy);
      this.render(hbs`{{scoring-panel assessment=assessment}}`);
    });

    it('should not have a blue border when the user clicks on its', function () {
      // then
      expect(this.$('.scoring-panel__index-link__element').css('outline')).to.equal('rgb(255, 255, 255) none 0px');
    });
  });
});
