import React from 'react'

function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse lg:gap-20 items-center px-4 py-8 lg:py-16">
        
        <div className="w-full lg:w-1/2 md:w-4/6 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img 
            src="public/Hero_images/red.png" 
            alt="hero-image" 
            className="h-auto max-w-full rounded-lg drop-shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center md:text-left flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight font-cinzel">
            Step into a World of Color
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 font-playfair">
            Discover Lipsticks That Define Your Style
          </h2>
        </div>

      </div>
    </div>
  )
}

export default HeroSection
