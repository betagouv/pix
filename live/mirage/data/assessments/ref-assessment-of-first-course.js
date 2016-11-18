import refFirstCourse from '../courses/ref-first-course';

export default {
  data: {
    type: 'assessments',
    id: 'first_assessment_id',
    attributes: {
      "user-id": 'user_id',
      "user-name": 'Jon Snow',
      "user-email": 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'courses',
          id: refFirstCourse.data.id
        }
      }
    }
  }
}
