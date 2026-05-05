import { getAllCourse } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import image from '@/assest/projectCompeleted.svg'
import AllcourseBanner from '@/component/allCoursePage/AllcourseBanner';
import Tabs from '@/component/allCoursePage/Tabs';
const AllCourse = async () => {
  const courses = await getAllCourse();
  return (
    <div className='mx-auto py-25'>

      <AllcourseBanner></AllcourseBanner>

      <Tabs></Tabs>

      {
        courses.map((course, index) => (
          <h1 key={index}>{course.title} </h1>
        ))
      }
    </div>
  );
};

export default AllCourse;