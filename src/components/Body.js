import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayMovie from './PlayMovie';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/movie",
            element: <PlayMovie/>
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
