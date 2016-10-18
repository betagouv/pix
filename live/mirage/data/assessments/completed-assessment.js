import simpleCourse from '../courses/simple-course';
import qcuAnswer from '../answers/qcu-answer';
import qcmAnswer from '../answers/qcm-answer';
import qrocmAnswer from '../answers/qrocm-answer';

export default {
  data: {
    type: 'assessment',
    id: 'simple_assessment_id',
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
          id: qcuAnswer.data.id
        }, {
          type: 'answer',
          id: qcmAnswer.data.id
        }, {
          type: 'answer',
          id: qrocmAnswer.data.id
        }]
      }
    }
  }
}
