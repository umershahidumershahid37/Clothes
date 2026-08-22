import React, { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Amazing quality and perfect fitting! The shirt looked even better in real life. Delivery was also very fast. Definitely shopping again.",
  },
  {
    id: 2,
    name: "Usman Ali",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "I really loved the quality of the fabric. The design is simple, classy and exactly what I was looking for. Highly recommended!",
  },
  {
    id: 3,
    name: "Hamza Shah",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 4,
    review:
      "Great experience from ordering to delivery. The product was nicely packed and the quality was excellent for the price.",
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    review:
      "One of the best online clothing stores I have ordered from. The shirt fitting was perfect and the material feels premium.",
  },
  {
    id: 5,
    name: "Zain Malik",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "Very stylish collection and excellent customer service. I ordered two shirts and both were exactly as shown on the website.",
  },
  {
    id: 6,
    name: "Saad Hassan",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    review:
      "The quality surprised me. Fabric is comfortable and the stitching is really clean. Will definitely recommend this store.",
  },
];

const Clients = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    return [
      reviews[current],
      reviews[(current + 1) % reviews.length],
      reviews[(current + 2) % reviews.length],
    ];
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400">
          Testimonials
        </span>

        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
          What Our <span className="text-[#b98a55]">Clients Say</span>
        </h2>

        <div className="mt-3 h-[3px] w-12 bg-[#b98a55] mx-auto"></div>

        <p className="mt-4 max-w-xl mx-auto text-neutral-500 text-sm sm:text-base leading-relaxed">
          Real experiences from our valued customers. Quality, style and satisfaction is what we always aim for.
        </p>
      </div>

      {/* Reviews Slider Container */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">

        {/* Left Arrow (Desktop) */}
        <button
          onClick={prevSlide}
          className="
            hidden lg:flex
            absolute -left-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full
            bg-white border border-neutral-200 text-neutral-900
            items-center justify-center
            shadow-md
            hover:bg-black hover:text-white hover:border-black
            transition-all duration-300
            hover:scale-105
          "
          aria-label="Previous Review"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {getVisibleReviews().map((review, index) => (
            <div
              key={`${review.id}-${current}-${index}`}
              className="
                group
                relative
                bg-neutral-50/80
                border border-neutral-200/80
                rounded-2xl
                p-6 sm:p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-1.5
                transition-all duration-500
                flex flex-col justify-between
              "
            >
              <div>
                {/* Quote Icon */}
                <div className="
                  absolute
                  top-6
                  right-6
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  border border-neutral-100
                  flex
                  items-center
                  justify-center
                  shadow-sm
                ">
                  <Quote
                    size={17}
                    className="text-[#b98a55]"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "currentColor" : "none"}
                      className={
                        i < review.rating
                          ? "text-yellow-500"
                          : "text-neutral-300"
                      }
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="
                  text-neutral-600
                  text-sm
                  sm:text-base
                  leading-relaxed
                  min-h-[110px] sm:min-h-[130px]
                ">
                  "{review.review}"
                </p>
              </div>

              <div>
                {/* Divider */}
                <div className="border-t border-neutral-200/80 my-5"></div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      ring-2
                      ring-white
                      shadow-sm
                    "
                  />

                  <div>
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
                      {review.name}
                    </h3>
                    <p className="text-xs font-medium text-[#b98a55] mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Right Arrow (Desktop) */}
        <button
          onClick={nextSlide}
          className="
            hidden lg:flex
            absolute -right-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full
            bg-white border border-neutral-200 text-neutral-900
            items-center justify-center
            shadow-md
            hover:bg-black hover:text-white hover:border-black
            transition-all duration-300
            hover:scale-105
          "
          aria-label="Next Review"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* Mobile Arrows */}
      <div className="flex lg:hidden justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-8 bg-[#b98a55]"
                  : "w-2 bg-neutral-300"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
};

export default Clients;