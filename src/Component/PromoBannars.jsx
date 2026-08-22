import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PromoBanners = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Banner 1: New Arrivals */}
        <div className="group relative rounded-3xl overflow-hidden shadow-md border border-neutral-200/85 flex flex-col sm:flex-row h-auto sm:h-80 bg-[#b98a55]/15 transition-all duration-300 hover:shadow-xl">
          
          {/* Left Side: Content */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-6 sm:p-8 z-10 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 to-transparent sm:bg-none">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#b98a55] mb-2">
              STITCH<span className="text-neutral-900">LAB</span> Exclusive
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 font-medium leading-relaxed">
              Fresh styles just landed in store. Upgrade your everyday wardrobe.
            </p>
            <Link 
              to="/collections" 
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#b98a55] transition-all duration-300 shadow-sm hover:shadow-md group-hover:translate-x-1"
            >
              Shop Now
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Side: Image with Zoom Effect */}
          <div className="w-full sm:w-1/2 h-64 sm:h-full overflow-hidden relative">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80')` 
              }}
            ></div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Banner 2: Summer Collection */}
        <div className="group relative rounded-3xl overflow-hidden shadow-md border border-neutral-200/85 flex flex-col sm:flex-row h-auto sm:h-80 bg-[#b98a55]/15 transition-all duration-300 hover:shadow-xl">
          
          {/* Left Side: Content */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-6 sm:p-8 z-10 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 to-transparent sm:bg-none">
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#b98a55] mb-2">
              Seasonal Drop
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
              Summer Edit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 font-medium leading-relaxed">
              Light. Breezy. Effortless fabrics tailored for maximum comfort.
            </p>
            <Link 
              to="/collections" 
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#b98a55] transition-all duration-300 shadow-sm hover:shadow-md group-hover:translate-x-1"
            >
              Explore Now
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Side: Image with Zoom Effect */}
          <div className="w-full sm:w-1/2 h-64 sm:h-full overflow-hidden relative">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80')` 
              }}
            ></div>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanners;