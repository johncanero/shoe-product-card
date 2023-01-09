import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import NikeLogoBlack from "../public/images/nikeLogoBlack.png";

function NavbarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="z-10 justify-center bg-white shadow-sm md:w-full md:flex">
        <div className="container md:justify-between">
          <div className="flex items-center w-screen h-16 md:h-14 md:w-full">
            <div className="flex items-center w-full sm:ml-10 md:justify-between">
              <div className="items-center flex-shrink-0 ">
                {/* Nike Logo */}
                <div className="md:ml-10 lg:ml-1">
                  <Link href="/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        width={60}
                        height={60}
                        src={NikeLogoBlack}
                        alt="nike-logo-black.png"
                      ></Image>
                    </a>
                  </Link>
                </div>
              </div>

              {/* Medium to Large Screens */}
              <div className="hidden lg:ml-36 md:block">
                <div className="flex items-baseline space-x-4 lg:ml-10">
                  {/* React Scroll Links */}
                  <a
                    href="https://www.nike.com/ph/men"
                    target="_blank"
                    rel="noopener noreferrer"
                    activeClass="Men"
                    to="men"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-2 text-base font-medium text-black transition duration-150 border-b-2 border-transparent cursor-pointer hover:border-black md:px-3 lg:px-5"
                  >
                    Men
                  </a>
                  <a
                    href="https://www.nike.com/ph/women"
                    target="_blank"
                    rel="noopener noreferrer"
                    activeClass="Women"
                    to="women"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-2 text-base font-medium text-black transition duration-150 border-b-2 border-transparent cursor-pointer hover:border-black md:px-3 lg:px-5"
                  >
                    Women
                  </a>
                  <a
                    href="https://www.nike.com/ph/kids"
                    target="_blank"
                    rel="noopener noreferrer"
                    activeClass="Kids"
                    to="kids"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-2 text-base font-medium text-black transition duration-150 border-b-2 border-transparent cursor-pointer hover:border-black md:px-3 lg:px-5"
                  >
                    Kids
                  </a>

                  <a
                    href="https://www.nike.com/ph/nike-by-you"
                    target="_blank"
                    rel="noopener noreferrer"
                    activeClass="Customize"
                    to="customize"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-2 text-base font-medium text-black transition duration-150 border-b-2 border-transparent cursor-pointer hover:border-black md:px-3 lg:px-5"
                  >
                    Customize
                  </a>
                </div>
              </div>

              {/* Search Icon with Input */}
              <div className="relative hidden md:block">
                {/* Search Icon */}
                <form className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-non lg:ml-11">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
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
                  </button>
                  <span className="sr-only">Search icon</span>
                </form>

                {/* Input Field - Tablet and Desktop */}
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-10 text-gray-900 bg-gray-100 rounded-2xl sm:text-sm dark:placeholder-gray-400 dark:text-black md:mr-10 lg:ml-12 lg:w-full"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="flex mr-5 md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-500 bg-white rounded-md hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="flex justify-center md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-2 bg-white sm:px-3"
              >
                <a
                  href="https://www.nike.com/ph/men"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeClass="men"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 text-base font-medium text-center text-black transition duration-150 border-b-2 border-transparent rounded-md cursor-pointer hover:border-black hover:text-black"
                >
                  Men
                </a>
                <a
                  href="https://www.nike.com/ph/women"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeClass="women"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 text-base font-medium text-center text-black transition duration-150 border-b-2 border-transparent rounded-md cursor-pointer hover:border-black hover:text-black"
                >
                  Women
                </a>

                <a
                  href="https://www.nike.com/ph/kids"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeClass="kids"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 text-base font-medium text-center text-black transition duration-150 border-b-2 border-transparent rounded-md cursor-pointer hover:border-black hover:text-black"
                >
                  Kids
                </a>
                <a
                  href="https://www.nike.com/ph/nike-by-you"
                  target="_blank"
                  rel="noopener noreferrer"
                  activeClass="customize"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 text-base font-medium text-center text-black transition duration-150 border-b-2 border-transparent rounded-md cursor-pointer hover:border-black hover:text-black"
                >
                  Customize
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavbarToggle;
