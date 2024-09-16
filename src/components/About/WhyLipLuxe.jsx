import React from 'react'
import Card from './Card'

function WhyLipLuxe() {
  return (
    <>
      <div className="px-6 sm:px-6 lg:px-8">
        <h1 className="text-center  text-2xl font-extrabold font-cinzel tracking-wider text-gray-800 my-10 underline underline-offset-1">
          Why LipLuxe ?
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-7 sm:space-x-9 sm:pl-6 lg:mr-11 xl:mr-0 xl:space-x-0 xl:ml-40 mL:pl-24 mM:pl-16">
        <div className='sm:pl-10 lg:pl-8 xl:pl-0'>
        <Card />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default WhyLipLuxe
