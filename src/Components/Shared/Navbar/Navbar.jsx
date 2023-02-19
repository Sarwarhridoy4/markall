import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-900 sticky top-0'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <span className='text-white text-xl font-bold'>Markall</span>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link href='/' className='text-gray-300 hover:text-white'>
                Services
              </Link>
              <Link href='/' className='text-gray-300 hover:text-white'>
                Pricing
              </Link>
              <Link href='/' className='text-gray-300 hover:text-white'>
                About Us
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <Link
              href='/'
              className='inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-white hover:bg-green-600'
            >
              Get Started
            </Link>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
              aria-label='Main menu'
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className='px-2 pt-2 pb-3'>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900'
          >
            Services
          </Link>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'
          >
            Pricing
          </Link>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'
          >
            About Us
          </Link>
        </div>
        <div className='px-2 pt-2 pb-3'>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-600'
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;