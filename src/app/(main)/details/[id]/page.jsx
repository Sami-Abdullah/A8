import { getCourseById } from '@/data/data';
import React from 'react';

const page = async ({ params }) => {
  const { id } = await params
  const course = await getCourseById(id)
  const { category, image, description, level, details, rating, duration, instructor, title } = course


  return (
    <div className='container mx-auto py-40'>
      <div className='grid grid-cols-12 '>
        <div className='cols-span-12'>{title}</div>
        <div>{category}</div>
        <div>{image}</div>
        <div>{level}</div>
        <div>{description}</div>
        <div>{details}</div>
        <div>{duration}</div>
        <div>{instructor}</div>
      </div>
    </div>
  );
};

export default page;