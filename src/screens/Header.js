import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/car.png" className="h-10" alt="Logo" />
          <span className="text-3xl font-bold italic text-white font-cursive">Ev Sol</span>
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex justify-center">
          <li>
            <Link
              to="/"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
