import React, { useEffect, useState } from 'react';

const ChefSection = () => {
const [info,setInfo]=useState([])
  useEffect(()=>{
    fetch('https://food-bliss-server-naimur2001.vercel.app/datas')
    .then(res=>res.json())
    .then(data=> setInfo(data))
  },[])
console.log(info);
  return (
    <div className='my-12'>
      <div>
        <h1 className='text-center font-serif font-semibold text-4xl text-teal-600'>Our Chefs</h1>
      </div>
      <div className="my-4">

      </div>
    </div>
  );
};

export default ChefSection;