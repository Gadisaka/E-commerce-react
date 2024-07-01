import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex items-center justify-between p-5 z-[100] w-[1370px] h-[69px] absolute top-[22px] left-[78px] bg-lack text-2xl'>
          <a href="/" className='font-bold text-5xl right-0 font-lora'>Your<span className='font-normal size-48'>Car</span></a>
          <div className='relative space-x-4 '>
            <a href="/"  className="text-white font-bold font-noto-sans relative px-5 py-3 inline-block transition duration-300 ease-in-out hover:text-red-900">Home</a>
            <a href="/"  className="text-white font-bold font-noto-sans relative px-5 py-3 inline-block transition duration-300 ease-in-out hover:text-red-900">About</a>
            <a href="/"  className="text-white font-bold font-noto-sans relative px-5 py-3 inline-block transition duration-300 ease-in-out hover:text-red-900">Services</a>
            <a href="/"  className="text-white font-bold font-noto-sans relative px-5 py-3 inline-block transition duration-300 ease-in-out hover:text-red-900">Cars</a>
            <a href="/"  className="text-white font-bold font-noto-sans relative px-5 py-3 inline-block transition duration-300 ease-in-out hover:text-red-900">Contact us</a>
            <a href="/">dd</a>
          </div>
        </nav>
    </>
  )
}

export default Navbar

