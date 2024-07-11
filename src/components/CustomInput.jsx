import { useForm } from "react-hook-form";
import React from 'react'

const CustomInput = ({ label, placeholder, value, register, errors }) => {
  return (
    <>
        <input 
            type="text"
            placeholder={placeholder}
            className="flex flex-col gap-1.5 input input-bordered w-full"
            {...register(`${value}`,{required: true})}
        />
        {errors.value && <span>This field is required</span>}
    </>
  )
}

export default CustomInput