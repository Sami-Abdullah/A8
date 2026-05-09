'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const RegistrationPage = () => {
  const successNotification = () => toast.success("You have registered successfully");
  const errorNotification = (error) => toast.error(`${error.message}`);
  const [isShown, setIsShown] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()


  const handleRegisterFunc = async (data) => {
    const { email, password, name, photo } = data

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: '/login',
    });
    if (error) {
      errorNotification(error)
    }
    if (res) {
      successNotification()
    }
  }




  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              {errors.name && <p className='text-error'>Name is required</p>}
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {errors.email && <p className='text-error'>Email is required</p>}

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="label">Photo URL</label>

              <input
                type="text"
                placeholder="Enter Photo Url"
                className="input input-bordered w-full"
                {...register('photo')}
              />

              {errors.photo && (
                <p className="text-error text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>


            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {errors.password && <p className='text-error'>Password is required</p>}



              <input
                type={isShown ? 'type' : 'password'}
                placeholder="Password"
                className="input input-bordered w-full"
                {...register('password', {
                  required: 'Password is required',
                })}
              />

              < div className='relative left-95 -top-7' onClick={() => { setIsShown(!isShown) }}>{isShown ? <FaEyeSlash /> : <FaEye />}</div>
            </div>

            <button className="btn btn-primary w-full mt-4">
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegistrationPage;