import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { startApp, destroyApp } from '../helpers/application';
import seeds from '../helpers/seeds';
import { authenticateUser } from '../helpers/testing';

describe('Acceptance | Sharing a Profile Snapshot with a given Organization', function() {

  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  function populateDatabaseWithAUserAndAnOrganization() {
    seeds.injectUserAccount();
    seeds.injectOrganization('ABCD00');
  }

  async function visitAccountPage() {
    await visit('/compte');
  }

  async function openShareProfileModal() {
    await click('.share-profile__share-button');
    findWithAssert('.pix-modal');
    findWithAssert('.share-profile__section--organization-code-entry');
  }

  async function fillInAndSubmitOrganizationCode() {
    await fillIn('.share-profile__organization-code-input', 'ABCD00');
    await click('.share-profile__continue-button');
    findWithAssert('.share-profile__section--sharing-confirmation');
  }

  async function confirmProfileSnapshotSharing() {
    expect(find('.share-profile__organization-name').text().trim()).to.equal('Organization 0');
    await click('.share-profile__confirm-button');
    findWithAssert('.share-profile__section--success-notification');
  }

  async function closeModal() {
    await click('.share-profile__close-button');
    expect(find('.pix-modal')).to.have.length(0);
  }

  it('should be possible to share a snapshot of her own profile to a given organization', async function() {
    populateDatabaseWithAUserAndAnOrganization();
    authenticateUser();
    await visitAccountPage();
    await openShareProfileModal();
    await fillInAndSubmitOrganizationCode();
    await confirmProfileSnapshotSharing();
    await closeModal();
  });

});
