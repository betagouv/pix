import {
  describe,
  it
} from 'mocha';
//import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | H1 - Timeout Jauge | ',function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('Test affichage ou non de la jauge',function(){
    //XXX: Deux cas car on test aussi une absence d'affichage
    it('doit afficher la jauge si exigée par le backend mais ne pas l\'afficher dans le cas contraire ',function () {
      visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      andThen(() => {
        expect($('.timeout-jauge')).to.have.lengthOf(1);
      });
      visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      andThen(() => {
        expect($('.timeout-jauge')).to.have.lengthOf(0);
      });
    });
  });
});
