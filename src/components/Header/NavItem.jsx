import React from 'react'

function NavItem(props) {
  return (
    <>
    <a href="#" className="text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 active:translate-y-4 hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg">{props.title}</a>
    </>
  )
}

export default NavItem