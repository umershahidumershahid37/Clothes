import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

const Poloshirts = () => {
  const navigate = useNavigate();

  // Reusable helper function for product cards navigation
  const handleViewProduct = (product) => {
    navigate('/formal-shirt-detail', { state: { product } });
  };

  // Formal Shirts Data
  const formalShirts = [
    {
      id: "formal-1",
      name: "Classic Executive White Shirt",
      price: "Rs. 3,490",
      category: "Formal Shirts",
      material: "100% Premium Cotton",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500",
      description: "A timeless classic executive white shirt tailored for supreme comfort and professional elegance."
    },
    {
      id: "formal-2",
      name: "Midnight Blue Formal Shirt",
      price: "Rs. 3,690",
      category: "Formal Shirts",
      material: "Cotton Blend",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500",
      description: "Sophisticated midnight blue shirt designed to make a strong impression at business meetings."
    },
    {
      id: "formal-3",
      name: "Charcoal Grey Formal Shirt",
      price: "Rs. 3,890",
      category: "Formal Shirts",
      material: "Fine Twill Cotton",
      fit: "Tailored Fit",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500",
      description: "Sleek charcoal grey formal shirt offering durability and a sharp, modern silhouette."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    },
    {
      id: "formal-4",
      name: "Striped Corporate Shirt",
      price: "Rs. 3,290",
      category: "Formal Shirts",
      material: "Cotton Rich",
      fit: "Slim Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional striped shirt designed for everyday office wear with enhanced breathability."
    }

  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container with Sidebar & Content */}
      <div className="flex flex-col lg:flex-row w-full gap-8  ">
        {/* Left Side: Sidebar */}
        <Sidebar />

        {/* Right Side: Content Area */}
        <main className="flex-1 w-full pb-20 px-2 sm:px-6 lg:px-10 pt-5">
          
          {/* Custom Styled Banner Hero Box matching the image */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>EXECUTIVE & FORMAL WEAR</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Polo Shirts
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
                Refined tailoring, premium fabrics, and sharp silhouettes designed for professional elegance and powerful boardroom presence.
              </p>
            </div>

            {/* Right side item badge inside banner */}
            <div className="relative z-10 self-start md:self-center bg-neutral-900/90 border border-neutral-700/80 px-4 py-2.5 rounded-xl shadow-inner flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-200">
                {formalShirts.length} Styles Available
              </span>
            </div>

            {/* Subtle background glow effect */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Section Heading & Count */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] tracking-wide border-l-4 border-black pl-3">
              Explore Collection
            </h2>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {formalShirts.length} Items Available
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {formalShirts.map((product) => (
              <div
                key={product.id}
                className="bg-white flex flex-col justify-between group cursor-pointer"
                onClick={() => handleViewProduct(product)}
              >
                {/* Card Image & Wishlist Icon */}
                <div className="relative bg-gray-100 aspect-[4/5] overflow-hidden rounded-none">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <button 
                    onClick={(e) => { e.stopPropagation(); alert('Added to wishlist!'); }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition-all"
                  >
                    <Heart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Card Details */}
                <div className="pt-3 pb-2 flex flex-col justify-between bg-white text-left">
                  <div>
                    <h3 className="font-bold text-[#B98A55] text-base tracking-tight leading-snug">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-black font-extrabold text-sm">
                        {product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-gray-400 font-medium text-xs line-through">
                          {product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleViewProduct(product); }}
                    className="mt-3 w-fit bg-black text-white text-xs font-medium py-2 px-5 rounded-full shadow-md hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Poloshirts;