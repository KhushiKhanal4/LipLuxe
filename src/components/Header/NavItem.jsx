import React from 'react'

function NavItem(props) {
  return (
    <>
    <a href="#" className="text-gray-800 hover:bg-[#ffffff4d] hover:text-red-700 hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-medium transition duration-300">{props.title}</a>
    </>
  )
}

export default NavItem