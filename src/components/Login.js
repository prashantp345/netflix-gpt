import React, { useState } from 'react'
import Header from './Header'
import netflix from "../assets/img/netflix-logo.svg"

const Login = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
           alt="logo"></img>
      </div>
      <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm &&
           <input type='text' placeholder='Full Name' 
           className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        }  
        <input type='text' placeholder='Email Address' 
          className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        <input type='password' placeholder='Password' 
          className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-sm'>{ isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4'>{ isSignInForm ? 'New to Netflix?' : 'Already Register?'}
            <span className='hover:underline cursor-pointer font-bold' onClick={toggleSignInForm}> 
            { isSignInForm ? ' Sign Up Now' : ' Sign In'} </span>
        </p>
        
      </form>
    </div>
  )
}

export default Login;
