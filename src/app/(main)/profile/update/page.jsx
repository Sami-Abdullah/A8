'use client'
import React from 'react';
import { authClient } from "@/lib/auth-client"
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { image } = data
    try {
      await authClient.updateUser({
        image,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Update failed!");
    }
  }
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">


      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold">Upadate Profile</h1>
          </div>


          <form onSubmit={handleSubmit(handleUpdate)}>
            <fieldset className="fieldset space-y-3">

              <div>
                <label className="label">Email</label>

                <input
                  type="text"
                  placeholder="Enter New Profile Link"
                  className="input input-bordered w-full"
                  {...register('image', {
                    required: 'Image is required',
                  })}
                />

                {errors.photo && (
                  <p className="text-error text-sm mt-1">
                    {errors.photo.message}
                  </p>
                )}
              </div>





              <button type="submit" className="btn btn-primary w-full mt-4">
                Update
              </button>
            </fieldset>
          </form>


        </div>
      </div>

      <ToastContainer />
    </div >
  );
};

export default page;