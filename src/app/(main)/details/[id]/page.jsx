import { getCourseById } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
  const { id } = await params
  const course = await getCourseById(id)
  const { category, image, description, level, details, rating, duration, instructor, title } = course


  return (
    <div className='container mx-auto py-40 bg-gray-200  px-10 '>
      <div className='grid grid-cols-12 bg-base-100 border-base-300 rounded-2xl px-10 py-5'>
        <div className='col-span-8 col-start-5 text-4xl font-bold text-center py-4'>{title}</div>

        <div className='col-span-4 '><Image src={image} width={500} height={100} alt={title} className='rounded-2xl'></Image></div>

        <div className='col-span-8 space-y-5 p-10'>
          <div className='text-3xl font-semibold'>{description}</div>
          <div className='text-xl font-medium'>
            {
              details
            }
          </div>
        </div>

        <div className='flex gap-4 col-start-6 col-span-8 p-20'>
          <div className='badge badge-primary px-10 py-5 font-medium'>{level}</div>
          <div className='badge badge-secondary px-10 py-5 font-medium'>{category}</div>
          <div className='badge badge-accent px-10 py-5 font-medium'>{duration}</div>
          <div className='badge badge-info px-5 py-5 font-medium'>{instructor}</div>
        </div>
      </div>
    </div>
  );
};

export default page;