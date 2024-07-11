import React from 'react'
import AuthForm from '../components/AuthForm'

const SignIn = () => {
  return (
    <main>
    <div className='flex items-center justify-center size-full max-sm:px-6'>
        <AuthForm type={'sign-in'} />
    </div>
    </main>
  )
}

export default SignIn