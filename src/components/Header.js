import React, { useEffect, useRef } from 'react';
import Netflix_Logo_PMS from "../assets/img/Netflix_Logo_PMS.png"; 
import User_Face from "../assets/img/User_Face.png"; 
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt);
  const selectedLanguage = useRef(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // Profile Update 
          updateProfile(user, {
            displayName: user.displayName,
            photoURL: ""
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

          }).catch((error) => {
            // setErrorMessage(error.errorCode.replace("auth/",""));
          });
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe(); // unsubscribe onAuthStateChanged Event when My Header Component unmount
  }, []);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      //
    }).catch(() => {
      navigate("/error")
    })
  };

  const showGptSearch = () => {
    dispatch(toogleGptSearch());
  }

  const handlelanguageChange = () => {
    dispatch(changeLanguage(selectedLanguage.current.value));
  }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className="w-44" src={Netflix_Logo_PMS} alt="logo"></img>
        <select className='p-2 m-2 bg-black rounded-lg font-bold text-white opacity-70 border border-white'
              ref={selectedLanguage} onChange={handlelanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => 
                <option key={lang?.identifier} value={lang?.identifier} className=''>
                  {lang.name}
                </option>)}
            </select>
      { user && (
        <div className="flex p-2">
            
            <button onClick={showGptSearch} className='p-2 m-2 bg-blue-700 rounded-lg font-bold text-white'>
            { gptSearch.showGptSearch ? "Homepage" : "GPT Search" }
            </button>
            <img className="w-12 h-12 mx-2" alt="usericon" src={User_Face} />
            <div className="flex">
              <span className="font-bold text-white m-2 absolute top-0 text-center">{user?.displayName}</span>
              <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
            </div>
        </div> 
      )}
    </div>
  )
}

export default Header;
