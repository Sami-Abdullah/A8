import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCourseCard = ({ course }) => {
  const { image, description, level, rating, duration, title,id } = course
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

          <div className="badge badge-secondary">{level}</div>
          <div className="badge badge-info">{rating}</div>
          <div className="badge badge-warning">{duration}</div>
        </div>

        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-primary"><Link href={`/details/${id}`}>Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;