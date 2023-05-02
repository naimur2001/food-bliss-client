import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='my-10'>
      
<div className='grid lg:grid-cols-2 gap-4 bg-red-100 mt-2'>
<div className='mx-5 flex flex-col justify-center items-baseline '>
<h1 className='text-3xl font-mono font-semibold text-purple-500 px-3'>Food Bliss</h1>
<p className='text-xl font-mono px-3 text-black my-2'>Bengali cuisine is known for its vast array of fish dishes, including the famous Hilsa curry, Shorshe Ilish, and Paturi.Rice is a staple in Bengali cuisine, often accompanied by lentils, vegetables, and fish.Bengali sweets, like Rasgulla, Sandesh, and Mishti Doi, are a popular dessert in India and worldwide.</p>
<span className='p-3'>
<Link to='/register' className='btn bg-amber-400 border-0  font-mono text-purple-700' >Get Started</Link>
</span>
</div>
<div className='mx-8 mt-2 '>
  <img src="../public/KISHWAR-1.png" alt="" />
</div>
</div>
    </div>
  );
};

export default Banner;