import React from 'react'

function Card() {
  return (
    <div class="relative w-96 h-96 perspective-1000">
      <div 
      className='absolute w-64 h-72 bg-[#FEEACD] shadow-sm  shadow-black transform rotate-x-12 rotate-y-6 z-10 rounded-xl '>
        <h1 className='text-center font-playball font-medium text-xl mt-4 mb-1 text-[#3E3A3A]'> Premium Quality Ingredients</h1>
        <p className='mx-5 font-serif text-[#504F4F] text-[0.62rem] font-medium'>At Lip Luxe, we use only the finest, skin-friendly ingredients to ensure our lipsticks not only look stunning but also nourish your lips. Our formulas are enriched with natural oils and butters, providing a smooth application while being cruelty-free and free from harmful chemicals</p>
        <img 
        src="About\avocado-removebg-preview.png" 
        alt="" 
        className='w-24 mt-9 mx-2 lg:w-20'/>
      </div>

      <div className='absolute w-44 h-44 sm:w-52 sm:h-52 bg-[#FEEACD] shadow-sm shadow-black transform translate-x-[60%] translate-y-[80%] sm:translate-x-1/2 sm:translate-y-[65%] lg:translate-x-[44%] z-20 rounded-full'>
        <img src="About\ingredient.jpg" alt=""
        className='rounded-full p-1' />
      </div>
    
   </div>
  
  )
}

export default Card




