const _ = require('lodash');

/*
 * PRIVATE
 */

function _randomLetters(count) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXZ'.split('');
  return _.sampleSize(letters, count).join('');
}

function _convertSnapshotsWithRelatedUsersToJson(snapshotsWithRelatedUsers) {
  return snapshotsWithRelatedUsers.map((snapshot) => snapshot.toJSON());
}

function _convertSnapshotsFromJsonToCsv(snapshotsCsvConverter, organization, jsonSnapshots) {
  const jsonData = {
    organizationType: organization.type,
    snapshots: jsonSnapshots
  };
  return snapshotsCsvConverter.convertJsonToCsv(jsonData);
}

/*
 * PUBLIC
 */

module.exports = {

  generateOrganizationCode() {
    let code = _randomLetters(4);
    code += _.random(0, 9) + '' + _.random(0, 9);
    return code;
  },

  getOrganizationSharedProfilesAsCsv(dependencies, organizationId) {
    const { organizationRepository, snapshotRepository, bookshelfUtils, snapshotsCsvConverter } = dependencies;
    let organization;

    return organizationRepository.get(organizationId)
      .then(fetchedOganization => { organization = fetchedOganization; })
      .then(() => snapshotRepository.getSnapshotsByOrganizationId(organizationId))
      .then((snapshots) => bookshelfUtils.mergeModelWithRelationship(snapshots, 'user'))
      .then(_convertSnapshotsWithRelatedUsersToJson)
      .then(jsonSnapshots => _convertSnapshotsFromJsonToCsv(snapshotsCsvConverter, organization, jsonSnapshots));
  }
};
