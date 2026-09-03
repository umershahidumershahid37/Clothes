import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, ShoppingBag } from "lucide-react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import { useCart } from "../Component/CartContext";
import { useWishlist } from "../Component/WishlistContext";

const Informalshirts = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Reusable helper function for product cards navigation
  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product, from: '/informal-shirts' } });
  };

  // Add to cart handler
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addItem(product, 'M', 1);
  };

  // Formal Shirts Data
  const informalShirts = [
    {
      id: "informal-1",
      name: "Classic Casual Blue Shirt",
      price: "Rs. 1,990",
      originalPrice: "Rs. 2,990",
      category: "Informal Shirts",
      material: "100% Cotton",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500",
      description: "A timeless casual blue shirt perfect for weekend outings and relaxed gatherings."
    },
    {
      id: "informal-2",
      name: "Rust Orange Casual Shirt",
      price: "Rs. 2,090",
      originalPrice: "Rs. 3,090",
      category: "Informal Shirts",
      material: "Cotton Blend",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500",
      description: "A vibrant orange casual shirt designed for comfortable everyday wear and casual styling."
    },
    {
      id: "informal-3",
      name: "Olive Green Casual Shirt",
      price: "Rs. 2,190",
      originalPrice: "Rs. 3,190",
      category: "Informal Shirts",
      material: "Cotton Twill",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500",
      description: "A stylish olive green casual shirt perfect for layering and relaxed weekend looks."
    },
    {
      id: "informal-4",
      name: "Sky Blue Casual Shirt",
      price: "Rs. 1,890",
      originalPrice: "Rs. 2,890",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Professional casual shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-5",
      name: "Maroon Casual Shirt",
      price: "Rs. 1,990",
      originalPrice: "Rs. 2,990",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1617457449829-17c79b4ebaaa?auto=format&fit=crop&q=80&w=500",
      description: "Casual maroon shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-6",
      name: "Navy Blue Casual Shirt",
      price: "Rs. 1,890",
      originalPrice: "Rs. 2,890",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1612036782180-69c0cecdbf51?auto=format&fit=crop&q=80&w=500",
      description: "Casual navy blue shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-7",
      name: "White Casual Shirt",
      price: "Rs. 1,790",
      originalPrice: "Rs. 2,790",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
      description: "Casual white shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-8",
      name: "Black Casual Shirt",
      price: "Rs. 1,990",
      originalPrice: "Rs. 2,990",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1559155260-a57d2e9e2407?auto=format&fit=crop&q=80&w=500",
      description: "Casual black shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-9",
      name: "Beige Casual Shirt",
      price: "Rs. 1,890",
      originalPrice: "Rs. 2,890",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&q=80&w=500",
      description: "Casual beige shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-10",
      name: "Cream Casual Shirt",
      price: "Rs. 1,790",
      originalPrice: "Rs. 2,790",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500",
      description: "Casual cream shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-11",
      name: "Sea Green Casual Shirt",
      price: "Rs. 2,090",
      originalPrice: "Rs. 3,090",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1605286372692-4d440d36fe3e?auto=format&fit=crop&q=80&w=500",
      description: "Casual sea green shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-12",
      name: "Light Purple Casual Shirt",
      price: "Rs. 1,990",
      originalPrice: "Rs. 2,990",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Casual light purple shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-13",
      name: "Peach Casual Shirt",
      price: "Rs. 1,890",
      originalPrice: "Rs. 2,890",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Regular Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Casual peach shirt designed for everyday wear with enhanced breathability."
    },
    {
      id: "informal-14",
      name: "Khaki Casual Shirt",
      price: "Rs. 1,990",
      originalPrice: "Rs. 2,990",
      category: "Informal Shirts",
      material: "Cotton Rich",
      fit: "Relaxed Fit",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500",
      description: "Casual khaki shirt designed for everyday wear with enhanced breathability."
    }
  ];

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
          
          {/* Custom Styled Banner Hero Box matching the image */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>EXECUTIVE & FORMAL WEAR</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Informal Shirts
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
                Refined tailoring, premium fabrics, and sharp silhouettes designed for professional elegance and powerful boardroom presence.
              </p>
            </div>

            {/* Right side item badge inside banner */}
            <div className="relative z-10 self-start md:self-center bg-neutral-900/90 border border-neutral-700/80 px-4 py-2.5 rounded-xl shadow-inner flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-200">
                {informalShirts.length} Styles Available
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
              {informalShirts.length} Items Available
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {informalShirts.map((product) => (
              <div
                key={product.id}
                className="bg-white flex flex-col justify-between group cursor-pointer border border-neutral-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => handleViewProduct(product)}
              >
                {/* Card Image & Wishlist Icon */}
                <div className="relative bg-gray-100 aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition-all"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700 hover:text-red-500'}`} />
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

                  {/* Buttons Container: View Details & Add to Cart */}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleViewProduct(product); }}
                      className="flex-1 bg-black text-white text-xs font-medium py-2.5 px-3 rounded-full shadow-sm hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="flex items-center justify-center bg-[#B98A55] text-white text-xs font-medium p-2.5 rounded-full shadow-sm hover:bg-[#a67947] active:scale-95 transition-all duration-200 cursor-pointer"
                      title="Add to Cart"
                      aria-label="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Informalshirts;