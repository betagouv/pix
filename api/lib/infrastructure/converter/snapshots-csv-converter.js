const moment = require('moment');

const headersWithoutCompetences = ['Nom', 'Prénom', 'Numéro Etudiant', 'Code Campagne', 'Date', 'Score Pix', 'Tests Réalisés'];

module.exports = {
  convertJsonToCsv(jsonData) {
    let textCsv = '';

    if (!jsonData[0]) {
      return textCsv;
    }

    textCsv += _createHeaderLine(JSON.parse(jsonData[0].profile));
    jsonData.forEach((snapshot) => textCsv += _createProfileLine(snapshot));

    return textCsv;
  }
};

function _createHeaderLine(jsonProfil) {
  let textCsvLineHeaders = '';

  textCsvLineHeaders += headersWithoutCompetences.reduce((textHeader, title) => {
    return `${textHeader}"${title}",`;
  }, '');

  const listCompetences = _cleanArrayCompetences(jsonProfil.included);
  listCompetences.forEach(competence => {
    textCsvLineHeaders += `"${competence.name}",`;
  });

  textCsvLineHeaders += '\n';
  return textCsvLineHeaders;
}

function _createProfileLine(snapshot) {
  let snapshotCsvLine = '';
  const listCompetences = _cleanArrayCompetences(JSON.parse(snapshot.profile).included);
  const numberRealisedTest = listCompetences.reduce((sumRealisedTest, competence) => {
    return sumRealisedTest + (competence.level >= 0);
  }, 0);

  snapshotCsvLine += `"${snapshot.user.lastName}","${snapshot.user.firstName}","${snapshot.studentCode || ''}","${snapshot.campaignCode || ''}",${moment(snapshot.createdAt).format('DD/MM/YYYY')},${snapshot.score || ''},`;
  snapshotCsvLine += `"${numberRealisedTest}/${listCompetences.length}",`;

  listCompetences.forEach(competence => snapshotCsvLine += `${competence.level < 0 ? '' : competence.level},`);

  snapshotCsvLine += '\n';
  return snapshotCsvLine;
}

function _cleanArrayCompetences(arrayCompetences) {
  return arrayCompetences
    .filter(competence => competence.type === 'competences')
    .sort((comp1, comp2) => {
      return comp1.attributes.index - comp2.attributes.index;
    })
    .map(competence => {
      return {
        name: competence.attributes.name,
        index: competence.attributes.index,
        level: competence.attributes.level
      };
    });
}
