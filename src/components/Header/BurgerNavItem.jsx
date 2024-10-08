import React from 'react'

function BurgerNavItem(props) {
  return (
    <>
    <div className="text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 hover:border hover:border-red-50 block px-3 py-2 rounded-md text-base font-bold transition duration-300 tracking-widest text-shadow-sm">{props.title}</div>
    </>
  )
}

export default BurgerNavItem
   