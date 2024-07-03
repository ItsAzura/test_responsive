import React from 'react';
import logo from '../../assets/main_logo.png';

const NavBar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src={logo} alt="Auction Table" className="h-8 w-8" />
            <span className="ml-2 text-white font-bold">Auction Table</span>
          </div>
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/categories" className="text-white hover:text-gray-300">
            Categories
          </a>
          <a href="/sell" className="text-white hover:text-gray-300">
            Sell
          </a>
        </div>
        <div className="space-x-4">
          <a href="/signin" className="bg-white text-red-500 py-2 px-4 rounded">
            Sign In
          </a>
          <a href="/signup" className="bg-white text-red-500 py-2 px-4 rounded">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
