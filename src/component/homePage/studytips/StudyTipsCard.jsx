'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const StudyTipsCard = ({ tip,index }) => {
  let  isRight=false;
  const { title, description, image } = tip

  if(index%2=== 0){
    isRight=true
  }
  return (
    <div className={`flex flex-col ${isRight ? 'lg:flex-row-reverse':'lg:flex-row'} w-3/4 mx-auto items-center bg-base-100 shadow-sm px-3 lg:px-10 py-5`}>
      <figure className=''>
        <Image src={image} alt={title}  ></Image>
      </figure>
      <div className="space-y-5 lg:space-y-10 px-2 lg:px-20">
        <h2 className="text-xl lg:text-5xl font-semibold">{title}</h2>
        <p className='text-sm lg:text-xl text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default StudyTipsCard;