'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const notifyLogout = () => toast("You have logged out");

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    notifyLogout();
  };

  const menuItems = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/all-course">All Course</Link></li>
      {user && <li><Link href="/profile">Profile</Link></li>}
    </>
  );

  return (
    <div className="bg-primary text-neutral-content">
      <div className="navbar container mx-auto">


        <div className="navbar-start">


          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              {menuItems}
            </ul>
          </div>


          <Link href="/" className="text-xl lg:text-3xl font-bold">
            Skill Sphere
          </Link>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            {menuItems}
          </ul>
        </div>


        <div className="navbar-end gap-3">

          {isPending && (
            <span className="loading loading-spinner loading-sm"></span>
          )}

          {user ? (
            <div className="flex items-center gap-3">


              {user.image ? (
                <Image
                  src={user.image}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
              ) : (
                <CgProfile size={28} />
              )}


              <button
                onClick={handleLogout}
                className="btn btn-sm btn-primary"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-sm btn-outline">Login</Link>
              <Link href="/registration" className="btn btn-sm btn-outline">
                Register
              </Link>
            </div>
          )}
        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Navbar;