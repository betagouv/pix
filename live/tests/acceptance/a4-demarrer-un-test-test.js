import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import { startApp, destroyApp } from '../helpers/application';

const URL_OF_FIRST_TEST = '/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id';
const MODAL_SELECTOR = '.modal.fade.js-modal-mobile.in';
const START_BUTTON = '.course-item__begin-button';

describe.only('Acceptance | a4 - Démarrer un test |', function() {

  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('a4.2 Je peux démarrer un test directement depuis la nouvelle url "courses/:course_id"', function() {
    // when
    visit('/courses/ref_course_id');

    // then
    andThen(() => {
      Ember.run.later(function() {
        expect(currentURL()).to.equal('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      }, 500);
    });
  });

  it('a4.4 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function() {
    // given
    visit('/');

    // when
    click(START_BUTTON);

    // then
    andThen(() => {
      Ember.run.later(function() {
        findWithAssert('.assessment-challenge');
        expect(currentURL()).to.contain(URL_OF_FIRST_TEST);
      }, 500);
    });
  });

  it('a4.5 Quand je démarre un test sur mobile, une modale m\'averti que l\'expérience ne sera pas optimale, mais je peux quand même continuer', function(done) {
    visit('/');

    andThen(() => {
      expect(find(MODAL_SELECTOR)).to.have.lengthOf(0);
    });

    // test on mobile
    triggerEvent('.course-list', 'simulateMobileScreen');

    // clear local storage
    andThen(() => {
      window.localStorage.clear();
      expect(currentURL()).to.equals('/');
      expect(find(MODAL_SELECTOR)).to.have.lengthOf(0);
    });

    // start a test
    click(START_BUTTON);

    // blocked by modal
    andThen(() => {
      // XXX : ickiest hack : wait 500ms for bootstrap transition to complete
      Ember.run.later(function() {
        expect(find(MODAL_SELECTOR)).to.have.lengthOf(1);
        expect(currentURL()).to.equals('/');
        find('a[data-dismiss]').click();

        return click(START_BUTTON).then(() => {
          expect(currentURL()).to.contain(URL_OF_FIRST_TEST);
          done();
        });
      }, 500);
    });
  });

  it('a4.6 Quand je RE-démarre un test sur mobile, la modale NE s\'affiche PAS', function(done) {
    const $startLink = findWithAssert(START_BUTTON);
    triggerEvent('.index-page', 'simulateMobileScreen');

    andThen(() => {
      Ember.run.later(function() {
        expect(currentURL()).to.equals('/');
        expect(find(MODAL_SELECTOR)).to.have.lengthOf(0);
      }, 500);
    });
    click($startLink);
    andThen(() => {
      expect(currentURL()).to.contain('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      done();
    });
  });

});
