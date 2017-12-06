const { Serializer } = require('jsonapi-serializer');
const _ = require('lodash');

module.exports = {

  serialize(snapshots) {
    return new Serializer('challenge', {
      attributes: ['type', 'instruction', 'competence', 'proposals', 'hasntInternetAllowed', 'timer', 'illustrationUrl', 'attachments'],
      transform: (snapshot) => {
        const challenge = Object.assign({}, snapshot);
        challenge.competence = _.get(snapshot, 'competence[0]', 'N/A');
        return challenge;
      }
    }).serialize(snapshots);
  }

};
