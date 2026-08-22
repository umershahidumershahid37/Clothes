import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react';

const ValueProps = () => {
  const features = [
    {
      icon: Truck,
      title: "FAST SHIPPING",
      description: "Quick doorstep delivery"
    },
    {
      icon: RefreshCw,
      title: "EASY RETURNS",
      description: "Hassle-free exchange policy"
    },
    {
      icon: ShieldCheck,
      title: "SECURE CHECKOUT",
      description: "100% protected payments"
    },
    {
      icon: Headphones,
      title: "24/7 SUPPORT",
      description: "Dedicated customer care"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {features.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index} 
              className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-3xl border bg-neutral-800 border-[#b98a55]/60 text-white shadow-lg shadow-[#b98a55]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#b98a55]"
            >
              {/* Box-style Icon Container */}
              <div className="p-3.5 sm:p-4 rounded-2xl flex items-center justify-center shrink-0 shadow-md bg-[#b98a55] text-neutral-950 border border-[#b98a55]">
                <IconComponent size={24} className="sm:w-[26px] sm:h-[26px]" strokeWidth={2.2} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs mt-1 font-medium text-neutral-300 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ValueProps;