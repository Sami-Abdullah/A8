import { getAllCourse } from '@/data/data';
import React from 'react';
import CourseCard from '@/component/allCoursePage/CourseCard';
import SearchandDisplay from '@/component/shared/SearchandDisplay';
const AllCourse = async () => {
  const courses = await getAllCourse();
  const getItems = ()=>{

  }
  return (
    <div className=' space-y-2'>
      <SearchandDisplay courses={courses}></SearchandDisplay>

    </div>
  );
};

export default AllCourse;