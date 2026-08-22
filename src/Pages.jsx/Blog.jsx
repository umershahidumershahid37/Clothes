import React from "react";
import { Sparkles, Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Blog = () => {
  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Essential Shirts Every Man Needs in His Wardrobe",
      category: "Fashion Guide",
      date: "May 15, 2026",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
      excerpt: "Janiye kaunsi shirts har mard ke wardrobe mein honi chahiyein jo formal aur casual dono looks ke liye behtareen hain."
    },
    {
      id: 2,
      title: "How to Style Your Dress Pants for a Formal Business Look",
      category: "Styling Tips",
      date: "May 10, 2026",
      author: "Stylist Team",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
      excerpt: "Professional meetings aur office wear ke liye dress pants ko kis tarah perfect match banayein, poori tafseel."
    },
    {
      id: 3,
      title: "Summer Style Guide: Comfortable Shorts & Casual Wear",
      category: "Seasonal Wear",
      date: "May 02, 2026",
      author: "Fashion Expert",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
      excerpt: "Garmion ke mausam mein comfortable aur stylish rehne ke liye behtareen shorts aur casual outfits ke tips."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto w-full pb-20 px-4 sm:px-6 lg:px-8 pt-8">
          
          {/* Hero Banner Section */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-8 sm:p-14 shadow-xl border border-neutral-800 flex flex-col items-center text-center overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Latest Trends & Tips</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Our Fashion Blog
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 font-normal leading-relaxed">
                Men's luxury fashion, styling tips aur latest trends ke baray mein mazeed janiye.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Blog Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#C5A059] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#C5A059]" />
                        {post.author}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-[#C5A059] transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="px-6 pb-6 pt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-[#C5A059] transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
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

export default Blog;