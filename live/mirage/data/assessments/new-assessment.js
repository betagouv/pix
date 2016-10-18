import simpleCourse from '../courses/simple-course';

export default {
  data: {
    type: 'assessment',
    id: 'new_assessment_id',
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
      }
    }
  }
}
