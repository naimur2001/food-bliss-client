// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Register from '../Register/Register';
import Login from '../Login/Login';
import FrontPage from '../FrontPage/FrontPage';
import ChefDetail from '../Chef/ChefDetail';
import ErrorPage from '../Shared/ErrorPage';





const router= createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:
    [
 {
  path: '/',
  element: <FrontPage></FrontPage>
 },
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
},
{
  path:':chef/:id',
  element:<ChefDetail></ChefDetail>
},
{
  path: '*',
  element: <ErrorPage></ErrorPage>
}
     
     
    ]
  }
])

export default router;