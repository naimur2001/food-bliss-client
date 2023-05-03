import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-1/263414313_3150592965210568_5742942123757838418_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=j1IFrpKW_b8AX-WUq-o&_nc_ht=scontent.fdac5-2.fna&oh=00_AfB96jf426jmSBdp4XjoL7d_fJRdWfg85hB7uhRPu5taag&oe=64554517
const Register = () => {
const {createUser}=useContext(AuthContext);
const [error,SetError]=useState('')
const handleSignUp=(event)=>{
event.preventDefault();
  const form=event.target;
  // const photo=form.photo.value;
  const name=form.name.value;
  const  email=form.email.value;
  const  password=form.password.value;
  // console.log(email,password);
 SetError('')
   if(email=== ''){
    SetError("Email field is empty")
  }
  else if(password=== ''){
    SetError("Password field is empty")
  }
  else if (password.length<6) {
    SetError("Password is small.")
  }
createUser(email,password)
.then(result=>{
  const loggedUser =result.user;
  // console.log(loggedUser);
  form.reset();
})
.catch(error=>{
 console.log(error);
})
}


  return (
    <div className='mt-10'>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSignUp}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="@email.com" name='email' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="//http:url" name='url' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" required name='password' className="input input-bordered" />
        
        </div>
        <p className='text-center text-red-500'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
          <label className="label">
            Already have an account --
            <Link to='/login' className="label-text-alt link link-hover text-base text-red-400 mx-3">login</Link>
          </label>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;