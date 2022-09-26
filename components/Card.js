import React from "react";
import Image from "next/image";
import TabletShoe from "../public/images/tabletShoe.jpg";
import Link from "next/link";

const Card = () => {
  return (
    <div>
      <div
        className="flex flex-col bg-white rounded-2xl border shadow-md font-Poppins md:flex-row md:mx-auto md:max-w-2xl md:mt-60 lg:mt-44 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="object-cover w-full h-96 text-zero rounded-t-lg md:h-full md:w-full md:rounded-full">
          <Image 
            width={700}
            height={1000}
            src={TabletShoe} 
            alt="tablet-shoe.jpg" 
            className="rounded-l-xl" 
            />
        </div>

        <div className="flex flex-col p-6 leading-normal md:w-11/12">
          <h2 className="text-white tracking-widestproduct">SHOE</h2>
          <h5 className="mb-2 text-2xl font-bold font-LeagueSpartan tracking-tight text-gray-900 dark:text-white md:text-5xl md:mt-5">
            Nike Air Vapor Max Flyknit
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Where previous Air Max models filled the sole with as much air as possible, the VaporMax focuses on using less air, more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
