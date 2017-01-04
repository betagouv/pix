import noFileChallenge from '../challenges/no-file-challenge';
import oneFileChallenge from '../challenges/one-file-challenge';
import multipleFilesChallenge from '../challenges/multiple-files-challenge';

export default {
  data: {
    type: 'courses',
    id: 'download_files_course_id',
    attributes: {
      name: 'Download files Course',
      description: 'Contient des épreuves permettant de valider le téléchargement de fichier(s)',
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
