import React, { useEffect } from 'react';
import Netflix_Logo_PMS from "../assets/img/Netflix_Logo_PMS.png"; 
import User_Face from "../assets/img/User_Face.png"; 
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
          debugger
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

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className="w-44" src={Netflix_Logo_PMS} alt="logo"></img>
      { user && (
        <div className="flex p-2">
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
