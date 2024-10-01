import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import BurgerNavItem from './BurgerNavItem';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  //state and function for Hmaburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav
      
      className="bg-gradient-to-b from-red-400 to-[#ffffff00] shadow-lg py-4 font-playfair font-semibold">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-28" src="logo.png" alt="Logo" />
          </div>
          {/* Navbar for large screens */}
          <div className="hidden md:block">

            <div className="ml-10 flex items-baseline space-x-4">
              
              <NavLink to="/"
              className={ ({isActive}) => `text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 ${isActive ? "text-red-700 bg-[#ffffff4d]  border border-red-50 ":""} hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg`}>
               Home
              </NavLink>

              <NavLink to="/LipCare"
               className={ ({isActive}) => `text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 ${isActive ? "text-red-700 bg-[#ffffff4d]  border border-red-50 ":""} hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg`}>
              LipCare
              </NavLink>

              <NavLink to="/LipGloss"
               className={ ({isActive}) => `text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 ${isActive ? "text-red-700 bg-[#ffffff4d]  border border-red-50 ":""} hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg`}>
              LipGloss
              </NavLink>

              <NavLink to="/Lipstick"
               className={ ({isActive}) => `text-gray-900 hover:bg-[#ffffff4d] hover:text-red-700 ${isActive ? "text-red-700 bg-[#ffffff4d]  border border-red-50 ":""} hover:border hover:border-red-50 px-3 py-2 rounded-md text-lg font-bold transition duration-300 tracking-widest text-shadow-lg`}>
              Lipstick
              </NavLink>

            </div>

          </div>
          {/* Icon buttons for large screens */}
          <div className="hidden md:block">

            <div className="ml-4 flex items-center md:ml-6">


              <button className="p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">Sign up</span>
                {/*sr-only refers to screen readers only This class ensures that content is invisible to sighted users but remains available to assistive technologies */}
                <FaUser className="h-6 w-6" />
              </button>

              
              <NavLink to="/Cart">
              <button className="ml-3 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">View cart</span>
                <FaShoppingCart className="h-6 w-6" />
              </button>
              </NavLink>

            </div>

          </div>

          {/* HamBurger menu */}
          <div className="-mr-2 flex gap-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-800 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {
                isOpen ? (<FaTimes className="block h-6 w-6" aria-hidden="true" />) : (<FaBars className="block h-6 w-6" aria-hidden="true" />)
              }

            </button>

          </div>

        </div>

      </div>
      {/* Conditional rendering i.e., using '&&' is a common pattern in React. The && is a short-circuit operator that means "only render the following JSX if isOpen is true." */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">

            <NavLink to="/">
            <BurgerNavItem
              title={"Home"}
            />
            </NavLink>

            <NavLink to="/LipCare">
            <BurgerNavItem
              title={"LipCare"}
            />
            </NavLink>

            <NavLink to="/LipGloss">
            <BurgerNavItem
              title={"LipGloss"}
            />
            </NavLink>

            <NavLink to="/Lipstick">
            <BurgerNavItem
              title={"Lipstick"}
            />
            </NavLink>

          </div>

          <div className="pt-4 pb-3 border-t border-gray-300">

            <div className="flex items-center px-5">


              <button className="flex-shrink-0 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">Sign up</span>
                <FaUser className="h-6 w-6" />
              </button>


              <NavLink to="/Cart">
              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">View cart</span>
                <FaShoppingCart className="h-6 w-6" />
              </button>
              </NavLink>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default NavBar;