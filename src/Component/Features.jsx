import React from "react";
import {
  Award,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "PREMIUM QUALITY",
    description: "Finest fabrics for ultimate comfort",
  },
  {
    icon: RefreshCcw,
    title: "EASY RETURNS",
    description: "30 days return & exchange policy",
  },
  {
    icon: ShieldCheck,
    title: "SAFE PAYMENT",
    description: "100% secure payment methods",
  },
  {
    icon: Truck,
    title: "FAST DELIVERY",
    description: "Quick shipping at your doorstep",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-black border-y border-neutral-900 px-4 sm:px-6 py-8 sm:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className={`
                group flex items-center gap-4 px-4 sm:px-6 py-4 rounded-xl 
                transition-all duration-300 hover:bg-neutral-900/60
                ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-neutral-800"
                    : ""
                }
              `}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-[#b98a55]/50 transition-colors">
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="text-[#b98a55] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-[11px] sm:text-xs text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Features;