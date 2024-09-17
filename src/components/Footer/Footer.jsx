import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    return (
        <div className="w-full min-h-[70vh] px-7 lg:px-28 bg-gradient-to-t from-red-500 to-[#f7f7f7] flex flex-col py-9 shadow-inner mt-10 shadow-gray-500">
            <div>
                <h1 className='font-bold font-cinzel text-shadow-sm text-[#1a1919] '
                >Support</h1>
            </div>

            <hr className='text-[#504F4F] bg-[#504F4F] w-full h-0.5 my-2 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-150 cursor-pointer' />

            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Customer Support</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Return & Exchange</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Shipping Info</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>FAQ</h2>
            </div>



            <div className='pt-4'>
                <h1 className='font-bold font-cinzel text-shadow-sm text-[#1a1919] '>About</h1>
            </div>

            <hr className='text-[#504F4F] bg-[#504F4F] w-full h-0.5 my-2' />

            <div className='grid grid-cols-2 '>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>About Us</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Join Our Team</h2>

            </div>

            <div className='pt-4'>
                <h1 className='font-bold font-cinzel text-shadow-sm text-[#1a1919] '>Privacy & Terms</h1>
            </div>

            <hr className='text-[#504F4F] bg-[#504F4F] w-full h-0.5 my-2' />

            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Privacy Policy</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Terms & Conditions</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Terms of Use</h2>
                <h2 className='text-[#2b2b2b] text-sm font-semibold font-playfair my-0.5 hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'>Terms of Service</h2>
            </div>

            <div className='flex justify-between mt-10'>
                <img src="logo.png" alt="logo"
                    className='w-20 py-5 sm:28 md:w-28' />
                <div className='flex justify-center items-center justify-items-center gap-3 px-7 lg:px-28 md:gap-6'>
                <GrInstagram 
                className='text-xl lg:text-2xl drop-shadow-xl hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'/>
                <FaFacebook
                className='text-xl lg:text-2xl drop-shadow-xl hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer' />
                <FaFacebookMessenger 
                className='text-xl lg:text-2xl drop-shadow-xl hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer'/>
                <FaXTwitter
                className='text-xl lg:text-2xl drop-shadow-xl hover:transform hover:-translate-y-1 hover:transition-all hover:duration-500 cursor-pointer' />
                </div>

            </div>
        </div>
    )
}

export default Footer