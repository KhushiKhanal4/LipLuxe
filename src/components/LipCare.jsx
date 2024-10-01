import React from 'react';
import Categories from './Hero/Categories';
import lipcare from '../data/lipcare';

function LipCare() {

  const products = lipcare.map(product => {
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
                <button className="text-gray-900 bg-gradient-to-tr from-gray-300 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-md px-4 py-3 mt-2  w-1/2 ">
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
        img={"./images/lipcare.jpg"}
        title={"Ready for Softer, Smoother Lips?"}
        desc={"Discover our range of lip care products tailored to meet your every need."}
      />

      <h1 className='font-extrabold bg-gradient-to-r from-gray-700 to-red-600 text-transparent bg-clip-text font-cinzel text-xl sm:text-2xl leading-tight text-center mb-7'>
        6 Products
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'> {/* Add padding for smaller screens */}
        {products}
      </div>
    </>
  );
}

export default LipCare;
