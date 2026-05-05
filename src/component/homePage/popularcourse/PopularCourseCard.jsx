import Image from 'next/image';
import React from 'react';

const PopularCourseCard = ({ course }) => {
  const { image, description, level, rating, duration, title } = course
  return (
    <div className="card f bg-base-100 w-full shadow-sm">
      <figure className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <div className='flex gap-2'>

          <div className="badge badge-primary">{level}</div>
          <div className="badge badge-primary">{rating}</div>
          <div className="badge badge-primary">{duration}</div>
        </div>

        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Details</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;