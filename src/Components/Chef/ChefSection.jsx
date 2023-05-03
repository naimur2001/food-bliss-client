import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefSection = () => {
const [info,setInfo]=useState([])
  useEffect(()=>{
    fetch('https://food-bliss-server-naimur2001.vercel.app/datas')
    .then(res=>res.json())
    .then(data=> setInfo(data))
  },[])
// console.log(info);
  return (
    <div className='my-12'>
      <div>
        <h1 className='text-center font-serif font-semibold text-4xl text-teal-600'>Our Chefs</h1>
      </div>
      <div className="my-4 grid lg:grid-cols-3 gap-5 lg:ml-3">
{
  info.map(data=> <ChefCard key={data.id} data={data}></ChefCard>)
}
      </div>
    </div>
  );
};

export default ChefSection;