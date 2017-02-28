import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { resetPostRequest, bodyOfLastPostRequest, urlOfLastPostRequest } from '../helpers/shared-state';
import _ from 'pix-live/utils/lodash-custom';

describe('Acceptance | e1 - Prévisualiser une épreuve | ', function () {

  let application;

  beforeEach(function () {
    application = startApp();
  });

  afterEach(function () {
    destroyApp(application);
  });

  describe.only('e1 - Prévisualiser une épreuve |', function () {

    beforeEach(function () {
      visit('/');
    });

    it('e1.1 Il y a une demande de création d\'un assessment avec un course vide', async function () {
      resetPostRequest();
      await visit('/challenges/ref_qcu_challenge_id/preview');
      expect(urlOfLastPostRequest()).to.equal('/api/assessments');
      expect(_.get(bodyOfLastPostRequest(), 'data.relationships.course.data.type')).to.equal('courses');
      expect(_.get(bodyOfLastPostRequest(), 'data.type')).to.equal('assessments');
      const idFirstChars = _.get(bodyOfLastPostRequest(), 'data.relationships.course.data.id').substring(0,4);
      expect(idFirstChars).to.equal('null');
    });

    it('e1.2 On affiche l\'assessment retourné par le serveur', async function () {
      await visit('/challenges/ref_qcu_challenge_id/preview');
      expect(currentURL()).to.equal('/assessments/ref_assessment_id/challenges/ref_qcu_challenge_id');
      expect(findWithAssert('#assessment-challenge'));
    });

  });
});
