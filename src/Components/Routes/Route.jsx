// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Register from '../Register/Register';
import Login from '../Login/Login';



const router= createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:
    [
      {
        path:'blog',
        element: <Blog></Blog>
      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ]
  }
])

export default router;