import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  X,
} from "lucide-react";

import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";


// =====================================================
// PRICE FORMAT
// =====================================================
const formatPrice = (value) => {
  return `Rs. ${Number(value || 0).toLocaleString("en-PK")}`;
};


const Navbar = () => {

  // ===================================================
  // STATES
  // ===================================================
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  // ===================================================
  // CART
  // ===================================================
  const {
    items,
    updateQuantity,
    removeItem,
    itemCount,
    subtotal,
  } = useCart();


  // ===================================================
  // WISHLIST
  // ===================================================
  const {
    itemCount: wishlistCount,
  } = useWishlist();


  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">

        <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">

          <div className="flex h-16 items-center justify-between sm:h-20 lg:h-[100px]">


            {/* =================================================
                LOGO
            ================================================= */}
            <div className="flex items-center shrink-0">

              <Link to="/" className="flex items-center">

                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="h-10 w-10 rounded-full border-2 border-gray-100 object-cover shadow-sm sm:h-12 sm:w-12 lg:h-20 lg:w-20"
                />

              </Link>

            </div>


            {/* =================================================
                DESKTOP LINKS
            ================================================= */}
            <div className="hidden lg:flex items-center gap-5 text-xs font-medium xl:gap-8 xl:text-sm">

              <Link
                to="/"
                className="text-gray-700 hover:text-black transition"
              >
                HOME
              </Link>

              <Link
                to="/men"
                className="text-gray-700 hover:text-black transition"
              >
                MEN
              </Link>

              <Link
                to="/collections"
                className="text-gray-700 hover:text-black transition"
              >
                COLLECTIONS
              </Link>

              <Link
                to="/about"
                className="text-gray-700 hover:text-black transition"
              >
                ABOUT
              </Link>

              <Link
                to="/blog"
                className="text-gray-700 hover:text-black transition"
              >
                BLOG
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-black transition"
              >
                CONTACT
              </Link>

            </div>


            {/* =================================================
                DESKTOP ICONS
            ================================================= */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">


              {/* ACCOUNT */}
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-black transition"
              >

                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />

                </svg>

              </Link>


              {/* =================================================
                  WISHLIST
              ================================================= */}
              <Link
                to="/wishlist"
                className="relative p-2 text-gray-700 hover:text-black transition"
              >

                <Heart size={22} />

                {wishlistCount > 0 && (

                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-[#C5A059] text-white text-[10px] font-bold">

                    {wishlistCount}

                  </span>

                )}

              </Link>


              {/* =================================================
                  CART ICON
              ================================================= */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-black transition"
              >

                <ShoppingBag size={23} />

                {itemCount > 0 && (

                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-[#C5A059] text-white text-[10px] font-bold">

                    {itemCount}

                  </span>

                )}

              </button>

            </div>


            {/* =================================================
                MOBILE ICONS
            ================================================= */}
            <div className="flex items-center gap-1 lg:hidden">


              {/* ACCOUNT */}
              <Link
                to="/login"
                className="p-2 text-gray-700"
              >

                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7 7z"
                  />

                </svg>

              </Link>


              {/* WISHLIST */}
              <Link
                to="/wishlist"
                className="relative p-2 text-gray-700"
              >

                <Heart size={22} />

                {wishlistCount > 0 && (

                  <span className="absolute top-0 right-0 min-w-4 h-4 flex items-center justify-center rounded-full bg-[#C5A059] text-white text-[9px] font-bold">

                    {wishlistCount}

                  </span>

                )}

              </Link>


              {/* MOBILE CART */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700"
              >

                <ShoppingBag size={23} />

                {itemCount > 0 && (

                  <span className="absolute top-0 right-0 min-w-4 h-4 flex items-center justify-center rounded-full bg-[#C5A059] text-white text-[9px] font-bold">

                    {itemCount}

                  </span>

                )}

              </button>


              {/* MENU */}
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-2xl font-bold text-gray-700"
              >
                ☰
              </button>

            </div>

          </div>

        </div>


        {/* =====================================================
            CART DRAWER
        ===================================================== */}
        {isCartOpen && (

          <div className="fixed inset-0 z-50 bg-black/50">

            {/* CLICK OUTSIDE TO CLOSE */}
            <div
              className="absolute inset-0"
              onClick={() => setIsCartOpen(false)}
            ></div>


            {/* =================================================
                CART SIDEBAR
            ================================================= */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">


              {/* =================================================
                  CART HEADER
              ================================================= */}
              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C5A059]">
                    Shopping
                  </p>

                  <h2 className="text-xl font-black uppercase">
                    Your Cart
                  </h2>

                </div>


                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-gray-500 hover:text-black"
                >

                  <X size={23} />

                </button>

              </div>


              {/* =================================================
                  CART CONTENT
              ================================================= */}
              <div className="flex-1 overflow-y-auto p-4">


                {/* =================================================
                    EMPTY CART
                ================================================= */}
                {items.length === 0 ? (

                  <div className="h-full flex flex-col items-center justify-center text-center">

                    <ShoppingBag
                      size={50}
                      strokeWidth={1.2}
                      className="text-gray-300"
                    />

                    <h3 className="mt-5 text-lg font-bold">
                      Your Cart Is Empty
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Add a product to your cart first.
                    </p>

                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white hover:bg-[#C5A059] transition"
                    >
                      Continue Shopping
                    </button>

                  </div>

                ) : (

                  /* =================================================
                      CART HAS PRODUCTS
                  ================================================= */
                  <div className="space-y-4">

                    {items.map((item) => (

                      <div
                        key={item.id}
                        className="rounded-2xl border border-gray-200 p-3"
                      >

                        <div className="flex gap-3">


                          {/* PRODUCT IMAGE */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-24 w-20 rounded-xl object-cover"
                          />


                          {/* PRODUCT DETAILS */}
                          <div className="flex-1">

                            <div className="flex justify-between gap-2">

                              <div>

                                <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                                  {item.category || "Collection"}
                                </p>

                                <h3 className="mt-1 text-sm font-bold text-gray-900">
                                  {item.name}
                                </h3>

                              </div>


                              {/* DELETE */}
                              <button
                                type="button"
                                onClick={() =>
                                  removeItem(item.id)
                                }
                                className="text-gray-400 hover:text-red-500"
                              >

                                <Trash2 size={17} />

                              </button>

                            </div>


                            {/* SIZE */}
                            <p className="mt-2 text-xs text-gray-500">
                              Size: {item.size || "Standard"}
                            </p>


                            {/* PRICE + QUANTITY */}
                            <div className="mt-3 flex items-center justify-between">


                              {/* QUANTITY */}
                              <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                  className="px-3 py-2 hover:bg-gray-100"
                                >
                                  <Minus size={13} />
                                </button>


                                <span className="px-3 text-sm font-bold">
                                  {item.quantity}
                                </span>


                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                  className="px-3 py-2 hover:bg-gray-100"
                                >
                                  <Plus size={13} />
                                </button>

                              </div>


                              {/* PRICE */}
                              <span className="font-bold text-[#C5A059]">
                                {formatPrice(
                                  Number(item.price) *
                                    Number(item.quantity)
                                )}
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>


              {/* =================================================
                  CART FOOTER
              ================================================= */}
              <div className="border-t border-gray-200 bg-gray-50 p-5">


                {/* SUBTOTAL */}
                <div className="flex justify-between text-sm">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-bold">
                    {formatPrice(subtotal)}
                  </span>

                </div>


                {/* =================================================
                    IMPORTANT CHECKOUT BUTTON
                    SIRF TAB DIKHAYEGA JAB ITEMS HON
                ================================================= */}
                {items.length > 0 && (

                  <div className="mt-4 space-y-3">


                    {/* VIEW CART */}
                    <Link
                      to="/cart"
                      onClick={() =>
                        setIsCartOpen(false)
                      }
                      className="block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-gray-900 hover:bg-gray-100 transition"
                    >
                      View Cart
                    </Link>


                    {/* =================================================
                        CHECKOUT
                    ================================================= */}
                    <Link
                      to="/checkout"
                      onClick={() =>
                        setIsCartOpen(false)
                      }
                      className="block w-full rounded-xl bg-black px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#C5A059] transition"
                    >
                      Checkout
                    </Link>

                  </div>

                )}


                {/* EMPTY CART MESSAGE */}
                {items.length === 0 && (

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Checkout will be available after adding a product.
                  </p>

                )}

              </div>

            </div>

          </div>

        )}


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        {isOpen && (

          <div className="fixed inset-0 z-50 bg-black/50">

            <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-xl">


              <div className="flex items-center justify-between border-b p-5">

                <h2 className="font-bold text-lg">
                  Menu
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xl"
                >
                  ✕
                </button>

              </div>


              <div className="p-6 space-y-5">

                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block border-b pb-3 font-semibold"
                >
                  HOME
                </Link>

                <Link
                  to="/men"
                  onClick={() => setIsOpen(false)}
                  className="block border-b pb-3 font-semibold"
                >
                  MEN
                </Link>

                <Link
                  to="/collections"
                  onClick={() => setIsOpen(false)}
                  className="block border-b pb-3 font-semibold"
                >
                  COLLECTIONS
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block border-b pb-3 font-semibold"
                >
                  ABOUT
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block border-b pb-3 font-semibold"
                >
                  BLOG
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block font-semibold"
                >
                  CONTACT
                </Link>

              </div>

            </div>

          </div>

        )}

      </nav>
    </>
  );
};

export default Navbar;