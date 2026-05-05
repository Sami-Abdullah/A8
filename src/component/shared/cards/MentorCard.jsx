import Image from 'next/image';
import React from 'react';

const MentorCard = ({ mentor }) => {

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="relative w-full aspect-square overflow-hidden">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{mentor.name}</h2>
        <p>{mentor.qualification}</p>
      </div>
    </div>
  );
};

export default MentorCard;