import React from 'react';
import Image from 'next/image';
import image from '@/assest/projectCompeleted.svg'

const AllcourseBanner = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='px-20'>

        <Image src={image} alt="allcourse" ></Image>
      </div>
      <div className=''>
        <h1 className='text-xl lg:text-5xl font-bold text-center'>Your Path to Mastery Starts Here</h1>
        <p className='text-sm lg:text-2xl font-semibold text-gray-600 text-center my-5'>Discover world-class education in development, design, and data science</p>
        <p className='text-2xl font-semibold text-gray-600 text-center'> Build the portfolio you need to land your dream job</p>
      </div>
    </div>
  );
};

export default AllcourseBanner;