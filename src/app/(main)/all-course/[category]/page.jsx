import React from 'react';

const page = async ({params}) => {
  const category = await params;
  return (
    <div>
      {
        {params}
      }
    </div>
  );
};

export default page;