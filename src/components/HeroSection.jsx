
import React from 'react'

function HeroSection() {
  return (
    <div className=" w-full h-1/2 bg-[#ffffff] ">
      <div
        className="w-full h-[12rem] flex flex-row-reverse sm:h-96  lg:h-[30rem]"
      >
        <img src="public\Hero_images\girl2.png" alt="" />

        <div className='h-1/2  bg-white'>
        <h1 className='text-lg font-extrabold font-cinzel text-shadow-sm'>Step into a World of Color </h1>
        <h2>Discover Lipsticks That Define Your Style</h2>
        </div>

      </div>
    </div>
  )
}

export default HeroSection