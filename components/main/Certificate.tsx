"use client";

import { Certificates } from '@/lib/constants';
import Image from 'next/image';
import { useState } from 'react';
import * as React from "react";


export default function Certificate() {
  return (
    <div className='w-full h-full'>
      <div className='mt-10 lg:mb-20'>
        <Carousel />
      </div>
    </div>
  );
}




    
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className='flex w-full mb-2 justify-center'>
        <strong>{currentIndex}</strong>/<strong>{Certificates.length-1}</strong>
      </div>
      <div className="relative lg:w-[720px] min-h-[520px] mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-500 gap-2 lg:gap-6" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Certificates.map((certi, index) => (
            <div className="min-w-[340px] ml-3 lg:ml-0 lg:min-w-[700px] lg:min-h-[500px]" key={index} onClick={() => {window.open(certi.imageSrc)}}>
              <Image
                width={820}
                height={20} 
                src={certi.imageSrc} 
                alt={certi.title} 
                className="rounded-box w-full h-full object-cover" 
              />
            </div>
            
          ))}
        </div>
        
      </div>

      <div className="absolute left-[130px] top-[427px] lg:left-[210px] lg:top-1/2 transform -translate-y-1/2 size-8 hover:cursor-pointer" onClick={prevSlide} >
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 32 32">
          <path className={`${currentIndex === 0 ? 'fill-neutral-600' : 'fill-white'}`} d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"></path>
          <path fill="none" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"></path>
        </svg>
      </div>
      
      <div className="absolute right-[110px] top-[430px]  lg:right-[250px] lg:top-1/2 transform -translate-y-1/2 hover:cursor-pointer" onClick={nextSlide} >
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 32 32">
          <path className={`${currentIndex === 4 ? 'fill-neutral-600' : 'fill-white'}`}  d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"></path>
          <path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></path>
        </svg>
      </div>
    </>
  );
};



