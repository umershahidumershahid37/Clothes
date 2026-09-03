import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaTiktok } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 px-4 pb-8 pt-12 text-neutral-400 sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 border-b border-neutral-900 pb-10 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-y-8">

        {/* BRAND & NEWSLETTER (Wider Column) */}
        <div className="flex flex-col items-center justify-between space-y-8 text-center md:col-span-2 md:items-start md:text-left lg:col-span-2 lg:space-y-6">
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
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full items-stretch">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-l-full border border-neutral-800 bg-neutral-900 px-4 py-3 text-xs text-white transition-colors placeholder:text-neutral-500 focus:border-[#b98a55] focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex shrink-0 cursor-pointer items-center justify-center rounded-r-full bg-[#b98a55] px-4 py-3 text-white shadow-md transition-colors hover:bg-[#a67946] sm:px-5"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* NAVIGATION Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4 text-xs sm:text-sm uppercase tracking-widest">
            Navigation
          </h3>
          <ul className="space-y-2.5">
            {[
              { label: 'Home', to: '/' },
              { label: 'Men', to: '/men' },
              { label: 'Collections', to: '/collections' },
              { label: 'About', to: '/about' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <li key={item}>
                <Link to={item.to} className="inline-block py-0.5 text-xs transition-colors duration-200 hover:text-[#b98a55] sm:text-sm">
                  {item.label}
                </Link>
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
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

        {/* Copyright */}
        <p className="order-2 text-xs text-neutral-500 md:order-1">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">STITCHLAB</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="order-1 flex items-center gap-2 md:order-2">
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