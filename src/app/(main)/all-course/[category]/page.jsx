import { getCourseByCategory } from '@/data/data';
import React from 'react';

const page = async ({params}) => {
  const {category} = await params;
  
  const courses = await getCourseByCategory(category)
  
  return (
    <div>
      {
        courses.map((course,index)=>(
          <h1 key={index}> {course.title}</h1>
        ))
      }
    </div>
  );
};

export default page;