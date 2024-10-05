import React from 'react'
import { RxCross2 } from "react-icons/rx";

function Modal({
    open,
    close,
    children
}) {
  return (
    <div
    className={`z-50 flex justify-center items-center fixed inset-0 transition-colors ${ open ? "visible bg-black/20":"invisible"}`}>
        <div className={`bg-gray-50 mx-3 max-w-md  rounded-lg shadow-lg shadow-gray-500 transition-all duration-300 ${open?"scale-100 opacity-100":"scale-125 opacity-0"}`}>
            <button className='float-right px-2 my-1.5'
            onClick={close}><RxCross2 className='text-xl text-gray-700'/></button>
             {children}
        </div>
   
  </div>
  )
}

export default Modal