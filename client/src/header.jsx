 import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#a28c5f] tracking-wide">ROYAL GRAND HOTEL</h1>
      
      <nav className="space-x-6 hidden md:flex">
        <a href="#Home" className="text-gray-700 hover:text-[#a28c5f] transition duration-300">Home</a>
        <a href="#Rooms" className="text-gray-700 hover:text-[#a28c5f] transition duration-300">Rooms</a>
        <a href="#Dining" className="text-gray-700 hover:text-[#a28c5f] transition duration-300">Dining</a>
        <a href="#Massage" className="text-gray-700 hover:text-[#a28c5f] transition duration-300">Massage</a>
        <a href="#Contact" className="text-gray-700 hover:text-[#a28c5f] transition duration-300">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
