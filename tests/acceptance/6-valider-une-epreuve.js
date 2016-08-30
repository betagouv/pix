import {
  describe,
  it,
  before,
  after
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | 6 - Valider une épreuve |', function() {

  let application;
  const assessmentId = 'recqE9kA4VRqFcEgK';
  const challengeId = 'recLt9uwa2dR3IYpi';

  before(function() {
    application = startApp();
  });

  after(function() {
    destroyApp(application);
  });

  before(function() {
    return visit(`/assessments/${assessmentId}/challenges/${challengeId}`);
  });

  describe("quand je valide ma réponse à une épreuve", function () {

    before(function () {
      return click('.validate-button');
    });

    it("6.1. ma réponse est sauvegardée dans le BO", function () {

    });

    it("6.2. je suis redirigé vers l'épreuve suivante", function () {
      expect(currentURL()).to.eq('/home');
    });

  });

});
