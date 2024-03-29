import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const FurnitureCards = ({headline, furniture}) => {
  console.log(furniture);


  return (
    <div className='my-16 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center text-black my-10'>{headline}</h2>

      {/* cards */}
      
      <div className='mt-12'>
        
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper1 w-full h-full"
        >
          
          {
            furniture.map(furniture => <SwiperSlide key={furniture.id}>
              <Link to={`/furniture/${furniture._id}`}>
                  <div className='relative'>
                    <img src={furniture.imageUrl} alt=""/>
                    <div className='absolute top-3 right-3 bg-amber-600 hover:bg-black p-2 rounded ' >
                      <FaCartShopping className='w-8 h-8 text-white'/>
                    </div>
                  </div>
                  <div>
                      <div>
                        <h3>{furniture.furnitureName}</h3>
                        <p>{furniture.styleTitle}</p>
                      </div>
  
                      <div>
                        <p>{furniture.furnitureDescription}</p>
                      </div>
  
                    
                  </div>
              </Link>
            </SwiperSlide>)
  
          }
       
       
      </Swiper>

      </div>
    </div>
  )
}

export default FurnitureCards