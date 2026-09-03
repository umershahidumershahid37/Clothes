import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer'; // Footer imported here

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#C5A059] selection:text-black flex flex-col justify-between">
      <div>
        {/* Top Navbar */}
        <Navbar />

        {/* Full-Width Professional Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
          
          {/* Luxury Hero Banner */}
          <div className="relative mb-14 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#1c1917] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Get In Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Contact Our Team
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-3 font-normal leading-relaxed">
                Have questions about our collections, custom orders, or need assistance? We are here to provide exceptional support.
              </p>
            </div>

            <div className="relative z-10 self-start md:self-center bg-neutral-900/90 border border-neutral-700/80 px-5 py-3 rounded-xl shadow-inner flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-200">
                24/7 Support Available
              </span>
            </div>

            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Contact Layout Grid (2 Columns: Info & Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Info Card 1: Location */}
              <div className="bg-[#1c1917] text-white p-6 rounded-2xl border border-neutral-800 shadow-md flex items-start gap-4 hover:border-[#C5A059]/50 transition-colors">
                <div className="p-3 bg-[#292524] rounded-xl text-[#C5A059] border border-neutral-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#C5A059]">Our Location</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    Main Commercial Avenue, Fashion District, Pakistan
                  </p>
                </div>
              </div>

              {/* Info Card 2: Email */}
              <div className="bg-[#1c1917] text-white p-6 rounded-2xl border border-neutral-800 shadow-md flex items-start gap-4 hover:border-[#C5A059]/50 transition-colors">
                <div className="p-3 bg-[#292524] rounded-xl text-[#C5A059] border border-neutral-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#C5A059]">Email Us</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1 leading-relaxed break-all">
                    umershahidumershahid37@gmail.com
                  </p>
                </div>
              </div>

              {/* Info Card 3: Phone */}
              <div className="bg-[#1c1917] text-white p-6 rounded-2xl border border-neutral-800 shadow-md flex items-start gap-4 hover:border-[#C5A059]/50 transition-colors">
                <div className="p-3 bg-[#292524] rounded-xl text-[#C5A059] border border-neutral-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#C5A059]">Call Us</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    +92 329 4689180
                  </p>
                </div>
              </div>

              {/* Info Card 4: Working Hours */}
              <div className="bg-[#1c1917] text-white p-6 rounded-2xl border border-neutral-800 shadow-md flex items-start gap-4 hover:border-[#C5A059]/50 transition-colors">
                <div className="p-3 bg-[#292524] rounded-xl text-[#C5A059] border border-neutral-700 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#C5A059]">Business Hours</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Professional Form */}
            <div className="lg:col-span-2 bg-[#fafaf9] border border-gray-200 p-8 sm:p-12 rounded-2xl shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1917] tracking-tight">
                  Send Us A Message
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Fill out the form below and our customer experience team will respond within 24 hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800 text-sm animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email."
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Subject <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Order Inquiry "
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Your Message <span className="text-[#C5A059]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:border-[#C5A059] transition-colors shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-sm cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>

          </div>

        </main>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default Contact;