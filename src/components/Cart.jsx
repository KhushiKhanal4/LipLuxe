import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './store/CartSlice';

function Cart() {
  const productCart = useSelector(state => state.cart.items);
  const dispatch=useDispatch()
  const removeFromCart =(id) =>{
    dispatch(remove(id))
  }

  const products = productCart.map(product => {
    return (
      
      <div className='px-8 sm:px-10 lg:px-4 xl:px-20' key={product.id}> {/* Ensure unique key prop */}
      <div className="max-w-sm mx-auto my-3 sm:max-w-full lg:max-w-2xl">
        <div className="bg-gradient-to-br from-red-50 to-red-200 shadow-md rounded-lg overflow-hidden shadow-gray-400 sm:flex sm:flex-wrap sm:justify-between sm:items-center">
          
          {/* Image Section */}
          <div className='px-6 pt-6 sm:p-6 sm:w-1/3 '>
            <img 
              className="rounded-xl drop-shadow-xl w-full  h-auto object-cover" 
              src={product.image} 
              alt={product.Name} 
            />
          </div>
          
          {/* Content Section */}
          <div className='p-6 sm:w-1/2 sm:flex sm:flex-col sm:mr-20'>
            <h3 className="text-gray-800 font-semibold text-lg sm:text-2xl tracking-tight">
              {product.Name}
            </h3>
    
            <div className="flex flex-col mt-4">
              <span className="text-lg sm:text-2xl font-bold text-gray-800 py-2">
                {product.price}
              </span>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-white bg-gradient-to-tr from-red-300 to-red-800 hover:bg-gradient-to-br transform transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-90 font-medium rounded-lg text-md px-4 py-3 mt-2 w-full sm:w-1/2 shadow-md shadow-red-950">
                Remove item
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

      <h1 className='font-extrabold bg-gradient-to-r from-gray-700 to-red-600 text-transparent bg-clip-text font-cinzel text-xl sm:text-2xl leading-tight text-center my-9'>
        My Cart
      </h1>

      <div className='grid grid-cols-1 gap-6 px-4'>
        {products}
      </div>

      <div className='w-[90%] h-0.5 bg-gray-600 mx-auto mt-20 mb-6'></div>

      <div className='flex flex-col'>

        <div className='flex justify-between mx-5 sm:mx-10 lg:mx-12 xl:mx-20 2xl:mx-32'>

          <h3 className='font-semibold text-gray-800 font-sans'>Subtotal</h3>
          <h3 className='font-semibold text-gray-800 font-sans'>$35.00 USD</h3>

        </div>

        <button className='w-[90%] bg-gradient-to-tr from-green-700 to-green-300 text-lg text-white font-bold tracking-wider font-sans py-3 mx-auto mt-20 mb-6 rounded-lg hover:bg-gradient-to-b  '>
          CHECK OUT
        </button>

      </div>
      
    </>
  )
}

export default Cart