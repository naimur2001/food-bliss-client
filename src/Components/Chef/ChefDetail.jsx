import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import ChefRecipeCard from './ChefRecipeCard';
const ChefDetail = () => {
  const chef_id=useParams();
  const  chefId=chef_id.id
  const [chefdata,setChefData]=useState({});
  const [load,setLoad]=useState(true);
useEffect(()=>{
if (chefdata===null) {
  setLoad(false);
}
else {
  setLoad(true)
}

fetch('https://food-bliss-server-naimur2001.vercel.app/datas')
.then(res=>res.json())
.then(data=> {
  const singleChefdata=data.find(dt=> dt.id == chefId )
  setChefData(singleChefdata);
})


},[chefId])

const {name,picture,bio,likes,num_recipes,experience,recipes,id}=chefdata;
console.log(chefdata);
  return (
    <div className='my-5'> 
    {
load === false ? <div className='flex justify-center items-center'>
  <progress className="progress text-red-600 w-56"></progress>
</div> :    <div>
        <LazyLoad>
<div>
<div className='grid grid-cols-2 gap-2 '>
<div className='mx-8 '>
  <h1 className='text-3xl font-semibold font-mono text-purple-500 my-2'>{name}</h1>
  <p className='text-xl font-medium font-mono text-rose-400 my-2'>{bio}</p>
  <div >
    <h1 className="text-xl font-mono font-medium text-slate-500 my-2">Recipes : {num_recipes}</h1>
    <h1 className="text-xl font-mono font-medium text-slate-500 my-2">Likes : {likes}</h1>
  </div>
  <h1 className='text-xl font-semibold font-mono text-cyan-500 my-2'>{experience} years of experience.</h1>
</div>
<div className='ml-44'>
<img src={picture} className='w-80 h-80 rounded-lg shadow-lg shadow-slate-600' alt="" />
</div>
</div>
<div className='border-2 border-b-amber-300 my-2'></div>
<div className='my-5 grid grid-cols-3 gap-5 ml-3'>
{
// recipes.map((rec,index)=> <ChefRecipeCard key={index} rec={rec}></ChefRecipeCard>)
}
</div>
</div>



    </LazyLoad>
    </div>
    }
   
    </div>
  );
};

export default ChefDetail;