import { getStudentReview } from '@/data/data';
import React from 'react';
import StudentReviewCard from './StudentReviewCard';

const StudentReviews = async() => {
  const reviews = await getStudentReview();
  console.log(Array.isArray(reviews));
  return (
    <div className=' py-10 space-y-10'>
      <div className='text-center space-y-5' >
        <h1 className=' text-5xl font-bold'>Stories of Success</h1>
        <p className='text-xl text-gray-600 font-semibold'>See how our students transformed their careers and mastered new skills with the help of industry experts.</p>
      </div>
      <div className='  grid grid-cols-3 gap-4'>
          {
            reviews.map((review)=>(

              <StudentReviewCard key={review.id} review={review}></StudentReviewCard>
            ))
          }
      </div>
    </div>
  );
};

export default StudentReviews;