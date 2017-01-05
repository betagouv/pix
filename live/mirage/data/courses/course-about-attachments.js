import noFileChallenge from '../challenges/no-file-challenge';
import oneFileChallenge from '../challenges/one-file-challenge';
import multipleFilesChallenge from '../challenges/multiple-files-challenge';

export default {
  data: {
    type: 'courses',
    id: 'course_about_attachments_id',
    attributes: {
      name: 'Test portant sur le téléchargement de fichier',
      description: 'Contient trois épreuves : sans fichier, avec un seul fichier, avec plusieurs',
      duration: 10
    },
    relationships: {
      challenges: {
        data: [{
          type: 'challenges',
          id: noFileChallenge.data.id
        }, {
          type: 'challenges',
          id: oneFileChallenge.data.id
        }, {
          type: 'challenges',
          id: multipleFilesChallenge.data.id
        }]
      }
    }
  }
};
