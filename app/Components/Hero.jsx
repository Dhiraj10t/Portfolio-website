import React from 'react'

const Hero = () => {
  return (
    <div className='text-white w-screen h-screen flex items-center not-lg:justify-center z-10'>
      <div className='flex flex-col lg:ml-60 '>
        <span className='lg:text-2xl md:text-2xl text-2xl not-lg:flex not-lg:justify-center font-bold opacity-70 roboto-slab'>Hi👋, I am</span>
        <span className='lg:text-9xl md:text-9xl text-7xl not-lg:flex not-lg:justify-center font-extrabold roboto-slab-600 blue lg:-mb-5 md:-mb-3 -mb2' >Dhiraj</span>
        <span className='lg:text-9xl md:text-9xl text-7xl not-lg:flex not-lg:justify-center font-extrabold roboto-slab-600 blue '>Thorat</span>
        <span className='lg:text-5xl md:text-5xl text-3xl font-medium text-[#FFD700] flex lg:mt-4 md:mt-2 mt-2 ubuntu-medium tracking-widest'>Software Engineer</span>
      </div>
    </div>
  )
}

export default Hero
