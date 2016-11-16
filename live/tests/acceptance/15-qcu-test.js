import {
  describe,
  it,
  before,
  beforeEach,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 15 - Afficher un QCU | ", function () {

  let application;
  let challenge;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit(`/assessments/completed_assessment_id/challenges/qcu_challenge_id`);
  });

  it('15.1 It should render challenge instruction', function () {
    expect($('.challenge-instruction').text()).to.equal('Julie a déposé un document dans un espace de stockage partagé avec Pierre. Elle lui envoie un mail pour l’en informer. Quel est le meilleur message ?');
  });

  it('15.2 It should render a list of radiobuttons', function () {
    const $proposals = $('input[type="radio"]');
    expect($proposals).to.have.lengthOf(4);
  });

  it('15.3 It should render an ordered list of instruction', function () {
    const $proposals = $('input[type="radio"]');
    expect($('.challenge-proposal:nth-child(1)').text().trim()).to.equal('J’ai déposé le document ici : P: > Equipe > Communication > Textes > intro.odt');
    expect($('.challenge-proposal:nth-child(2)').text().trim()).to.equal('Ci-joint le document que j’ai déposé dans l’espace partagé');
    expect($('.challenge-proposal:nth-child(3)').text().trim()).to.equal('J’ai déposé le document intro.odt dans l’espace partagé');
    expect($('.challenge-proposal:nth-child(4)').text().trim()).to.equal('J’ai déposé un nouveau document dans l’espace partagé, si tu ne le trouves pas je te l’enverrai par mail');

  });

  it('15.4 It should display "Skip" button', function () {
    expect($('.challenge-item-actions__skip-action')).to.have.lengthOf(1);
  });


  it('15.5 It should display "Validate" button', function () {
    expect($('a.challenge-item-actions__validate-action')).to.have.lengthOf(1);
  });


});
