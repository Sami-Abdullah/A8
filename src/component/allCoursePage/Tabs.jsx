'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react';

const Tabs = () => {

  const [active, setActive] = useState(false);
  const categories = [

    {
      urlName: "all",
      tabName: "All"
    },
    {
      urlName: "development",
      tabName: "Development"
    },
    {
      urlName: "design",
      tabName: "Design"
    },
    {
      urlName: "dataScience",
      tabName: "Data Science"
    },
    {
      urlName: "marketing",
      tabName: "Marketing"
    },
    {
      urlName: "itAndSoftwareall",
      tabName: "Software"
    }
  ]



  const pathname = usePathname();

  const isActive = (active,category)=>{
    if (pathname === `/all-course${category.urlname ==='all' ?"" :`/${category.urlname}`}`){
      setActive(!active)
    }
  }
  
  return (
    <div role="tablist" className="tabs tabs-lift my-10">

      {
        categories.map((category, index) => (
          <Link 

          key = {index}
          role = "tab"
          onClick = {() => {isActive(active,category)}}   
          className = {`tab ${active ? "tab-active":""} px-5`} 
          href = {`/all-course${category.urlName ==='all' ? "" :`/${category.urlName}`}`}
          
          >{category.tabName}
          
          
          </Link>
        ))
      }

    </div>
  );
};

export default Tabs;