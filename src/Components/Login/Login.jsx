
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-10'>
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
      <div className="form-control mt-6">
        <button className="btn btn-warning">Login</button>
        <button className="btn bg-red-200 border-0 text-black my-3">
         <img src="../../../public/Google__G__Logo.svg.webp" className='w-7 h-7 mx-2' alt="" />
          Login with Google</button>
        <button className="btn bg-cyan-400 border-0 text-black my-3">
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
  </div>
  );
};

export default Login;