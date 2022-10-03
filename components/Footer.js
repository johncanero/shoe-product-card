import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-black text-center font-Poppins sm:bg-white md:bg-transparent p-4 md:bottom-0 md:fixed md:inset-x-0">
        © 2022 Copyright:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/" 
        >
          <span className="font-semibold px-1">John Cañero</span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
