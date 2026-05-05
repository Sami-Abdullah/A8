import React from 'react';

const StudentReviewCard = ({review}) => {
  const {name,role,feedback} = review
  return (
    <div className="card w-full bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{role}</p>
        <p>{feedback}</p>

      </div>
    </div>
  );
};

export default StudentReviewCard;