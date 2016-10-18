import simpleCourse from '../courses/simple-course';
import qcmAnswer from '../answers/qcm-answer';

export default {
  data: {
    type: 'assessment',
    id: 'in_progress_assessment_id',
    attributes: {
      userId: 1,
      "user-name": 'Jon Snow',
      "user-email": 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'course',
          id: simpleCourse.data.id
        }
      },
      answers: {
        data: [{
          type: 'answer',
          id: qcmAnswer.data.id
        }]
      }
    }
  }
}
