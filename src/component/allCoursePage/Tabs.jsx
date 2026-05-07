'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react';

const Tabs = () => {


  const categories = [

    {
      urlName: "",
      tabName: "All"
    },
    {
      urlName: "/development",
      tabName: "Development"
    },
    {
      urlName: "/design",
      tabName: "Design"
    },
    {
      urlName: "/dataScience",
      tabName: "Data Science"
    },
    {
      urlName: "/marketing",
      tabName: "Marketing"
    },
    {
      urlName: "/itAndSoftware",
      tabName: "IT & Software"
    }
  ]



  const pathname = usePathname();


  return (
    <div role="tablist" className="tabs tabs-lift my-10 space-y-4">

      {
        categories.map((category, index) => (
          <Link

            key={index}
            role="tab"
            className={`tab ${(pathname === `/all-course${category.urlName}`) ? "tab-active bg-primary font-bold text-gray-200" : ""} px-5`}
            href={`/all-course${category.urlName}`}

          >{category.tabName}


          </Link>
        ))
      }


    </div>
  );
};

export default Tabs;