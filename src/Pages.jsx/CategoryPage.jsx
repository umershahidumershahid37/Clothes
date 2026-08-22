import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Sidebar';

const CategoryPage = ({ title = "Men's Collection", subtitle = "Explore our latest trendy collection", items }) => {
  const navigate = useNavigate();

  // Agar props mein items na milein toh default 16 products show honge
  const defaultProducts = [
    { id: 1, name: "Shirt", price: "Rs. 2,490", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Denim Jacket", price: "Rs. 3,290", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Hoddie Sweatshirt", price: "Rs. 2,590", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Check Shirt", price: "Rs. 2,190", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Casual White Tee", price: "Rs. 1,490", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Black Bomber Jacket", price: "Rs. 3,890", image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=500" },
    { id: 7, name: "Classic Polo Shirt", price: "Rs. 1,890", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500" },
    { id: 8, name: "Formal Blue Shirt", price: "Rs. 2,790", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=500" },
    { id: 9, name: "Graphic Printed Tee", price: "Rs. 1,690", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500" },
    { id: 10, name: "Winter Fleece Jacket", price: "Rs. 4,190", image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=500" },
    { id: 11, name: "Striped Summer Shirt", price: "Rs. 2,290", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500" },
    { id: 12, name: "Oversized Hoodie", price: "Rs. 2,990", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500" },
    { id: 13, name: "Slim Fit Chino Shirt", price: "Rs. 2,390", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500" },
    { id: 14, name: "Leather Biker Jacket", price: "Rs. 5,490", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=500" },
    { id: 15, name: "Basic Grey Sweatshirt", price: "Rs. 2,490", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=500" },
    { id: 16, name: "Flannel Check Shirt", price: "Rs. 2,690", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=500" },
  ];

  const productList = items && items.length > 0 ? items : defaultProducts;

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container with Sidebar & Content */}
      <div className="flex flex-col lg:flex-row pt-20 md:pt-[100px] max-w-7xl mx-auto px-4 gap-6">
        
        {/* Left Side: Professional Sidebar */}
        <Sidebar />

        {/* Right Side: Product Catalog Grid Area */}
        <main className="flex-1 w-full pb-12">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
            <p className="text-gray-500 text-sm md:text-base mt-1">{subtitle}</p>
          </div>

          {/* 4 Cards Per Row Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden group flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                
                {/* Image Container with Wishlist Icon */}
                <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>

                {/* Product Info & View Details Button */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">{item.name}</h3>
                    <p className="text-gray-900 font-semibold text-sm mt-1">{item.price}</p>
                  </div>

                  <button
                    onClick={() => handleViewProduct(item)}
                    className="mt-4 w-full bg-black text-white text-xs md:text-sm py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
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

export default CategoryPage;