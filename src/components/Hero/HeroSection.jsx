import React from 'react';
import Slider from "react-slick"; // Import Slider component from react-slick
// for change effect
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: "/images/red.png"
  },
  {
    id: 2,
    img: "/images/red2.png"
  },
  {
    id: 3,
    img: "/images/pink.png"
  },
  {
    id: 4,
    img: "/images/pinky.png"
  },
  {
    id: 5,
    img: "/images/purple.png"
  },
  {
    id: 6,
    img: "/images/brown.png"
  },
  {
    id: 7,
    img: "https://images.ctfassets.net/wlke2cbybljx/5Ew18kSIjmcN2yrIUU79sL/46c4f4e1c66f6cd71484accc8a21d628/PRODUCT_SHOT_STILL_ERIN_SUPERMODELLIPSTICK_702.jpg?w=660&h=660&fit=fill&fm=jpg&bg="
  }
];

// Function for fade changing effect
const settings = {
  dots:false,
  fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow:false
   
};

function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse lg:gap-20 items-center px-4 py-8 lg:py-16">
        {/* Image Slider */}
       
          <Slider {...settings} className=" relative z-10 w-full lg:w-1/2 md:w-4/6 flex justify-center lg:justify-start mb:5 sm:mb-8 lg:mb-0 focus:outline-none">
            {ImageList.map((data) => (
              <div key={data.id} className='w-32'>
                <img
                  src={data.img}
                  alt="hero-image"
                  className="h-auto max-w-full rounded-lg "
                />
              </div>
            ))}
          </Slider>
        

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 text-center md:text-left flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight font-cinzel animate-fade-down animate-once animate-duration-[2000ms]">
            Step into the World of Color
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 font-playfair animate-fade-right animate-once animate-duration-1500 animate-delay-[200ms]">
            Discover Lipsticks That Define Your Style
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
