import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-11/12 mx-auto p-4 mb-5 content-box flex-col lg:flex-row lg:justify-between items-center gap-5">
      <div>
        <h2 className="text-xl font-semibold cursor-pointer">
          CS — Ticket System
        </h2>
      </div>

        <button id="menu-btn" className='md:hidden block text-gray-700 text-3xl'>
          ☰
        </button>
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
        <button className="cursor-pointer text-white border-1 p-2 px-4  rounded bg-radial-[at_25%_25%] from-[#632EE3] to-[#9F62F2]">
          + New Ticket
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
