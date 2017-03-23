import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe.skip('Acceptance | competences page', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /referentiel', function() {
    visit('/referentiel');

    return andThen(() => {
      expect(currentURL()).to.equal('/competences');
    });
  });

  it('should display page title', function() {
    visit('/competences');

    return andThen(() => {
      expect(find('.referential-page__header-text')).to.have.lengthOf(1);
    });
  });

  it('should display as many sections as referential domains', function() {
    visit('/competences');

    return andThen(() => {
      expect(find('.referential-domain')).to.have.lengthOf(5);
    });
  });

});
