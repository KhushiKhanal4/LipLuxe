import React from 'react'


function Card({
  title,
  desc,
  url,
  png,
}) {
  
  return (
    <div className="relative w-96 h-96 perspective-1000">
      <div 
      className='absolute w-64 h-72 bg-gradient-to-t from-red-300 to-white shadow-sm  shadow-black transform rotate-x-12 rotate-y-6 z-10 rounded-xl '>
        <h1 className='text-center font-playball font-medium text-xl mt-4 mb-1 text-[#3E3A3A]'> {title}</h1>
        <p className='mx-5 font-serif text-[#504F4F] text-[0.62rem] font-medium'>{desc}</p>
        <img 
        src={png}
        alt="" 
        className='w-20 mt-9 mx-2 lg:w-20 rounded-full'/>
      </div>

      <div className='absolute w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-b from-red-300 to-white shadow-sm shadow-black transform translate-x-[60%] translate-y-[80%] sm:translate-x-1/2 sm:translate-y-[65%] lg:translate-x-[44%] z-20 rounded-full'>
        <img src={url} alt=""
        className='rounded-full p-1' />
      </div>
    
   </div>
  
  )
}

export default Card




