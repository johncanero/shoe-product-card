import React from "react";
import Image from "next/image";
import TabletShoe from "../public/images/tabletShoe.jpg";
import Link from "next/link";

const Card = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:mx-auto md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-full md:rounded-full md:rounded-l-lg">
          <Image 
            src={TabletShoe} 
            alt="tablet-shoe.jpg" 
            className="" 
            />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
