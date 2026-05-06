import AllcourseBanner from '@/component/allCoursePage/AllcourseBanner';
import Tabs from '@/component/allCoursePage/Tabs';
import React from 'react';

const layout = ({children}) => {
  return (
    <div className=' mx-auto py-30'>
      <AllcourseBanner></AllcourseBanner>
      <Tabs></Tabs>
      {children}
    </div>
  );
};

export default layout;