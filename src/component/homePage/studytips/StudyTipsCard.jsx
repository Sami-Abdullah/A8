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
    <div className={`flex ${isRight ? 'flex-row-reverse':''} w-3/4 mx-auto items-center bg-base-100 shadow-sm px-10 py-5`}>
      <figure className=''>
        <Image src={image} alt={title}  ></Image>
      </figure>
      <div className="space-y-10 px-20">
        <h2 className="text-5xl font-semibold">{title}</h2>
        <p className='text-xl text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default StudyTipsCard;