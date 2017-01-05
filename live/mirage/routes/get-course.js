import _ from 'lodash/lodash';
import refCourse from '../data/courses/ref-course';
import rawCourse from '../data/courses/raw-course';
import courseAboutAttachments from '../data/courses/course-about-attachments';

export default function (schema, request) {

  const allCourses = [
    refCourse,
    rawCourse,
    courseAboutAttachments
  ];

  const courses = _.map(allCourses, function (oneCourse) {
    return { id: oneCourse.data.id, obj: oneCourse };
  });

  const course = _.find(courses, { id: request.params.id });

  if (course) {
    return course.obj;
  } else {
    throw new Error('The course you required in the fake server does not exist ' + request.params.id);
  }

}
