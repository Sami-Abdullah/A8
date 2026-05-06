'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CourseCard = ({ course }) => {


  const { category, image, description, level, rating, duration, instructor, title, id } = course


  return (
    <div className="card card-side bg-base-100 shadow-sm p-3">
      <figure>
        <Image src={image} alt={title} width={200} height={400}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className='flex gap-4 text-xl font-medium'>
          <span className='badge badge-accent'> {level}</span>
          <span className='badge badge-secondary'> {rating}</span>
          <span className='badge badge-info'> {duration}</span>
          <span className='badge badge-success'> {category}</span>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => { () => { getUrl() } }}>

            <Link href={`/details/${id}`} >Details</Link>

          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;