import React, { useEffect, useState } from 'react';
import '../../../public/ExtraSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../public/ExtraSection.css'
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const ExtraSection1 = () => {
  const   [rec,setRec]=useState([]);
  useEffect(()=>{
    fetch('https://food-bliss-server-naimur2001.vercel.app/recipes')
    .then(res=>res.json())
    .then(data=> setRec(data))
  },[])
  // console.log(rec);
  return (
    <div>
      <h1 className='heading text-4xl font-medium text-center'>Some Famous Bengali Cuisine</h1>
      <div className='bg2'>
        {
         <Swiper
         slidesPerView={1}
         spaceBetween={20}
         centeredSlides={true}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper w-2/3  my-5 "
       >
      {
   rec.map(data=> <SwiperSlide >
 
 <div className='flex justify-around items-center my-6'>
 <div className=''>
   <h1 className='text-cyan-200 font-mono font-semibold lg:text-4xl text-xl lg:mx-8 mx-5 '>{data.name}</h1>
 <p className=' font-mono font-semibold lg:text-xl text-base text-white lg:mx-8 mx-5 my-2'>{data.bio}</p>
 
 </div>
    <div className=' my-8'>
     
    
    <img src={data.picture} className=' hover:border-2 border-warning 
    rounded-2xl
    lg:w-96 lg:h-96 lg:mr-36 w-64 h-32 -ml-5 shadow-lg shadow-amber-400 ' alt="" />
    </div>
 </div>
   </SwiperSlide> )
 }
        
       </Swiper>
        }
      </div>
    </div>
  );
};

export default ExtraSection1;