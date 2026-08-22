import React from "react";
import { Sparkles, Award, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto w-full pb-20 px-4 sm:px-6 lg:px-8 pt-8">
          
          {/* Hero Banner Section */}
          <div className="relative mb-16 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-8 sm:p-14 shadow-xl border border-neutral-800 flex flex-col items-center text-center overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Our Story & Legacy</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Redefining Men's Luxury Fashion
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 font-normal leading-relaxed">
                Humara maqsad har mard ko behtareen, stylish aur comfortable clothing faraham karna hai jo unke confidence ko nikhare.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Brand Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#C5A059]">
                Where Elegance Meets Everyday Style
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                Har libaas sirf aik kapra nahi hota, yeh aapke shakhsiyat ka aik behtareen akas hota hai. Hamari collection timeless classics aur contemporary trends ka ek haseen sangam hai, jo aapko har pal pur-e-itmad banata hai.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                Be-misaal silai (stitching), premium fabrics aur baareekbeen craftsmanship ke sath tayyar kiye gaye hamare products aapke wardrobe ko ek naya standard dete hain.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" 
                alt="Men Fashion Style" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          {/* Core Values / Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-neutral-500 text-sm">
                Sabse behtareen fabrics ka intekhab jo lambe arse tak chalay aur comfortable rahe.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Designs</h3>
              <p className="text-neutral-500 text-sm">
                Latest fashion trends ke mutabiq tayyar kiye gaye unique aur classy styles.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-neutral-500 text-sm">
                Aapki khushi aur behtareen shopping experience hamari sab se pehli tarjeeh hai.
              </p>
            </div>
          </div>

        </main>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;