import React from "react";
import Link from "next/link";

const Help = () => {
  return (
    <div>
      {/* Help | Join Us | Sign In */}
      <div className="hidden md:block bg-neonColor2 font-Poppins md:text-sm md:py-2.5 lg:text-xs lg:py-2.5">
        <div className="flex justify-center md:ml-100 lg:ml-150">
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
          <Link
            href="https://www.nike.com/ph/member/profile/login?continueUrl=https://www.nike.com/ph/membership"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <p className=" md:mx-1.5 lg:mx-1.5">Sign In</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
