import Image from 'next/image';
import React from 'react';
import Google from "@/assest/google.svg"
import Meta from "@/assest/meta.svg"
import Microsoft from "@/assest/microsoft.svg"
import Nvidia from "@/assest/nvidia.svg"
import Apple from "@/assest/apple.svg"
import Adobe from "@/assest/adobe.svg"
import HuggingFace from "@/assest/hugging-face.svg"
import Marquee from "react-fast-marquee";
const TrustedCompany = ({ children }) => {
  return (
    <div className='space-y-20 my-40'>
      <h1 className='text-4xl font-medium text-center'>Trusted by Professionals from Top Tech Companies</h1>
      <Marquee autoFill={true} gradient={true}>
        <div className='flex space-x-10 '>
          <Image src={Google} height={50} alt="google"></Image>
          <div className='flex items-center gap-1.5'>
            <Image src={Meta} height={50} alt="google"></Image>
            <p className='text-4xl font-semibold'>Meta </p>
          </div>

          <Image src={Microsoft} height={50} alt="google"></Image>
          <Image src={Nvidia} height={50} alt="google"></Image>
          <div className='flex items-center gap-1.5'>
            <Image src={Apple} height={50} alt="google"></Image>
            <p className='text-4xl font-semibold'>Apple </p>
          </div>
          <Image src={HuggingFace} height={50} alt="google"></Image>
          <Image src={Adobe} height={50} alt="google"></Image>
          <div></div>
        </div>

      </Marquee>
    </div>
  );
};

export default TrustedCompany;