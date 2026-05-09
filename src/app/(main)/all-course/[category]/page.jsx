import CourseCard from '@/component/allCoursePage/CourseCard';
import { getCourseByCategory } from '@/data/data';
import React from 'react';

const page = async ({params}) => {
  const {category} = await params;
  
  const courses = await getCourseByCategory(category)
  
  return (
    <div className='px-5 lg:px-0 py-10 space-y-2'>
      {
        courses.map((course,index)=>(
          <CourseCard key={index} course={course}></CourseCard>
        ))
      }
    </div>
  );
};

export default page;