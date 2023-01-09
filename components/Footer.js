import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 text-center text-black font-Poppins md:bg-transparent md:bottom-0 md:fixed md:inset-x-0">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >
          <span className="mr-2 font-bold text-zinc-900">
            John Cañero
          </span>
        </Link>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;
