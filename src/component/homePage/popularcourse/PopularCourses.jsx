import { getPopulerCourse } from '@/data/data';
import React from 'react';
import PopularCourseCard from './PopularCourseCard';
const PopularCourses = async () => {
  const courses = await getPopulerCourse()
  return (
    <div className='space-y-20'>
      <div className='text-center space-y-5'>
        <h1 className='text-3xl lg:text-5xl font-bold'>Master the Most In-Demand Skills</h1>
        <p className=' p-2 text-sm lg:text-xl text-gray-600 font-semibold'>Explore our top-rated courses designed by industry veterans to help you bridge the gap between learning and a professional career</p>
      </div>
      <div className='grid grid-cols-1 p-10 lg:grid-cols-3 lg:p-0 gap-5'>
        {
          courses.map((course)=>(
            <PopularCourseCard key={course.id} course={course}></PopularCourseCard>
          ))
        }
      </div>
    </div>
  );
};

export default PopularCourses;