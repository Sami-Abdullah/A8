import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-primary'>
      <div className="navbar container mx-auto text-neutral-content">

        <div className='w-full flex items-center justify-between'>

          <button className=" text-4xl font-semibold">Skill Sphere</button>
          <div className='flex gap-1'>

            <button className='text-xl font-semibold'>Log in</button>
            <span className='text-xl font-semibold'>|</span>
            <button className='text-xl font-semibold'> Regisnter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;