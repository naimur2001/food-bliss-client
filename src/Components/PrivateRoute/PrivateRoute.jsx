import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user,load}=useContext(AuthContext);
  if (load) {
   return <div className='flex justify-center items-center relative '>
   <div className="  absolute top-44 radial-progress animate-spin text-orange-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}></div>
 
   </div>
  }
 const location=useLocation();

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{from: location}} replace ></Navigate> ;
};

export default PrivateRoute;