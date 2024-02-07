import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
               //
            } else {
                dispatch(removeUser());
            }
          });
    }, []);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
