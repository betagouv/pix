const JSONAPISerializer = require('jsonapi-serializer').Serializer;

class SnapshotSerializer {
  serialize(snapshot) {
    return new JSONAPISerializer('snapshots', {
      attributes: ['id'],
      transform(snapshot) {
        snapshot.id = snapshot.id.toString();
        return snapshot;
      }
    }).serialize(snapshot);
  }

  serializeArray(snapshots) {
    return new JSONAPISerializer('snapshot', {
      attributes: ['score', 'creationDate', 'completionPercentage'],
      //keyForAttribute: 'dash-case',
      user: {
        ref: 'id',
        included: false,
        attributes: ['firstName', 'lastName']
      }
    }).serialize(snapshots);
    /* return new JSONAPISerializer('user', {
       attributes: ['firstName', 'lastName', 'address'],
       address: {
         ref: 'id',
         included: false,
         attributes: ['addressLine1', 'zipCode', 'country']
       }
     }).serialize(snapshots);*/
  }
}

module.exports = new SnapshotSerializer();
