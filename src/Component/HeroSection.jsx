import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#FAF9F6] py-10 sm:py-14 md:py-18 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Content Area (5 Columns) */}
          <div className="lg:col-span-5 z-10 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-neutral-400">
                New Collection
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 uppercase leading-[1.15]">
                New Season <br />
                <span className="text-[#C5A059]">New Style</span>
              </h1>
              <div className="w-14 h-[3px] bg-[#C5A059] mt-3.5"></div>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
              In-style profile, redefining modern charm, movement, designed perfectly for your everyday look.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#men"
                className="px-7 sm:px-9 py-3 sm:py-3.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#C5A059] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                SHOP MEN
              </a>
            </div>
          </div>

          {/* Right Image Area (7 Columns) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none h-[360px] sm:h-[460px] lg:h-[520px] flex items-center justify-center lg:justify-end">
              
              {/* Soft Curved Background Blob */}
              <div className="absolute right-6 sm:right-16 w-72 sm:w-96 h-full bg-[#EFECE6] rounded-t-full rounded-b-full z-0"></div>

              {/* Model Image */}
              <div className="relative z-10 h-full w-full flex items-end overflow-hidden px-4">
                <img
                  src="/bg.avif"
                  alt="New Season Model"
                  className="w-full h-full object-cover object-top drop-shadow-xl rounded-2xl"
                />
              </div>

              {/* Vertical Ribbon Badge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#C5A059] text-white text-[11px] sm:text-xs font-bold tracking-widest py-10 px-2.5 rounded-l-xl uppercase shadow-md [writing-mode:vertical-lr] rotate-180 z-20">
                New Season
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;