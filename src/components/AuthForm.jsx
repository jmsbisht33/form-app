import React, { useState } from 'react'
import CustomInput from './CustomInput';
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signIn, signUp } from '../../utils/utils';

const AuthForm = ({ type }) => {
  const {
    handleSubmit,
    register,
    formState: {errors},
    reset
  } = useForm()

  const signUpMutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post('http://localhost:5200/api/users/signup', newUser)
    },
  });

  const signInMutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post('http://localhost:5200/api/users/signin', newUser)
    },
  });

  const onSubmit = async (data) => {
    if(type === "sign-up"){
      let res = await signUp(data);
      if (res !== 'registered successfully') {
        toast.error(res.response.data.message);
      } else {
        reset();
        toast.success(res);
      }
    }

    if(type === "sign-in"){
      let res = await signIn(data);
      if(res.name === "AxiosError") toast.error(res.response.data.message);
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
                value={"name"}
                register={register}
                errors={errors}
              />            
          )}
          <CustomInput 
            label="Email"
            placeholder="Email"
            value={"email"}
            register={register}
            errors={errors}
          />

          <CustomInput 
            label="Password"
            placeholder="Password"
            value={"password"}
            register={register}
            errors={errors}
          />
          <button
            className="btn bg-bankGradient"
            disabled={signInMutation.isPending || signInMutation.isPending}
          >
            {type === 'sign-in' ? 'Login' : 'Sign up'}
          </button>
      </form>
      <footer className='flex justify-center gap-1'>
      <p>
        {type === 'sign-in'
          ? "Don't have an account?"
          : "Already have an account?"
        }
      </p>
      <Link
        to={type === "sign-in" ? '/sign-up' : '/sign-in'}
        className='text-14 cursor-pointer font-medium text-bankGradient'
      >
        {type === 'sign-in' ? 'Sign up' : 'Sign in'}
      </Link>
      </footer>
    </section>
  )
}

export default AuthForm