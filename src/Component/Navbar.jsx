import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, updateQuantity, removeItem, itemCount, subtotal } = useCart();

  const cartSummary = useMemo(
    () => items.slice(0, 3),
    [items]
  );

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
            
            <button
              type="button"
              onClick={() => setIsCartOpen((prev) => !prev)}
              aria-label="Cart"
              className="hover:text-black p-2 relative transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#C5A059] px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            
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

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="h-full w-full max-w-md bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C5A059]">Cart</p>
                <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900">Your Basket</h3>
              </div>
              <button type="button" onClick={() => setIsCartOpen(false)} className="text-2xl font-light text-neutral-500 hover:text-black">
                ×
              </button>
            </div>

            <div className="flex h-[calc(100%-140px)] flex-col overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 text-center p-6">
                  <p className="text-lg font-black uppercase tracking-tight text-neutral-900">Your cart is empty</p>
                  <p className="mt-2 text-sm text-neutral-600">Add items to see them here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                      <div className="flex gap-3">
                        <img src={item.image} alt={item.name} className="h-20 w-16 rounded-xl object-cover" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">{item.category}</p>
                              <h4 className="mt-1 text-sm font-black text-neutral-900">{item.name}</h4>
                            </div>
                            <button type="button" onClick={() => removeItem(item.id)} className="text-neutral-400 hover:text-red-500">
                              <Trash2 size={15} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-1.5 py-1">
                              <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#C5A059] hover:text-white">
                                <Minus size={12} />
                              </button>
                              <span className="min-w-[1.5rem] text-center text-xs font-bold text-neutral-800">{item.quantity}</span>
                              <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#C5A059] hover:text-white">
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="text-sm font-black text-[#C5A059]">{Number(item.price) * Number(item.quantity)}</span>
                          </div>
                          <p className="mt-2 text-[11px] text-neutral-500">Size: {item.size}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center justify-between text-sm text-neutral-700">
                <span>Subtotal</span>
                <span className="font-bold text-neutral-900">{subtotal}</span>
              </div>
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 block w-full rounded-xl bg-neutral-900 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#C5A059]"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}

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