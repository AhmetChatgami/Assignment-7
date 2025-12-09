import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-11/12 mx-auto items-center p-4 mb-5 content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <div className="flex items-center gap-8">
        <h2 className="text-xl font-semibold cursor-pointer">
          CS — Ticket System
        </h2>
        <button id="menu-btn" class='md:hidden block items-end justify-end text-gray-700 text-3xl'>
          ☰
        </button>
      </div>

      <div className="space-x-10 text-gray-500 hidden md:flex items-center justify-center">
        <span className="hover:text-black cursor-pointer hover:underline">
          Home
        </span>
        <span className="hover:text-black cursor-pointer hover:underline">
          FAQ
        </span>
        <span className="hover:text-black cursor-pointer hover:underline">
          Changelog
        </span>
        <span className="hover:text-black cursor-pointer hover:underline">
          Blog
        </span>
        <span className="hover:text-black cursor-pointer hover:underline cursor-pointer">
          Download
        </span>
        <span className="hover:text-black hover:underline cursor-pointer">
          Contact
        </span>
        <button className="hover:cursor-pointer text-white border-1 p-2 px-4  rounded bg-radial-[at_25%_25%] from-[#632EE3] to-[#9F62F2]">
          + New Ticket
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
