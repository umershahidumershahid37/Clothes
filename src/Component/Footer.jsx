import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaTiktok } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-900">

        {/* BRAND & NEWSLETTER (Wider Column) */}
        <div className="lg:col-span-2 flex flex-col justify-between space-y-8 lg:space-y-6 text-center md:text-left items-center md:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              STITCH<span className="text-[#b98a55]">LAB</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Crafting premium quality apparel with modern tailoring and timeless designs for the contemporary wardrobe.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="w-full max-w-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5">
              Subscribe to our newsletter
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-l-full px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#b98a55] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#b98a55] hover:bg-[#a67946] text-white px-5 py-3 rounded-r-full flex items-center justify-center transition-colors shadow-md shrink-0 cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* SHOP Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4 text-xs sm:text-sm uppercase tracking-widest">
            Shop
          </h3>
          <ul className="space-y-2.5">
            {['All Products', 'Men', 'Women', 'New Arrivals', 'Sale', 'Brands'].map((item) => (
              <li key={item}>
                <a href="#" className="text-xs sm:text-sm hover:text-[#b98a55] transition-colors duration-200 inline-block py-0.5">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* HELP Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4 text-xs sm:text-sm uppercase tracking-widest">
            Help
          </h3>
          <ul className="space-y-2.5">
            {['Track Order', 'Returns', 'Shipping Info', 'FAQ', 'Size Guide', 'Contact Support'].map((item) => (
              <li key={item}>
                <a href="#" className="text-xs sm:text-sm hover:text-[#b98a55] transition-colors duration-200 inline-block py-0.5">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4 text-xs sm:text-sm uppercase tracking-widest">
            Company
          </h3>
          <ul className="space-y-2.5">
            {['About Us', 'Our Story', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Press'].map((item) => (
              <li key={item}>
                <a href="#" className="text-xs sm:text-sm hover:text-[#b98a55] transition-colors duration-200 inline-block py-0.5">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom / Social & Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-xs text-neutral-500 text-center md:text-left order-2 md:order-1">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">STITCHLAB</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 order-1 md:order-2">
          {[
            { icon: FaInstagram, href: "#", label: "Instagram" },
            { icon: FaFacebook, href: "#", label: "Facebook" },
            { icon: FaTwitter, href: "#", label: "Twitter" },
            { icon: FaPinterest, href: "#", label: "Pinterest" },
            { icon: FaTiktok, href: "#", label: "TikTok" },
          ].map((social, index) => {
            const IconComp = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-[#b98a55] hover:border-[#b98a55] transition-all duration-300"
              >
                <IconComp size={16} />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
};

export default Footer;