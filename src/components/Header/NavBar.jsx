import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import NavItem from './NavItem';
import BurgerNavItem from './BurgerNavItem';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const NavBar = () => {
  //state and function for Hmaburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <motion.nav 
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.7 }}
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
              <NavItem
                title={"Home"}
              />
              <NavItem
                title={"LipCare"}
              />
              <NavItem
                title={"LipGloss"}
              />
              <NavItem
                title={"Lipstick"}
              />
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

              <button className="ml-3 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">View cart</span>
                <FaShoppingCart className="h-6 w-6" />
              </button>

            </div>

          </div>
          {/* HamBurger menu */}
          <div className="-mr-2 flex md:hidden">

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
            <BurgerNavItem
              title={"Home"}
            />
            <BurgerNavItem
              title={"LipCare"}
            />
            <BurgerNavItem
              title={"LipGloss"}
            />
            <BurgerNavItem
              title={"Lipstick"}
            />
          </div>

          <div className="pt-4 pb-3 border-t border-gray-300">

            <div className="flex items-center px-5">

              <button className="flex-shrink-0 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">Sign up</span>
                <FaUser className="h-6 w-6" />
              </button>

              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-700 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300">
                <span className="sr-only">View cart</span>
                <FaShoppingCart className="h-6 w-6" />
              </button>

            </div>

          </div>

        </div>
      )}

    </motion.nav>
  );
};

export default NavBar;