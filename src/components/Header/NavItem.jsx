import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <>
    <NavLink className={ ({isActive}) => `text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 ${isActive ? "border-red-50 translate-y-4":""} hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg`}>{props.title}</NavLink>
    </>
  )
}

export default NavItem