import { getAllCourse } from '@/data/data';
import React from 'react';
import CourseCard from '@/component/allCoursePage/CourseCard';
const AllCourse = async () => {
  const courses = await getAllCourse();
  return (
    <div className='py-10 space-y-2'>

      {
        courses.map((course, index) => (
          <CourseCard key={index} course={course}></CourseCard>
        ))
      }
    </div>
  );
};

export default AllCourse;