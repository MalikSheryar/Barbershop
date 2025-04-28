import React, { useState } from 'react';

export default function Navbar() {
  // State for controlling the visibility of the navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // Function to toggle navbar visibility
  const handleToggle = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <nav className='w-10/12 m-auto pt-5 md:pt-0'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-[Poppins]">Beauty.</span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-3 text-sm border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 placeholder-red-600" placeholder="Search" />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isNavbarVisible}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          {/* Navbar items */}
          <div
            className={`items-center justify-between ${isNavbarVisible ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 end-4 flex items-center ps-3  pointer-events-none">
                <svg className="w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-red-600" placeholder="Search..." />
            </div>
            <ul className="flex flex-col poppins-regular p-4 2xl:space-x-14 md:p-10 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded  md:p-0 font-[Poppins] font-normal hover:text-red-600 hover:underline decoration-4" aria-current="page">Home</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href="#" className="block py-2 px-3 rounded md:p-0 text-white font-[Poppins] font-normal  hover:text-red-600 hover:underline decoration-4">Services</a>
                <select className='bg-transparent text-white'></select>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded md:p-0  text-white font-[Poppins] font-normal  hover:text-red-600 hover:underline decoration-4">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded md:p-0  text-white font-[Poppins] font-normal  hover:text-red-600 hover:underline decoration-4">FAQ</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded md:p-0  text-white font-[Poppins] font-normal  hover:text-red-600 hover:underline decoration-4">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
