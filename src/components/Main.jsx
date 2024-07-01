import React from 'react'
import Background from '../assets/Background.png'

const Main = () => {
  return (
    <div >
        <div>
            <div className='absolute w-full h-full bg-gradient-to-l from-[#00091A] opacity-10 '></div>
            <img 
                className='w-full h-full bg-center bg-cover'
                src={Background} alt="" />
        </div>
        <div >
          <div className='absolute font-lora font-bold text-[60px] text-right w-[655px] h-[164px] top-[140px] left-[780px]'>
              <h1>Find the perfect car for you at YourCar.</h1>
          </div>
          <div className='absolute w-[395px] h-[221px] top-[330px] left-[1030px] font-lora font-bold text-[32px] text-right'>
            <h1>We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!</h1>
          </div>
          <div className='absolute top-[600px] left-[1230px] '>
            <button className='flex flex-row items-center px-10 py-3 gap-[10px] w-[195px] h-[55px] border-[2px] rounded-lg  border-white'>
              <h1 className='font-lora font-bold text-2xl '>Discover </h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>

            </button>
          </div>
        </div>

    </div>
  )
}

export default Main