import Image from 'next/image';
import React from 'react';
import StudyTipsCard from './StudyTipsCard';
import Iamge1 from '@/assest/working.svg'
import Iamge2 from '@/assest/Hero6.svg'
import Iamge3 from '@/assest/ability1.svg'
import Iamge4 from '@/assest/thinking mode.svg'

const StudyTips = () => {
  const tips = [
    {
      id: "tip_1",
      category: "Active Learning",
      title: "The 80/20 Rule",
      description: "Spend 20% of your time watching tutorials and 80% actually writing code or designing. Building projects is where the real learning happens.",
      icon: "🚀",
      image: Iamge1
    },
    {
      id: "tip_2",
      category: "Retention",
      title: "The Feynman Technique",
      description: "Explain a complex concept—like Closures or Auto-layout—to a friend. If you can't explain it simply, you don't fully understand it yet.",
      icon: "🧠",
      image: Iamge2

    },
    {
      id: "tip_3",
      category: "Problem Solving",
      title: "Debug it Yourself",
      description: "Spend at least 15 minutes trying to solve an error before looking up the answer. This builds the muscle memory needed for senior-level engineering.",
      icon: "🛠️",
      image: Iamge3
    },
    {
      id: "tip_4",
      category: "Focus",
      title: "Deep Work Blocks",
      description: "Use 50-minute focus blocks for coding followed by 10-minute breaks. Constant interruptions break the mental model required for complex logic.",
      icon: "⏱️",
      image: Iamge4
    },


  ];
  return (
    <div className='space-y-10'>
      <div className='text-center space-y-10'>
        <h1 className='text-3xl lg:text-5xl font-semibold'>Optimize Your Learning Journey</h1>
        <p className=' px-2 text-sm lg:text-xl text-gray-600'>Master complex technical skills faster with proven strategies designed for modern</p>
      </div>
      {
        tips.map((tip, index) => (

          <StudyTipsCard key={index} tip={tip} index={index}></StudyTipsCard>
        ))
      }
    </div>
  );
};

export default StudyTips;