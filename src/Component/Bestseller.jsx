import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Olive Green Shirt",
    price: "Rs. 2,490",
    image: "pic.webp",
    badge: "New Arrival",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "Rs. 3,290",
    image: "pic1.jpg",
    badge: "Trending",
  },
  {
    id: 3,
    name: "Hoodie Sweatshirt",
    price: "Rs. 2,590",
    image: "pic2.webp",
    badge: "Bestseller",
  },
  {
    id: 4,
    name: "Check Shirt",
    price: "Rs. 2,190",
    image: "pic3.jpg",
    badge: "Limited",
  },
];

const Bestseller = () => {
  // Wishlist state tracking for each product index
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

        {/* LEFT SIDE (Sticky Heading & Button for Desktop) */}
        <div className="w-full lg:w-[24%] flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-28">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-2">
            Curated Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-none">
            NEW SEASON
          </h2>
          <h3 className="mt-1.5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#b98a55] leading-none">
            BESTSELLERS
          </h3>

          {/* Accent Line */}
          <div className="mt-4 h-[3px] w-14 bg-[#b98a55] mx-auto lg:mx-0"></div>

          <p className="mt-4 text-neutral-500 text-sm leading-relaxed hidden lg:block">
            Explore our most-loved styles crafted with premium fabrics and modern tailoring for the contemporary gentleman.
          </p>

          {/* Button - Connected to /men route */}
          <Link
            to="/men"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#b98a55] hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Products
          </Link>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:w-[76%] lg:grid-cols-4">
          {products.map((product, index) => {
            const isLiked = wishlist[index];

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-neutral-50/70 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                <div>
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#b98a55] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </span>

                    {/* Heart Button */}
                    <button
                      onClick={() => toggleWishlist(index)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={17}
                        strokeWidth={1.8}
                        className={`transition-colors duration-300 ${
                          isLiked
                            ? "text-red-500 fill-red-500"
                            : "text-neutral-800 hover:text-[#b98a55]"
                        }`}
                      />
                    </button>
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="p-4 sm:p-5">
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#b98a55] transition-colors line-clamp-1">
                      {product.name}
                    </h4>

                    <p className="mt-1 text-sm sm:text-base font-extrabold text-neutral-900">
                      {product.price}
                    </p>
                  </div>
                </div>

                {/* VIEW DETAILS BUTTON */}
                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b98a55] shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Bestseller;