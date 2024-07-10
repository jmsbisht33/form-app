import React from 'react'

const CustomInput = ({ label, placeholder, value, register }) => {
  return (
    <>
        <input 
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
            {...register(`${value}`)}
        />
    </>
  )
}

export default CustomInput