import React from 'react';
import logo from '../../assets/main_logo.png';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Auction Table" className="h-8 w-8" />
            <span className="ml-2 font-bold">Auction Table</span>
          </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-2">
            <button className="bg-white text-red-500 py-2 px-4 rounded">
              PlayStore
            </button>
            <button className="bg-white text-red-500 py-2 px-4 rounded">
              AppleStore
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul className="text-sm">
            <li className="mb-1">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="/legal" className="hover:underline">
                Legal Information
              </a>
            </li>
            <li className="mb-1">
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a href="/blogs" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="font-bold mb-2">HELP CENTER</h3>
          <ul className="text-sm">
            <li className="mb-1">
              <a href="/find" className="hover:underline">
                Find a Property
              </a>
            </li>
            <li className="mb-1">
              <a href="/host" className="hover:underline">
                How To Host?
              </a>
            </li>
            <li className="mb-1">
              <a href="/why-us" className="hover:underline">
                Why Us?
              </a>
            </li>
            <li className="mb-1">
              <a href="/faqs" className="hover:underline">
                FAQs
              </a>
            </li>
            <li className="mb-1">
              <a href="/rental-guides" className="hover:underline">
                Rental Guides
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h3 className="font-bold mb-2">CONTACT INFO</h3>
          <p className="text-sm mb-1">Phone: 1234567890</p>
          <p className="text-sm mb-1">Email: company@email.com</p>
          <p className="text-sm mb-4">Location: 100 Smart Street, LA, USA</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-white pt-4 mt-4">
        <p className="text-sm">
          &copy; 2024 The AuctionEase | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
