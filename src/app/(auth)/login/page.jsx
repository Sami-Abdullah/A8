'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';


const LogInPage = () => {

  
  const [isShown, setIsShown] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    console.log(email, password);
    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "",
    });
    if(error){
      toast.error(error.message)
    }
    if(res){
      toast.success("you have Log In")
    }
  };




  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold">Login Now!</h1>
          </div>


          <form onSubmit={handleSubmit(handleLoginFunc)}>
            <fieldset className="fieldset space-y-3">

              <div>
                <label className="label">Email</label>

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                />

                {errors.email && (
                  <p className="text-error text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>


              <div>
                <label className="label">Password</label>

                <input
                  type={isShown ? 'type' : 'password'}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />

                < div className='relative left-95 -top-7' onClick={() => { setIsShown(!isShown) }}>{isShown ? <FaEyeSlash /> : <FaEye />}</div>



                {errors.password && (
                  <p className="text-error text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>


              <button type="submit" className="btn btn-primary w-full mt-4">
                Login
              </button>
            </fieldset>
          </form>

          <p className="text-center mt-4">
            Don&apos;t have an account?
            <Link href="/registration" className="link link-primary ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div >
  );
};

export default LogInPage;