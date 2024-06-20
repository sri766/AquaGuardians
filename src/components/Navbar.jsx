import React, { useState } from 'react';
import { ArrowRightIcon, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font bg-teal-300 border-2 border-teal-600 bg-opacity-15 mx-4 md:mx-24 my-4 rounded-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/sea.png" className="inline h-[40px] ml-2" alt="LOGO" />
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? 
            <Menu className="w-6 h-6 text-slate-200" /> 
            : 
            <MenuIcon className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
        <nav className={`md:ml-auto md:flex md:flex-wrap md:items-center text-slate-200 text-xl ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="decoration-none flex flex-col md:flex-row">
            <li className="mr-0 md:mr-5 hover:text-gray-400"><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li className="mr-0 md:mr-5 hover:text-gray-400"><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li className="mr-0 md:mr-5 hover:text-gray-400"><Link to="/3d-model" onClick={toggleMenu}>Interactive-3D</Link></li>
            <li className="mr-0 md:mr-5 hover:text-gray-400"><Link to="/facts" onClick={toggleMenu}>Facts</Link></li>
            <li className="mr-0 md:mr-5 hover:text-gray-400"><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <button className="inline-flex items-center bg-teal-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 hover:text-black rounded-full text-base mt-4 md:mt-0">
          Explore
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
