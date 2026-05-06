import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-primary'>
      <div className="navbar container mx-auto text-neutral-content">

        <div className='w-full flex items-center justify-between'>

          <button className=" text-4xl font-semibold">Skill Sphere</button>
          <div className='flex gap-1'>

            <button className='text-xl font-semibold'><Link href={'/login'}>Log In</Link></button>
            <span className='text-xl font-semibold'>|</span>
            <button className='text-xl font-semibold'><Link href={'/registration'}>Regisnter</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;