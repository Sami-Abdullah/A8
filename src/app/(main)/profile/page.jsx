'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileSection = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }



  return (
    <section className="w-full flex justify-center items-center py-10 min-h-screen px-5">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">

        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            width={200}
            height={200}
            src={user.image || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.role || "User"}</p>
          <p className="text-gray-500">{user.email}</p>


          {/* Button */}
          <div className="mt-4 flex justify-center md:justify-start">
            <Link
              href="/profile/update"
              className="btn btn-primary"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;