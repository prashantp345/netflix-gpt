import React from 'react'
import Netflix_Logo_PMS from "../assets/img/Netflix_Logo_PMS.png"; 
import USerFace from "../assets/img/User_Face.png"; 
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
console.log(user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch(() => {
      navigate("/error")
    })
  };

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={Netflix_Logo_PMS}
        alt="logo"></img>
      { user && (
        <div className='flex p-2'>
          <img className='w-12 h-12' alt="usericon"
            src={USerFace} />
            <div className="flex">
              <span className="font-bold text-white m-2">{user?.displayName}</span>
              <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
            </div>
        </div> 
      )}

    </div>
  )
}

export default Header
