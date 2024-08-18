import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Link ,useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const Signup = () => {

    const { createuser, updateuserprofile } = useContext(AuthContext);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = async (data) => {
    const { email, password, fullName } = data;

    try {
        
        
        
            

       
    
        createuser(email, password);
    updateuserprofile(fullName, email);
       navigate(from);
       toast.success("Successfully registered.");

   } catch (error) {
       console.error('Error creating user:', error);
       toast.error('Failed to create user');
   }
 
  }


//   };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            
  <div className="hero-content flex-col ">
  <div>
      <h1 className=' text-black text-xl font-bold text-center'>Create Your Account on our website.</h1>
      <h2 className='text-slate-700 font-semibold text-xl mt-1'>And Enjoy Our Services!!</h2>
    </div>
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl border-l-2 border-blue-900  bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" {...register("fullName", { required: true })} />
          {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
        </div>
      
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
         
      
        <div className="form-control mt-6">
          <button className="btn btn-primary  bg-blue-900  border-2 border-blue-900 text-white">Register</button>
        </div>
       </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;