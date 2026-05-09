import MentorCard from '@/component/homePage/trustedmentor/MentorCard';
import { getPopulerCourse, getPopulerMentors } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const TrustedMentor = async () => {

  const mentors = await getPopulerMentors();
  console.log(Array.isArray(mentors));
  return (

    <div className='container mx-auto space-y-30'>
      <div className='space-y-5'>

        <h1 className='text-center text-5xl font-bold'>
          Get Guided by the Best in the Field
        </h1>
        <p className='text-xl  text-gray-600 text-center font-semibold'> Do not just learn to code—learn to build. Your journey is supported by mentors who have walked the path before you.</p>
      </div>

      <div className=' grid grid-cols-1 p-10 md:grid-cols-2 md:p-0 lg:grid-cols-4 lg:p-10 gap-5'>
        {
          mentors.map((mentor) => (

            <MentorCard key={mentor.id} mentor={mentor}></MentorCard>
          ))
        }
      </div>

    </div>
  );
};

export default TrustedMentor;