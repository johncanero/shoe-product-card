import React from "react";
import Image from "next/image";
import Link from "next/link";
// Images
import TabletShoe from "../public/images/tabletShoe.jpg";
import NikeAirMax from "../public/images/nikeAirMax.jpg";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div>
      <div className="flex flex-col shadow-2xl font-Poppins  sm:bg-zinc-800 sm:hover:bg-zinc-900 sm:h-screen md:h-auto md:flex-row md:rounded-2xl md:bg-white md:mx-auto md:max-w-2xl md:mt-32 lg:mt-20 md:hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-100">
        {/* Mobile */}
        <div className="md:hidden object-cover text-zero">
          <Image
            width={600}
            height={350}
            src={NikeAirMax}
            alt="tablet-shoe.jpg"
            className=""
          />
        </div>

        {/* Tablet and Desktop */}
        <div className="hidden md:block object-cover text-zero rounded-t-lg md:h-full md:w-full md:rounded-full">
            <Image
              width={700}
              height={1125}
              src={TabletShoe}
              alt="tablet-shoe.jpg"
              className="rounded-l-xl"
            />
        </div>

        <div className="flex flex-col p-9 leading-normal md:w-11/12">
          <h2 className=" text-slate-300 md:text-gray-900 flex">
            <FontAwesomeIcon
              className="w-6 md:w-5"
              icon={faShoePrints}
            ></FontAwesomeIcon>
            <span className="tracking-widestproduct px-3 text-lg">SHOE</span>
          </h2>
          <h5 className="text-white mb-2 mt-5 text-5xl font-bold font-LeagueSpartan tracking-tight md:text-gray-900 md:dark:text-gray-900 md:text-5xl md:mt-5">
            Nike Air Vapor Max Flyknit
          </h5>
          <p className="mb-3 mt-2 md:mt-0 font-Poppins font-normal text-gray-500 md:text-gray-700 md:dark:text-gray-600">
            Where previous Air Max models filled the sole with as much air as
            possible, the VaporMax focuses on using less air, more efficiently.
          </p>
          <div className="flex flex-wrap mt-6 md:mt-4">
            <h1 className=" text-white md:text-gray-900 font-LeagueSpartan font-semibold text-5xl">
              $199.99
            </h1>
            <p className=" align-middle mx-5 text-gray-700 dark:text-gray-400 line-through md:mt-2">
              $249.99
            </p>
          </div>

            <div
              className=" bg-neonColor text-center text-gray-900 dark:hover:bg-gray-300 hover:text-black  font-semibold py-4 px-4 rounded-xl mt-7 md:mt-8"
            >
              <button>Add to Cart</button>
            </div>

            <div className="block md:hidden italic text-gray-200 text-sm text-center mt-6 mx-12">
              <p>“Yesterday you said tomorrow. JUST DO IT.” - <span className=" font-bold">Nike</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
