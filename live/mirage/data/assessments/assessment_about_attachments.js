import courseAboutAttachments from '../courses/course-about-attachments';
import noFileAnswer from '../answers/no-file-answer';
import oneFileAnswer from '../answers/one-file-answer';
import multipleFilesAnswer from '../answers/multiple-files-answer';

export default {
  data: {
    type: 'assessments',
    id: 'assessment_about_attachments_id',
    attributes: {
      'user-id': 'user_id',
      'user-name': 'Jon Snow',
      'user-email': 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'courses',
          id: courseAboutAttachments.data.id
        }
      },
      answers: {
        data: [{
          type: 'answers',
          id: noFileAnswer.data.id
        },{
          type: 'answers',
          id: oneFileAnswer.data.id
        },{
          type: 'answers',
          id: multipleFilesAnswer.data.id
        }]
      }
    }
  }
};
