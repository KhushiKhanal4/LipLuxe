import React from 'react'
import Categories from './Hero/Categories'

function Lipstick() {
  return (
    <>
    <Categories
    img={"./images/lipstick.jpg" }
    title={"Ready to redefine your look?"}
    desc={"Discover our luxurious lipsticks that deliver intense color and long-lasting comfort."}/>

<h1 className='font-extrabold bg-gradient-to-r from-gray-700 to-red-600 text-transparent bg-clip-text font-cinzel text-xl sm:text-2xl leading-tight text-center'> 8 Products </h1>
    </>
  )
}

export default Lipstick