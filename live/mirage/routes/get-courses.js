import simpleCourse from '../data/courses/simple-course';
import courseWithNoImage from '../data/courses/no-image-course';
import refFirstCourse from '../data/courses/ref-first-course';

export default function () {
  return {
    data: [
      simpleCourse.data,
      courseWithNoImage.data,
      refFirstCourse.data
    ]
  }
}
