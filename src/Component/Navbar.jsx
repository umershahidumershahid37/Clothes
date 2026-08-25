import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-[100px]">
          
          {/* 1. Logo Section */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="Stitch Craft Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-[80px] md:h-[80px] rounded-full object-cover border-2 border-gray-100 shadow-sm" 
              />
            </Link>
          </div>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-xs lg:text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors py-2">HOME</Link>
            <Link to="/men" className="text-gray-700 hover:text-black transition-colors py-2">MEN</Link>
            <Link to="/collections" className="text-gray-700 hover:text-black transition-colors py-2">COLLECTIONS</Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors py-2">ABOUT</Link>
            <Link to="/blog" className="text-gray-700 hover:text-black transition-colors py-2">BLOG</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black transition-colors py-2">CONTACT</Link>
          </div>

          {/* 3. Desktop Icons & Login Button */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-700">
            <Link to="/account" aria-label="Account" className="hover:text-black p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <Link to="/cart" aria-label="Cart" className="hover:text-black p-2 relative transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            <Link 
              to="/login" 
              className="px-6 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm"
            >
              Login
            </Link>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
              className="text-gray-700 hover:text-black focus:outline-none p-2"
            >
              <span className="text-2xl font-bold">☰</span>
            </button>
          </div>

        </div>
      </div>

      {/* 5. Professional Mobile Drawer Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-50 transform transition-transform duration-300 ease-in-out">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="font-bold text-lg text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-gray-500 hover:text-black p-2 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2 border-b border-gray-100">HOME</Link>
              <Link to="/men" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2 border-b border-gray-100">MEN</Link>
              <Link to="/collections" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2 border-b border-gray-100">COLLECTIONS</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2 border-b border-gray-100">ABOUT</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2 border-b border-gray-100">BLOG</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-black font-semibold text-base py-2">CONTACT</Link>
            </div>

            {/* Drawer Footer (Icons & Login) */}
            <div className="p-6 border-t border-gray-200 space-y-4 bg-gray-50">
              <div className="flex items-center justify-around text-gray-700">
                <Link to="/account" onClick={() => setIsOpen(false)} aria-label="Account" className="hover:text-black p-2 flex items-center gap-2 text-sm font-medium">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Account
                </Link>
                <Link to="/cart" onClick={() => setIsOpen(false)} aria-label="Cart" className="hover:text-black p-2 flex items-center gap-2 text-sm font-medium">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Cart
                </Link>
              </div>

              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                Login
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;