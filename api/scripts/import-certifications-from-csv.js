const path = require('path');
const fs = require('fs');
const request = require('request-promise-native');
const Papa = require('papaparse');

function assertFileValidity(filePath) {
  const fileExists = fs.existsSync(filePath);
  if (!fileExists) {
    const errorMessage = `File not found ${filePath}`;
    throw new Error(errorMessage);
  }
  const fileExtension = path.extname(filePath);
  if (fileExtension !== '.csv') {
    const errorMessage = `File extension not supported ${fileExtension}`;
    throw new Error(errorMessage);
  }
  return true;
}

// TODO create US
/*
function _translateCertificationStatus(status) {
  if (status === 'Validé') {
    return 'validated';
  }
  if (status === 'Refusé') {
    return 'rejected';
  }
  return 'awaiting';
}
*/

function convertDataRowsIntoCertifications(csvParsingResult) {
  const dataRows = csvParsingResult.data;
  return dataRows.reduce((certifications, dataRow) => {
    const certification = {
      id: parseInt(dataRow['ID de certification']),
      firstName: dataRow['Prénom du candidat'],
      lastName: dataRow['Nom du candidat'],
      birthdate: dataRow['Date de naissance du candidat'],
      birthplace: dataRow['Lieu de naissance du candidat'],
      /*
      status: _translateCertificationStatus(dataRow['Statut de la certification']),
      rejectionReason: dataRow['Motif de rejet de la certification'],
      */
    };
    certifications.push(certification);
    return certifications;
  }, []);
}

function _buildRequestObject(baseUrl, accessToken, certification) {
  return {
    headers: { authorization: `Bearer ${accessToken}` },
    method: 'PATCH',
    baseUrl,
    url: `/api/certification-courses/${certification.id}`,
    json: true,
    body: {
      data: {
        type: 'certifications',
        id: certification.id,
        attributes: {
          // 'status': certification.status,
          'first-name': certification.firstName,
          'last-name': certification.lastName,
          'birthplace': certification.birthplace,
          'birthdate': certification.birthdate,
          // 'rejection-reason': certification.rejectionReason
        }
      }
    }
  };
}

/**
 * @param options
 * - baseUrl: String
 * - accessToken: String
 * - certifications: Array[Object]
 */
function createAndStoreCertifications(options) {
  const errorObjects = [];

  const promises = options.certifications.map((certification) => {
    const requestConfig = _buildRequestObject(options.baseUrl, options.accessToken, certification);
    return request(requestConfig)
      .catch((err) => {
        errorObjects.push({
          errorMessage: err.message,
          certification: certification
        });
      });
  });
  return Promise.all(promises).then(() => {
    return errorObjects;
  });
}

/**
 * Usage: node import-certifications-from-csv.js http://localhost:3000 jwt.access.token my_file.csv
 */
function main() {
  console.log('Début du script d\'import');
  try {
    const baseUrl = process.argv[2];
    const accessToken = process.argv[3];

    const filePath = process.argv[4];

    console.log('\nTest de validité du fichier...');
    assertFileValidity(filePath);
    console.log('Test de validité du fichier : OK');

    const dataStream = fs.createReadStream(filePath);

    console.log('\nTéléversement des certifications sur le serveur...');
    Papa.parse(dataStream, {
      header: true,
      complete: (csvParsingResult) => {
        const certifications = convertDataRowsIntoCertifications(csvParsingResult);
        const options = { baseUrl, accessToken, certifications };
        createAndStoreCertifications(options)
          .then((errorObjects) => {
            console.log('Téléversement des certifications sur le serveur : OK');
            console.log(`\nIl y a eu ${errorObjects.length} erreurs`);
            errorObjects.forEach((errorObject) => {
              console.log(`  > id de la certification : ${errorObject.certification.id} - erreur : ${errorObject.errorMessage}`);
            });
          })
          .then(() => {
            console.log('\nFin du script');
          });
      }
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = {
  assertFileValidity,
  convertDataRowsIntoCertifications,
  createAndStoreCertifications
};
