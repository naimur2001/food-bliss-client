import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const ChefRecipeCard = ({rec}) => {
const {name,ingredients,cooking_method,rating,image}=rec

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} className='w-60 h-56 rounded-2xl' alt="food" /></figure>
  <div className="card-body">
    <h2 className="card-title text-purple-600">
      {name}
      <div className="badge badge-secondary text-lg p-2">{rating}  <FontAwesomeIcon size='sm' color='yellow' className='ml-1'  icon={faStar} /> </div>
    </h2>
    <p> <span className='mr-2 font-medium text-orange-500'>Cooking Method : </span>
      {cooking_method}</p>
    <div className=''>
   <span className='mr-2 font-medium text-orange-500'> Ingredients :</span>
      <div className='grid grid-cols-2'>
      {
ingredients.map(ing=> <li>{ing}</li>)
      }
      </div>
    </div>
    <div className="card-actions justify-end">
      
      <div className="badge text-xl py-3 border-warning border-2  badge-outline">Favourite !</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ChefRecipeCard;