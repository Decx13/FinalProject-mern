import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BannerSlide.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerSlide = () => {
  return (
    <div className='banner'>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src='src\assets\slideImages\1 (1).jpg'></img></SwiperSlide>
        <SwiperSlide><img src='src/assets/slideImages/bed.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/71wuqXT4ZDL._AC_UF894,1000_QL80_.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/1.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/81x9tv3UufL.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/Teal-WIndows-Home-Page-Windows-0002.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='src/assets/slideImages/Glenview-Haus-Custom-Doors-and-Wine-Cellars-Showroom-01.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/double-pedestal-dressing-table-old-wood.jpg'></img></SwiperSlide>
        <SwiperSlide><img  src='src/assets/slideImages/cubboard.jpg'></img></SwiperSlide>
      </Swiper>
       
    </div>
  )
}

export default BannerSlide