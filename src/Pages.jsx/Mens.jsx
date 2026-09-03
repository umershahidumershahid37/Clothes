import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import { useWishlist } from "../Component/WishlistContext";

const Mens = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Reusable helper function for product cards navigation passing the full product state
  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product, from: '/men' } });
  };

  // Shirts Data
  const shirts = [
    {
      id: "shirt-1",
      name: "Olive Green Shirt",
      price: "RS 2,490",
      originalPrice: "RS 3,200",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      category: "Shirts",
      material: "100% Premium Cotton",
      fit: "Regular Fit",
      description: "A refined olive green shirt offering smooth texture, ideal for semi-formal or casual layering."
    },
    {
      id: "shirt-2",
      name: "Classic White Shirt",
      price: "RS 2,590",
      originalPrice: "RS 3,300",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
      category: "Shirts",
      material: "Fine Poplin Cotton",
      fit: "Tailored Fit",
      description: "An absolute wardrobe cornerstone crafted from crisp, breathable white cotton."
    },
    {
      id: "shirt-3",
      name: "Casual Blue Shirt",
      price: "RS 2,690",
      originalPrice: "RS 3,400",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&q=80&w=800",
      category: "Shirts",
      material: "Soft Cotton Blend",
      fit: "Casual Fit",
      description: "Versatile casual blue shirt designed for day-long comfort and sharp everyday style."
    },
    {
      id: "shirt-4",
      name: "Check Shirt",
      price: "RS 2,190",
      originalPrice: "RS 2,900",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
      category: "Shirts",
      material: "Brushed Cotton",
      fit: "Regular Fit",
      description: "A classic pattern check shirt that delivers effortless weekend layering and warmth."
    },
  ];

  // Pants Data
  const pants = [
    {
      id: "pant-1",
      name: "Classic Tailored Pant",
      price: "RS 2,890",
      originalPrice: "RS 3,600",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
      category: "Pants",
      material: "Stretch Cotton Twill",
      fit: "Tailored Fit",
      description: "Sleek and professional tailored pants built for modern office wear or formal evenings."
    },
    {
      id: "pant-2",
      name: "Slim Fit Chino",
      price: "RS 3,040",
      originalPrice: "RS 3,800",
      image: "https://images.unsplash.com/photo-1473966968600-fa809b869a19?auto=format&fit=crop&q=80&w=800",
      category: "Pants",
      material: "Combed Cotton Spandex",
      fit: "Slim Fit",
      description: "Flexible slim fit chinos that provide supreme mobility and clean silhouette lines."
    },
    {
      id: "pant-3",
      name: "Cargo Trouser",
      price: "RS 3,190",
      originalPrice: "RS 3,990",
      image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=800",
      category: "Pants",
      material: "Heavyweight Cotton Canvas",
      fit: "Relaxed Fit",
      description: "Utilitarian cargo trousers featuring multi-pocket styling and rugged durability."
    },
    {
      id: "pant-4",
      name: "Formal Dress Pant",
      price: "RS 3,340",
      originalPrice: "RS 4,200",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
      category: "Pants",
      material: "Premium Wool Blend",
      fit: "Structured Fit",
      description: "Crisp formal dress trousers designed to elevate your professional wardrobe."
    },
  ];

  // Shorts Data
  const shorts = [
    {
      id: "short-1",
      name: "Casual Summer Short",
      price: "RS 1,790",
      originalPrice: "RS 2,300",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
      category: "Shorts",
      material: "Lightweight Cotton",
      fit: "Regular Fit",
      description: "Lightweight summer shorts tailored for hot days and breezy outings."
    },
    {
      id: "short-2",
      name: "Denim Short",
      price: "RS 1,870",
      originalPrice: "RS 2,400",
      image: "https://images.unsplash.com/photo-1565728765780-60ea4f2dd4dc?auto=format&fit=crop&q=80&w=800",
      category: "Shorts",
      material: "Washed Denim",
      fit: "Casual Fit",
      description: "Rugged denim shorts featuring a classic washed finish for effortless street style."
    },
    {
      id: "short-3",
      name: "Lounge Short",
      price: "RS 1,950",
      originalPrice: "RS 2,500",
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800",
      category: "Shorts",
      material: "Soft French Terry",
      fit: "Relaxed Fit",
      description: "Ultra-soft lounge shorts engineered for maximum indoor comfort."
    },
    {
      id: "short-4",
      name: "Athletic Cargo Short",
      price: "RS 2,030",
      originalPrice: "RS 2,600",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
      category: "Shorts",
      material: "Performance Tech Fabric",
      fit: "Athletic Fit",
      description: "Functional athletic shorts built with moisture-wicking stretch material."
    },
  ];

  // Jackets Data
  const jackets = [
    {
      id: "jacket-1",
      name: "Denim Jacket",
      price: "RS 3,290",
      originalPrice: "RS 4,100",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
      category: "Jackets",
      material: "Sturdy Cotton Denim",
      fit: "Regular Fit",
      description: "An iconic denim jacket that adds instant character to any casual ensemble."
    },
    {
      id: "jacket-2",
      name: "Leather Biker Jacket",
      price: "RS 4,390",
      originalPrice: "RS 5,500",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800",
      category: "Jackets",
      material: "Faux Leather",
      fit: "Slim Fit",
      description: "A bold statement piece featuring asymmetrical zippers and classic biker detailing."
    },
    {
      id: "jacket-3",
      name: "Hoodie Sweatshirt",
      price: "RS 2,590",
      originalPrice: "RS 3,300",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800",
      category: "Jackets",
      material: "Heavy Cotton Fleece",
      fit: "Oversized Fit",
      description: "Cozy fleece-lined hoodie offering plush comfort and casual styling."
    },
    {
      id: "jacket-4",
      name: "Winter Puffer Jacket",
      price: "RS 4,790",
      originalPrice: "RS 6,000",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
      category: "Jackets",
      material: "Insulated Polyester",
      fit: "Regular Fit",
      description: "Warm insulated puffer jacket designed to combat chilly weather conditions."
    },
  ];

  // Total items count across all arrays
  const totalItemsCount = shirts.length + pants.length + shorts.length + jackets.length;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container with Sidebar & Content */}
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Side: Sidebar */}
        <Sidebar />

        {/* Right Side: Content Area */}
        <main className="flex-1 w-full pb-20 px-2 sm:px-6 lg:px-10 pt-5">

          {/* Custom Styled Banner Hero Box */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>New Season Drop</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Men's Exclusive Collection
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
                Redefine your wardrobe with our handpicked luxury apparel, meticulously designed for ultimate comfort and statement style.
              </p>
            </div>

            {/* Right side item badge inside banner */}
            <div className="relative z-10 self-start md:self-center bg-neutral-900/90 border border-neutral-700/80 px-4 py-2.5 rounded-xl shadow-inner flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-200">
                {totalItemsCount} Styles Available
              </span>
            </div>

            {/* Subtle background glow effect */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Sections Mapping */}
          {[
            { title: "Shirts", data: shirts },
            { title: "Pants", data: pants },
            { title: "Shorts", data: shorts },
            { title: "Jackets", data: jackets },
          ].map((section, idx) => (
            <section key={idx} className="mb-16 last:mb-0">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] tracking-wide border-l-4 border-black pl-3">
                  {section.title}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {section.data.length} Items Available
                </span>
              </div>

              {/* Cards Grid with updated card design */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {section.data.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white flex flex-col justify-between group cursor-pointer"
                    onClick={() => handleViewProduct(item)}
                  >
                    {/* Card Image & Wishlist Icon */}
                    <div className="relative bg-gray-100 aspect-[4/5] overflow-hidden rounded-none">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(item); }}
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition-all"
                        aria-label="Wishlist"
                      >
                        <Heart className={`w-4 h-4 transition-colors ${isInWishlist(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-700 hover:text-red-500'}`} />
                      </button>
                    </div>

                    {/* Card Details */}
                    <div className="pt-3 pb-2 flex flex-col justify-between bg-white text-left">
                      <div>
                        <h3 className="font-bold text-[#B98A55] text-base tracking-tight leading-snug">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-black font-extrabold text-sm">
                            {item.price}
                          </p>
                          {item.originalPrice && (
                            <p className="text-gray-400 font-medium text-xs line-through">
                              {item.originalPrice}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={(e) => { e.stopPropagation(); handleViewProduct(item); }}
                        className="mt-3 w-fit bg-black text-white text-xs font-medium py-2 px-5 rounded-full shadow-md hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Mens;