import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const ChefCard = ({data}) => {
  const {name,picture,likes,num_recipes,experience,id}=data;
  return (
    <div>
      <div className="card w-96 bg-gray-100 shadow-xl shadow-slate-200 hover:scale-110 transform transition-transform duration-1000 ">
  <figure className="px-10 pt-10">
    <img src={picture} alt="chef" className="rounded-xl h-56 w-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="font-semibold text-2xl text-cyan-500">{name}</h2>
    <h2 className='text-base font-medium'>Experience of {experience}</h2>
    <div className="card-actions  ">
   
<Link to={`/chef/${id}`} ><button className="btn btn-error text-white">View Recipe</button></Link>
    </div>
  </div>
  <div className=' flex justify-between  p-4'>
    <h2 className='text-lg font-semibold border-2 border-purple-300 p-2 rounded-lg'>Recipes {num_recipes}</h2>
    <div className='flex justify-around gap-3 items-center border-2 border-purple-300 p-2 rounded-lg'>
    <h2 className='text-lg font-semibold'>{likes}


    </h2>
  <span>
  <FontAwesomeIcon size='lg'  icon={faThumbsUp} />
  </span>
    </div>
   
  </div>
</div>
    </div>
  );
};

export default ChefCard;