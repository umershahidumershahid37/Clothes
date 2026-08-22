import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Collections = () => {
  const navigate = useNavigate();

  // Collections Data mapped perfectly to your Sidebar routes
  const collections = [
    {
      id: "shirts",
      title: "Shirts Collection",
      itemCount: "3 Styles Available",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      path: "/formal-shirts" // Shirts main path (Formal Shirts)
    },
    {
      id: "pants",
      title: "Pants & Trousers",
      itemCount: "2 Styles Available",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
      path: "/dress-pants" // Pants main path (Dress Pants)
    },
    {
      id: "shorts",
      title: "Shorts Collection",
      itemCount: "2 Styles Available",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
      path: "/normal-shorts" // Shorts main path (Normal Shorts)
    },
    {
      id: "jackets",
      title: "Jackets & Hoodies",
      itemCount: "2 Styles Available",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
      path: "/formal-jackets" // Jackets main path (Formal Jackets)
    }
  ];

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto w-full pb-20 px-4 sm:px-6 lg:px-8 pt-8">
          
          {/* Banner Hero Box */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Explore All Categories</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Men's Collections
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
                Apni pasand ki category chuney aur behtareen luxury menswear styles explore karein.
              </p>
            </div>
            
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                onClick={() => handleCollectionClick(collection.path)}
                className="group relative bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/9]"
              >
                {/* Background Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content inside card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-1 block">
                      {collection.itemCount}
                    </span>
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {collection.title}
                    </h3>
                  </div>

                  {/* View Collection Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCollectionClick(collection.path);
                    }}
                    className="bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-full shadow-md hover:bg-[#C5A059] hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Collections;