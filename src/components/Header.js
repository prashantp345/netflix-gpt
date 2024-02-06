import React from 'react'
import Netflix_Logo_PMS from "../assets/img/Netflix_Logo_PMS.png"; 

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-44'
        src={Netflix_Logo_PMS}
        alt="logo"></img>
    </div>
  )
}

export default Header
