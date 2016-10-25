import anotherCourse from '../courses/another-course';

export default {
  data: {
    type: 'assessments',
    id: 'new_assessment_of_another_course_id',
    attributes: {
      "user-id": 'user_id',
      "user-name": 'Jon Snow',
      "user-email": 'jsnow@winterfell.got'
    },
    relationships: {
      course: {
        data: {
          type: 'courses',
          id: anotherCourse.data.id
        }
      }
    }
  }
}
