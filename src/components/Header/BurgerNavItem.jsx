import React from 'react'

function BurgerNavItem(props) {
  return (
    <>
    <a href="#" className="text-gray-800 hover:bg-[#ffffff4d] hover:text-red-700 hover:border hover:border-red-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300">{props.title}</a>
    </>
  )
}

export default BurgerNavItem
   