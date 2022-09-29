import React from "react";
import Image from "next/image";
import Link from "next/link";
import NikeLogoBlack from "../public/images/nikeLogoBlack.png";

const Navbar = () => {
  return (
    <div>
      {/* Help | Join Us | Sign In */}
      <div className="flex bg-neonColor2 font-Poppins md:text-sm md:py-2 lg:text-xs lg:py-2.5 justify-center">
        <div className="flex lg:flex justify-between md:ml-100 lg:ml-150">
          <Link href="https://www.nike.com/ph/help" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <p className=" md:mx-1.5 lg:mx-1.5">Help</p>
            </a>
          </Link>
          <p className="lg:mx-1">|</p>
          <Link href="https://www.nike.com/ph/membership" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <p className=" md:mx-1.5 lg:mx-1.5">Join Us</p>
            </a>
          </Link>
          <p className="lg:mx-1">|</p>
          <Link href="https://www.nike.com/ph/member/profile/login?continueUrl=https://www.nike.com/ph/membership" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <p className=" md:mx-1.5 lg:mx-1.5">Sign In</p>
            </a>
          </Link>
        </div>
      </div>

      <nav className="flex justify-center bg-white border-gray-200 px-2 sm:px-4 py-1 rounded">
        <div className="container flex flex-wrap justify-between items-center">
          {/* Nike Logo */}
          <Link href="" passHref>
            <a className="w-12 md:ml-10 lg:ml-1">
              <Image src={NikeLogoBlack} alt="nike-logo-black.png"></Image>
            </a>
          </Link>

          <div className="flex md:order-2">
            {/* Search Button - Mobile */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5 mr-1  focus:ring-2 focus:ring-gray-200"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* Search Icon with Input */}
            <div className="hidden relative md:block md:mr-6">
              {/* Search Icon */}
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-non lg:ml-20">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              {/* Input Field - Tablet and Desktop */}
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-100 rounded-2xl sm:text-sm dark:placeholder-gray-400 
                dark:text-black lg:ml-20"
                placeholder="Search..."
              />
            </div>

            {/* Mobile */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            {/* Anchor Links */}
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:ml-16 lg:ml-72 lg:mr-3">
              <li>
                <Link href="/" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 pr-4 pl-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:text-sm dark:text-white lg:mx-12"
                    aria-current="page"
                  >
                    Men
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:text-sm dark:text-white lg:mx-12"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:text-sm dark:text-white lg:mx-12"
                >
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
