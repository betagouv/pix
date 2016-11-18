import refFirstCourse from '../data/courses/ref-first-course';
import rawCourse      from '../data/courses/raw-course';



export default function () {
  return {
    data: [
      refFirstCourse.data,
      rawCourse.data
    ]
  }
}
