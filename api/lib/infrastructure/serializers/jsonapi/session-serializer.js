const { Serializer } = require('jsonapi-serializer');
const Session = require('../../../domain/models/Session');
const hash = require('object-hash');

const { WrongDateFormatError } = require('../../../domain/errors');
const moment = require('moment-timezone');

function _getUniqueCodeStarter(sessionDate, time, examiner) {
  const date = moment().utc().format('YYYYMMDDHHmmss');
  return hash(date+sessionDate+time+examiner).slice(0, 8);
}

module.exports = {

  serialize(modelSession) {

    return new Serializer('session', {
      attributes: [
        'certificationCenter',
        'address',
        'room',
        'examiner',
        'date',
        'time',
        'description',
        'codeStarter'
      ]
    }).serialize(modelSession);
  },

  deserialize(json) {
    const attributes = json.data.attributes;

    if (!moment(attributes.date, 'DD/MM/YYYY').isValid()) {
      throw new WrongDateFormatError();
    }

    const codeStarter = _getUniqueCodeStarter(attributes.date, attributes.time, attributes.examiner);

    return new Session({
      id: json.data.id,
      certificationCenter: attributes['certification-center'],
      address: attributes.address,
      room: attributes.room,
      examiner: attributes.examiner,
      date: moment(attributes.date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      time: attributes.time,
      description: attributes.description,
      codeStarter: codeStarter,
    });
  }
};
