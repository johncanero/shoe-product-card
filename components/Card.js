import React from "react";
import Image from "next/image";
import TabletShoe from "../public/images/tabletShoe.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoePrints} from '@fortawesome/free-solid-svg-icons'


const Card = () => {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-2xl border shadow-2xl font-Poppins md:flex-row md:mx-auto md:max-w-2xl md:mt-60 lg:mt-40 hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-100">
        <div className="object-cover w-full h-96 text-zero rounded-t-lg md:h-full md:w-full md:rounded-full">
          <Image
            width={700}
            height={1100}
            src={TabletShoe}
            alt="tablet-shoe.jpg"
            className="rounded-l-xl"
          />
        </div>

        <div className="flex flex-col p-6 leading-normal md:w-11/12 md:p-9">
          <h2 className="text-gray-900 flex"><FontAwesomeIcon className="w-5" icon={faShoePrints}></FontAwesomeIcon><span className="tracking-widestproduct md:px-3">SHOE</span></h2>
          <h5 className="mb-2 text-2xl font-bold font-LeagueSpartan tracking-tight text-gray-900 dark:text-gray-800 md:text-5xl md:mt-5">
            Nike Air Vapor Max Flyknit
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
            Where previous Air Max models filled the sole with as much air as
            possible, the VaporMax focuses on using less air, more efficiently.
          </p>
          <div className="flex flex-wrap md:mt-4">
            <h1 className=" text-gray-900 font-LeagueSpartan font-medium md:text-5xl">
              $199.99
            </h1>
            <p className=" align-middle md:mt-2 text-gray-700 dark:text-gray-400 line-through md:mx-5">
              $249.99
            </p>
          </div>

          <button className=" bg-neonColor text-gray-900 dark:hover:bg-gray-900 hover:text-gray-200  font-semibold py-3 px-4 rounded-xl md:mt-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
