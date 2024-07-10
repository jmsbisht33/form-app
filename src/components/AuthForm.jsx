import React, { useState } from 'react'
import CustomInput from './CustomInput';

import { useForm } from "react-hook-form";

const AuthForm = ({ type }) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm()

  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    // event.preventDefault();
    if(type === "sign-up"){
        console.log('sign-up',data)
    }

    if(type === "sign-in"){
        console.log('sign-in',data)
    }
  }

  return (
    <section className="flex min-h-screen w-full max-w-[420px]
    flex-col justify-center gap-5 py-10 md:gap-8">
      <header className='flex flex-col gap-5 md:gap-8'>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36
          font-semibold text-gray-900'>
              {type === "sign-up" ? "Sign Up" : "Sign In"}
          </h1>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-8'>
          {type === "sign-up" && (
              <CustomInput 
                label="Name"
                placeholder="Name"
                register={register}
                value={"name"}
              />            
          )}
          <CustomInput 
            label="Email"
            placeholder="Email"
            register={register}
            value={"email"}
          />

          <CustomInput 
            label="Password"
            placeholder="Password"
            register={register}
            value={"password"}
          />
          <button
            className="btn btn-primary"
          >
            Submit
          </button>
      </form>
    </section>
  )
}

export default AuthForm