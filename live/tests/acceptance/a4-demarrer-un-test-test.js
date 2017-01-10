import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | a4 - Démarrer un test |', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  beforeEach(function () {
    return visit('/');
  });

  it('a4.1 Je peux démarrer un test depuis la liste des tests de la page d\'accueil', function() {
    const $startLink = findWithAssert('.start-button');
    expect($startLink.text()).to.contains('Démarrer le test');
  });

  it('a4.2 Quand je démarre un test, je suis redirigé vers la première épreuve du test', function() {
    const $startLink = findWithAssert('.start-button');
    return click($startLink).then(function() {
      findWithAssert('#assessment-challenge');
      expect(currentURL()).to.contains('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
    });
  });

  it('a4.3 Quand je démarre un test sur mobile, une modale m\'averti que l\'expérience ne sera pas optimale', function(done) {
    const $startLink = findWithAssert('.start-button');
    const $jsModalMobile = findWithAssert('#js-modal-mobile');
    triggerEvent('.first-page', 'simulateMobileScreen');

    andThen(() => {
      window.localStorage.clear();
      expect(currentURL()).to.equals('/');
      expect($jsModalMobile.css('display')).to.equals('none');
    });
    click($startLink);
    andThen(() => {
      // XXX : ickiest hack : wait 300ms for bootstrap transition to complete
      setTimeout(function() {
        expect($jsModalMobile.css('display')).to.equals('block');
        expect(currentURL()).to.equals('/');
        $('button[data-dismiss]').click();
        done();
      }, 300);
    });
  });

});
