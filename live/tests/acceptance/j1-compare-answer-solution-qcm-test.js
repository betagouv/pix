import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | j1 - Comparer réponses et solutions pour un QCM |', function () {

  let application;

  before(function () {
    application = startApp();
  });

  after(function () {
    destroyApp(application);
  });

  describe('a', function () {

    it('j1.1 ', function () {
      expect(true).to.equal(true);
    });

  });

});
