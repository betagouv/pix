import {expect} from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | I1 - Warning prochaine page timée  | ', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('Test affichage ou non de la page avec le warning', function () {
    //XXX: Deux cas car on test aussi une absence d'affichage
    it('i1.2- doit cacher le contenu du challenge si l\'épreuve est timée mais l\'afficher dans le cas contraire ', function () {
      visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      andThen(() => {
        expect($('.challenge-statement')).to.have.lengthOf(0);
      });

      visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      andThen(() => {
        expect($('.challenge-statement')).to.have.lengthOf(1);
      });
    });

    it('i1.3- doit afficher la page avec le warning si l\'épreuve est timée mais ne pas l\'afficher dans le cas contraire ', function () {
      visit('/assessments/ref_assessment_id/challenges/ref_qcm_challenge_id');
      andThen(() => {
        expect($('.challenge-item-warning')).to.have.lengthOf(1);
      });
      visit('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      andThen(() => {
        expect($('.challenge-item-warning')).to.have.lengthOf(0);
      });
    });

  });
});
