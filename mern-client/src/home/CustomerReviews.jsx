import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import propic from "../assets/otherimages/iconpro.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Profiler } from 'react';

const CustomerReviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Cudtomer Reviews</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                    <div className='mt-7'>
                        <p className='mb-5'>"Bought a set of wooden chairs and they are perfect. Comfortable, durable, and elegant. The buying process was smooth and the team was very friendly."
                        </p>

                             <Avatar className='w-10 mb-4 ' 
                             img={propic}
                             alt="avatar of Jese"
                             rounded />

                             <h5 className='text-lg font-medium'>Kasun Tharanga</h5>
                             <p className='text-base '>System Administrator, UnionApperal</p>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                    <div className='mt-7'>
                        <p className='mb-5'>"Love my new coffee table! It's well-built and looks fantastic in my living room. The staff were helpful and delivery was prompt."


                        </p>

                             <Avatar className='w-10 mb-4 ' 
                             img={propic} 
                             alt="avatar of Jese"
                             rounded />

                             <h5 className='text-lg font-medium'>Danuja Fernando</h5>
                             <p className='text-base '>IT Assistant</p>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                    <div className='mt-7'>
                        <p className='mb-5'>"My new wooden desk from Liyanage Furniture House is fantastic. Solid construction and elegant design. The whole experience was seamless from order to delivery. Very satisfied!"</p>

                             <Avatar className='w-10 mb-4 ' 
                             img={propic} 
                             alt="avatar of Jese"
                             rounded />

                             <h5 className='text-lg font-medium'>Priyanga Ranadeva</h5>
                             <p className='text-base '>Group Manager</p>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                    <div className='mt-7'>
                        <p className='mb-5'>"I'm thrilled with my new desk. It's beautifully crafted and incredibly sturdy. The delivery was fast and the team was very professional."

</p>

                             <Avatar className='w-10 mb-4 ' 
                             img={propic} 
                             alt="avatar of Jese"
                             rounded />

                             <h5 className='text-lg font-medium'>Budhdhika Chathuranga</h5>
                             <p className='text-base '>Lectra Designer</p>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                    <div className='mt-7'>
                        <p className='mb-5'>"The coffee table I bought is beautiful and extremely well-made. The craftsmanship is evident in every detail. The staff was very helpful and made the entire purchasing process a breeze. Delivery was quick and the table arrived in perfect condition. Highly recommend this shop for quality wood furniture!"</p>

                             <Avatar className='w-10 mb-4 ' 
                             img={propic} 
                             alt="avatar of Jese"
                             rounded />

                             <h5 className='text-lg font-medium'>Manori Kurera</h5>
                             <p className='text-base '>Marketing Manager</p>
                    </div>
            </div>
        </SwiperSlide>



       


      </Swiper>
        </div>
    </div>
  )
}

export default CustomerReviews