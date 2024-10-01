import React from 'react'
import Categories from './Hero/Categories'
import lipstick from '../data/lipstick';

function Lipstick() {
  const products = lipstick.map(product => {
    return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-10 lg:px-4 xl:px-20' key={product.id}> {/* Add unique key prop */}
        <div className="max-w-sm mx-auto sm:max-w-2xl my-3">
          <div className="bg-gradient-to-br from-red-50 to-red-200 shadow-md rounded-lg overflow-hidden shadow-gray-400 sm:w-72 xl:w-80">

            <div className='p-6'>
              <img className="rounded-xl drop-shadow-xl w-full h-auto object-cover" src={product.image} alt={product.Name} />
            </div>

            <div className="px-6 pb-5">
              <h3 className="text-gray-800 font-semibold text-lg sm:text-xl tracking-tight">
                {product.Name}
              </h3>

              <div className="flex flex-col  mt-4">
                <span className="text-lg sm:text-2xl font-bold text-gray-800 py-2">
                  {product.price}
                </span>
                <button 
                className="text-gray-900 bg-gradient-to-tr from-gray-300 to-red-400 hover:bg-gradient-to-br  transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-90 font-medium rounded-lg text-md px-4 py-3 mt-2 w-1/2 shadow-md shadow-red-950">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Categories
        img={"./images/lipstick.jpg"}
        title={"Ready to redefine your look?"}
        desc={"Discover our luxurious lipsticks that deliver intense color and long-lasting comfort."} />

      <h1 className='font-extrabold bg-gradient-to-r from-gray-700 to-red-600 text-transparent bg-clip-text font-cinzel text-xl sm:text-2xl leading-tight text-center'> 8 Products </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {products}
      </div>
    </>
  )
}

export default Lipstick