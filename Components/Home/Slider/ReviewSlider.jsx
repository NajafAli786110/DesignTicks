"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


// Add the styles directly in your component
const styles = `
  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    padding:0px 30px 30px 0px;
  }

  .swiper-pagination-bullet {
    width: 0px;
    font-size:25px;
    color:black;
    font-family:'Poppins';
  } 

  .swiper-pagination-bullet-active {
    color:black !important;
    font-size: 25px;
  }
`;

export default function App() {
  const pagination = {
    e1: 'text-gradient',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ">' + "0" +(index + 1) + '</span>';
    },
  };

  return (
    <section className='container flex flex-col gap-32 '>
      <div className='flex flex-col gap-6 w-1/2'>
        <h2 className="flex items-center gap-5 regular-30 poppins-font"><hr className="w-20 pt-1 rounded bg-black-80" /> Testimonials</h2>
        <p className='regular-24 poppins-font'>Our work speaks for itself, but it's always rewarding to hear how we've made a difference in our clients' journeys.</p>
      </div>
      <style jsx>{styles}</style>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={280}
        style={{ paddingBottom: '100px', cursor: "pointer" }}
        onAutoplay={3000}
        className="mySwiper container flex flex-wrap w-10/12"
      >
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" />
            <p className='regular-19'>“Very good with communication, friendly and professional. Something juuuust off of what I wanted, no problems and it got sorted in a flash. Very good eye for complex design as well.”</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" />
            <p className='regular-19'>“Very good with communication, friendly and professional. Something juuuust off of what I wanted, no problems and it got sorted in a flash. Very good eye for complex design as well.”</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" />
            <p className='regular-19'>“Very good with communication, friendly and professional. Something juuuust off of what I wanted, no problems and it got sorted in a flash. Very good eye for complex design as well.”</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>  
      </Swiper>
    </section>
  );
}
