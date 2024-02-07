import { useState, useRef  } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [ isSignInForm, setIsSignInForm ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {

    // validate form field data
    const nameValue = !isSignInForm ? name.current.value : true; 
    const message = checkValidData(email.current.value, password.current.value, nameValue);
    setErrorMessage(message);
    if(message) return;
    
    if(isSignInForm) {
      // Login logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const {uid, email, displayName} = userCredential.user;;
          dispatch(addUser({ uid: uid, email : email, displayName: displayName}))
       
        })
        .catch((error) => {
          //const errorCode = error.code;
          //const errorMessage = error.message;
          setErrorMessage("Invalid Credential");
        });
    } else {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // Profile Update 
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: ""
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));

          }).catch((error) => {
            setErrorMessage(error.errorCode.replace("auth/",""));
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          setErrorMessage(errorCode.replace("auth/",""));
        });
    }
  }

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
      <form className='w-4/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        onSubmit={(e)=> e.preventDefault() } >
        <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm &&
           <input type='text' placeholder='Full Name' ref={name}
           className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        }  
        <input type='text' placeholder='Email Address' ref={email}
          className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        <input type='password' placeholder='Password' ref={password}
          className='p-4 my-4 w-full rounded-sm bg-gray-700 bg-opacity-70' />
        { errorMessage && <p className='py-1 text-red-500'>{errorMessage}</p> }
        <button className='p-4 my-6 bg-red-700 w-full rounded-sm' onClick={handleClick}>{ isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4'>{ isSignInForm ? 'New to Netflix?' : 'Already Register?'}
            <span className='hover:underline cursor-pointer font-bold' onClick={toggleSignInForm}> 
            { isSignInForm ? ' Sign Up Now' : ' Sign In'} </span>
        </p>
        
      </form>
    </div>
  )
}

export default Login;
