import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="group relative rounded-3xl overflow-hidden shadow-md border border-neutral-200/85 flex flex-col md:flex-row bg-[#b98a55]/15 transition-all duration-300 hover:shadow-xl">
        
        {/* Left Side: Background Image with Zoom Effect */}
        <div className="w-full md:w-1/2 h-72 sm:h-80 md:h-[420px] overflow-hidden relative">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80')` 
            }}
          ></div>
          <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
        </div>

        {/* Right Side: Sale Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 text-center bg-[#b98a55] text-white">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-neutral-900 mb-2">
            Limited Time Offer
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-900/80 mb-2">
            Up To
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral-900 tracking-tight mb-4 drop-shadow-sm">
            40% OFF
          </h2>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 mb-8">
            On All New Arrivals Collection
          </p>
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-white hover:text-neutral-900 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Shop Now
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;