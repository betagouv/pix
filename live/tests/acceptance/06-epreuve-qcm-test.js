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

describe("Acceptance | 16 - Afficher un QCM | ", function () {

  let application;
  let challenge;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  before(function () {
    return visit(`/assessments/new_assessment_of_noimage_course_id/challenges/qcm_challenge_full_id`);
  });

  it('06.1 It should render challenge instruction', function () {
    // instruction is :
    // Un QCM propose plusieurs choix, lutilisateur peut en choisir plusieurs
    expect($('.challenge-instruction').text()).to.equal('Un QCM propose plusieurs choix, l\'utilisateur peut en choisir plusieurs');
  });

  it("06.2 Le contenu de type [foo](bar) doit être converti sous forme de lien", function() {
    let $links = findWithAssert('.challenge-instruction a');
    expect($links.length).to.equal(1);
    expect($links.text()).to.equal('plusieurs');
    expect($links.attr('href')).to.equal('http://link.plusieurs.url');
  });

  it("06.3 Les liens doivent s'ouvrir dans un nouvel onglet", function() {
    let $links = findWithAssert('.challenge-instruction a');
    expect($links.attr('target')).to.equal('_blank');
  });

});
