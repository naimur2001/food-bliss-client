import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({data}) => {
  const {name,picture,likes,num_recipes,experience}=data;
  return (
    <div>
      <div className="card w-96 bg-orange-100 shadow-xl shadow-red-100 hover:scale-110 transform transition-transform duration-1000 ">
  <figure className="px-10 pt-10">
    <img src={picture} alt="chef" className="rounded-xl h-56 w-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="font-semibold text-2xl text-cyan-500">{name}</h2>
    <h2 className='text-base font-medium'>Experience of {experience}</h2>
    <div className="card-actions  ">
   
<Link to='/chef' ><button className="btn btn-error text-white">View Recipe</button></Link>
    </div>
  </div>
  <div className=' flex justify-between p-4'>
    <h2 className='text-lg font-semibold border-2 border-purple-300 p-2 rounded-lg'>Recipes {num_recipes}</h2>
    <div className='flex border-2 border-purple-300 p-2 rounded-lg'>
    <h2 className='text-lg font-semibold'>{likes}


    </h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
    </div>
   
  </div>
</div>
    </div>
  );
};

export default ChefCard;