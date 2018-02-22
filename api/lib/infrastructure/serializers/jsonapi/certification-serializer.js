const { Serializer, Deserializer } = require('jsonapi-serializer');

const { WrongDateFormatError } = require('../../../domain/errors');
const moment = require('moment-timezone');

module.exports = {

  serialize(certificationCourse) {
    return new Serializer('certifications', {
      attributes: ['status', 'firstName', 'lastName', 'birthplace', 'birthdate', 'rejectionReason'],
      assessment: {
        ref: 'id',
      }
    }).serialize(certificationCourse);
  },

  deserialize(json) {

    if (!moment(json.data.attributes.birthdate, 'DD/MM/YYYY').isValid()) {
      throw new WrongDateFormatError();
    }

    return new Deserializer({ keyForAttribute: 'camelCase' })
      .deserialize(json)
      .then((certifications => {
        certifications.birthdate = moment(json.data.attributes.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
        return certifications;
      }));
  }
};
