import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe("Acceptance | 07 - Consulter l'écran de fin d'un test ", function() {

  let application;
  let assessment;
  let course;
  let $assessmentResults;

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
    $assessmentResults = findWithAssert('.assessment-results');
  });

  it("07.1. se fait en accédant à l'URL /assessments/:assessment_id/results", function () {
    expect(currentURL()).to.equal(`/assessments/completed_assessment_id/results`);
  });

  it("07.2. affiche l'intitulé du test", function () {
    expect($assessmentResults.text()).to.contains("Name of the course");
  });

  it("07.3. propose un moyen pour revenir à la liste des tests", function () {
    const $homeLink = findWithAssert('button.assessment-results-link-home');
  });

});
