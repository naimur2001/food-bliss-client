
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';




const Login = () => {
  
  const {user,signIn,googleSignIn,
    gitSignIn}=useContext(AuthContext);
  const [error,SetError]=useState('')
const handleSignIn=(event)=>{
  event.preventDefault();
  const form=event.target;
  const  email=form.email.value;
  const  password=form.password.value;
  SetError('');
  signIn(email,password)
  .then(result=>{
    const loggedUser =result.user;
    // console.log(loggedUser);
    form.reset();
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
const handleGoogle=()=>{
  googleSignIn()
}
const handleGithub=()=>{

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
        <input type="text" placeholder="@email.com" name='email' className="input input-bordered" />
      </div>
    
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name='password' className="input input-bordered" />
      
      </div>
      <p className='text-center text-red-500'>{error}</p>
      <div className="form-control mt-6">
        <button className="btn btn-warning my-2">Login</button>
        <button onSubmit={handleGoogle} className="btn bg-red-200 border-0 text-black my-2">
         <img src="../../../public/Google__G__Logo.svg.webp" className='w-7 h-7 mx-2' alt="" />
          Login with Google</button>
        <button onSubmit={handleGithub} className="btn bg-cyan-400 border-0 text-black my-2">
          <img src="../../../public/25231.png" className='w-7 h-7 mx-2' alt="" />
          Login with Github</button>
        <label className="label">
          Don't have an account --
          <Link to='/regsiter' className="label-text-alt link link-hover text-base text-red-400 mx-3">Regsiter</Link>
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