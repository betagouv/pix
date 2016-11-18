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
    // This is the instruction of [one](http://link.1.url) QCM
    expect($('.challenge-instruction').text()).to.equal('This is the instruction of one QCM');
  });

  it("06.2 Le contenu de type [foo](bar) doit être converti sous forme de lien", function() {
    let $links = findWithAssert('.challenge-instruction a');
    expect($links.length).to.equal(1);
    expect($links.text()).to.equal('one');
    expect($links.attr('href')).to.equal('http://link.1.url');
  });

  it("06.3 Les liens doivent s'ouvrir dans un nouvel onglet", function() {
    let $links = findWithAssert('.challenge-instruction a');
    expect($links.attr('target')).to.equal('_blank');
  });

});
