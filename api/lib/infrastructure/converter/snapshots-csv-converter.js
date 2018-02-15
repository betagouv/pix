const moment = require('moment');
const _ = require('lodash');

module.exports = {
  convertJsonToCsv(jsonData) {
    let textCsv = '';

    if (_emptyData(jsonData)) {
      return textCsv;
    }

    textCsv += _createHeaderLine(jsonData);
    textCsv += jsonData.snapshots.map(_createProfileLine).join('');

    return textCsv;
  }
};

function _getHeaderForIdentificationCode(organizationType) {
  switch (organizationType) {
    case 'SUP':
      return 'Numero Etudiant';
    case 'SCO':
      return 'Numero INE';
    case 'PRO':
    default:
      return 'ID-Pix';
  }
}

function _createHeaderLine(jsonData) {
  const identificationCodeHeader = _getHeaderForIdentificationCode(jsonData.organizationType);

  let textCsvLineHeaders = `"Nom";"Prenom";"${identificationCodeHeader}";"Code Campagne";"Date";"Score Pix";"Tests Realises";`;

  const jsonProfile = _fromStringOrJsonToJson(jsonData.snapshots[0].profile)
  const listCompetences = _cleanArrayCompetences(jsonProfile.included);

  textCsvLineHeaders += listCompetences.map(_.property('name')).join(';');

  textCsvLineHeaders += '\n';
  return textCsvLineHeaders;
}

function _createProfileLine(snapshot) {
  let snapshotCsvLine = '';
  const listCompetences = _cleanArrayCompetences(_fromStringOrJsonToJson(snapshot.profile).included);

  snapshotCsvLine += [`"${snapshot.user.lastName}"`,
    `"${snapshot.user.firstName}"`,
    `"${snapshot.studentCode || ''}"`,
    `"${snapshot.campaignCode || ''}"`,
    moment(snapshot.createdAt).format('DD/MM/YYYY'),
    snapshot.score || '']
    .join(';');

  snapshotCsvLine += ';';

  // XXX We add '=' before string to force Excel to read it as string, not as date
  snapshotCsvLine += `="${snapshot.testsFinished}/${listCompetences.length}";`;

  snapshotCsvLine += _(listCompetences).map((comp) => comp.level < 0 ? '' : comp.level).join(';');

  snapshotCsvLine += '\n';
  return snapshotCsvLine;
}

function _cleanArrayCompetences(arrayCompetences) {
  return _.sortBy(arrayCompetences, 'attributes.index')
    .filter(competence => _verifyCorrectCompetence(competence))
    .map(competence => {
      return {
        name: `"${_cleanCompetenceName(competence.attributes.name)}"`,
        index: competence.attributes.index,
        level: competence.attributes.level
      };
    });
}

function _verifyCorrectCompetence(competence) {
  return competence.type === 'competences' && competence.attributes.name;
}

function _emptyData(jsonData) {
  return !jsonData.snapshots || jsonData.snapshots.length === 0;
}

function _cleanCompetenceName(name) {
  return name
    .replace(/é/g, 'e')
    .replace(/é/g, 'e')
    .replace(/ê/g, 'e');
}

function _fromStringOrJsonToJson(data) {
  if (typeof data === 'string') {
    return JSON.parse(data);
  } else {
    return data;
  }
}

