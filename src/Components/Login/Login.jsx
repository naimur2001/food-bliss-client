
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { GoogleAuthProvider } from 'firebase/auth';




const Login = () => {
  // authprovider
  const {signIn,googleSignIn,
    gitSignIn}=useContext(AuthContext);

    //privateroute
    
    const location=useLocation();
    const navigate=useNavigate();
    const from=location?.state?.from?.pathname || '/'
// error
  const [error,SetError]=useState('')
  // random signin
const handleSignIn=(event)=>{
  event.preventDefault();
  const form=event.target;
  const  email=form.email.value;
  const  password=form.password.value;
  SetError('');
  signIn(email,password)
  .then(result=>{
    const loggedUser =result.user;
    console.log(loggedUser);
    form.reset();
    navigate(from)
  })
  .catch(error=>{
   
   if (error.code === 'auth/wrong-password') {
     SetError('Incorrect password');
   }
   else if (error.code === 'auth/user-not-found') {
    SetError('Incorrect email')
   } else {
     SetError(error.message);
   }
  })
}
// google
const handleGoogle=(event)=>{
 event.preventDefault()
  googleSignIn()
  .then(result=>{
    const loggedUser =result.user;
    console.log(loggedUser);
   
  })
  .catch(error=>{
   console.log(error.message);  
  })
}
// git
const handleGithub=(event)=>{
  event.preventDefault()
  gitSignIn()
  .then(result=>{
    const loggedUser =result.user;
    // console.log(loggedUser);
   
  })
  .catch(error=>{
   console.log(error.message);  
  })
}
  return (
    <div className='mt-10'>
<form onSubmit={handleSignIn}>
<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Login!</h1>
    
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
     
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="@email.com" required name='email' className="input input-bordered" />
      </div>
    
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" required name='password' className="input input-bordered" />
      
      </div>
      <p className='text-center text-red-500'>{error}</p>
      <div className="form-control mt-6">
        <button className="btn btn-warning my-2">Login</button>
        <Link className='text-blue-500 text-center'>Forgot Password !</Link>
        <button onClick={handleGoogle} className="btn bg-red-200 border-0 text-black my-2">
         <img src="./Google__G__Logo.svg.webp" className='w-7 h-7 mx-2' alt="" />
          Login with Google</button>
        <button onClick={handleGithub} className="btn bg-cyan-400 border-0 text-black my-2">
          <img src="./25231.png" className='w-7 h-7 mx-2' alt="" />
          Login with Github</button>
        <label className="label">
          Don't have an account --
          <Link to='/register' className="label-text-alt link link-hover text-base text-red-400 mx-3">Regsiter</Link>
        </label>
      </div>
    </div>
  </div>
</div>
</div>
</form>
  </div>
  );
};

export default Login;