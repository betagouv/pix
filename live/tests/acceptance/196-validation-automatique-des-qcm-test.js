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
    return visit(`/assessments/completed_assessment_id/results`);
  });

  before(function () {
    $summary = findWithAssert('.table#summary tbody tr');
  });

  it("197.1. Pour un QCM avec toutes les réponses attendues, le tableau récapitulatif donne une indication que la réponse est correcte", function () {
    expect($summary.text()).to.contains('réponse correcte');
  });

  it("195.2. Pour un QCM avec une mauvaise réponse, le tableau récapitulatif donne une indication que la réponse est incorrecte", function () {
    expect($summary.text()).to.contains('réponse incorrecte');
  });

});
