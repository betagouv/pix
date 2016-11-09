import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 196 - Validation automatique d'un QCM, visualisation du résultat ", function() {

  let application;
  let $summary;


  before(function() {
    application = startApp();
  });

  after(function() {
    destroyApp(application);
  });

  before(function() {
    return visit(`/assessments/completed_assessment_qcm_id/results`);
  });


  it("196.2. Pour un QCM avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
    let $cell = findWithAssert('img[data-toggle="tooltip"]:eq(0)');
    expect($cell.attr('alt')).to.equal('result ok');
  });

  it("196.2. Pour un QCM avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
    let $cell = findWithAssert('img[data-toggle="tooltip"]:eq(1)');
    expect($cell.attr('alt')).to.equal('result not ok');
  });

});
