import Link from 'next/link';
import React from 'react';

const Tabs = () => {
  const categories =["All","Development","Design","Data Science","Marketing","IT & Software"]
  return (
    <div role="tablist" className="tabs tabs-lift my-10">
      
      {
        categories.map((category,index)=>(
          <Link key={index} role="tab" className="tab" href={`/${category}`}>{category}</Link>
        ))
      }

    </div>
  );
};

export default Tabs;