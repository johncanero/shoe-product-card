import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import LinkUrl from "next/link";
import Image from "next/image";
import NikeLogoBlack from "../public/images/nikeLogoBlack.png";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-center bg-white shadow-sm w-full z-10">
        <div className="container flex flex-wrap justify-between items-center">
          <div className="flex items-center justify-center h-14 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center flex-shrink-0 ">
                {/* Nike Logo */}
                <div className="md:ml-10 lg:ml-1">
                  <LinkUrl href="/" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        width={60}
                        height={60}
                        src={NikeLogoBlack}
                        alt="nike-logo-black.png"
                      ></Image>
                    </a>
                  </LinkUrl>
                </div>
              </div>

              {/* Medium to Large Screens */}
              <div className="hidden md:ml-8 lg:ml-36 md:block">
                <div className="lg:ml-10 flex items-baseline space-x-4">
                  {/* React Scroll Links */}
                  <Link
                    activeClass="Men"
                    to="men"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer transition duration-150 border-b-2 border-transparent hover:border-black text-black md:px-3 lg:px-5 py-2 text-base font-medium"
                  >
                    Men
                  </Link>
                  <Link
                    activeClass="Women"
                    to="women"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer transition duration-150 border-b-2 border-transparent hover:border-black text-black md:px-3 lg:px-5 py-2 text-base font-medium"
                  >
                    Women
                  </Link>
                  <Link
                    activeClass="Kids"
                    to="kids"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer transition duration-150 border-b-2 border-transparent hover:border-black text-black md:px-3 lg:px-5 py-2 text-base font-medium"
                  >
                    Kids
                  </Link>

                  <Link
                    activeClass="Customize"
                    to="customize"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer transition duration-150 border-b-2 border-transparent hover:border-black text-black md:px-3 lg:px-5 py-2 text-base font-medium"
                  >
                    Customize
                  </Link>
                </div>
              </div>

              {/* Search Icon with Input */}
              <div className="hidden relative md:block">
                {/* Search Icon */}
                <form className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-non lg:ml-9">
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
                  className="block p-2 pl-10 text-gray-900 bg-gray-100 rounded-2xl sm:text-sm dark:placeholder-gray-400 dark:text-black md:mr-10 lg:ml-10 lg:w-full"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                    className="block h-6 w-6"
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
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar2;
