import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faMoneyBill, faMoneyBill1, faPersonBiking } from '@fortawesome/free-solid-svg-icons'

const ExtraSection2 = () => {
  return (
    <div className='my-5'>
      <h1 className='font-semibold font-mono text-4xl text-center text-red-600'>Our Features</h1>
      <div className='bg3 grid lg:grid-cols-3 gap-2 my-5'>
      <div className="card w-72 my-3 mx-auto rounded-full h-72 bg-green-100 border-t-8 border-b-8 border-purple-600 text-neutral-content">
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-rose-400 text-2xl">Fast Delivery</h2>
    <h2>
    <FontAwesomeIcon size='7x' color='tomato' icon={faPersonBiking} />
    </h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      <div className="card w-72 my-3 mx-auto rounded-full h-72 bg-green-100 border-t-8 border-b-8 border-green-600 text-neutral-content">
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-sky-400 text-2xl">Fresh Baked</h2>
    <h2>
    <FontAwesomeIcon size='7x' color='purple' icon={faBowlRice} />
    </h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      <div className="card w-72 my-3 mx-auto  rounded-full h-72 bg-green-100 border-t-8 border-b-8 border-rose-600 text-neutral-content">
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-rose-400 text-2xl">Reasonable Price</h2>
    <h2>
    <FontAwesomeIcon size='7x' color='lightpink' icon={faMoneyBill1} />
    </h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ExtraSection2;