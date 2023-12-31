import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/ExtraSection.css'
const Banner = () => {
  return (
    <div className='my-10'>
      
<div className='grid lg:grid-cols-2 gap-4 bg-slate-300 mt-2'>
<div className='mx-5 flex flex-col justify-center items-baseline '>
<h1 className='text-3xl font-mono font-semibold  text-amber-400 px-5 bor'>Food Bliss</h1>
<p className='text-xl font-mono font-semibold px-5 text-black shadow-lg shadow-black rounded-lg my-2'><span className='text-purple-500' >Bengali</span> cuisine is known for its vast array of fish dishes, including the famous Hilsa curry, Shorshe Ilish, and Paturi.Rice is a staple in <span className='text-purple-500' >Bengali</span> cuisine, often accompanied by lentils, vegetables, and fish.<span className='text-purple-500' >Bengali</span> sweets, like Rasgulla, Sandesh, and Mishti Doi, are a popular dessert in Bengal and worldwide.</p>
<span className='p-3'>
<Link to='/register' className='btn bg-amber-400 border-0  font-mono text-purple-700' >Get Started</Link>
</span>
</div>
<div className='mx-8 mt-2 '>
  <img src="./KISHWAR-1.png" alt="" />
</div>
</div>
    </div>
  );
};

export default Banner;