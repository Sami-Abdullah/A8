import Image from 'next/image';
import React from 'react';
import Hero from "@/assest/Hero3.svg"
const HeroBanner = () => {
  return (
    <div className=" flex flex-col items-center container mx-auto my-20 space-y-20">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold">Master Your Craft with Skill Sphere</h1>
        <p className="text-xl font-semibold text-gray-600">Empowering your journey from foundational learning to professional expertise.</p>
      </div>
      <div> <Image src={Hero} alt="hero banner" height={400}></Image></div>

    </div>
  );
};

export default HeroBanner;