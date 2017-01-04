import downloadFilesCourse from '../courses/download-files-course';

export default {
  data: {
    type: 'assessments',
    id: 'download_files_assessment_id',
    attributes: {
      'user-id': 'user_id',
      'user-name': 'Jon Snow',
      'user-email': 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'courses',
          id: downloadFilesCourse.data.id
        }
      }
    }
  }
};
