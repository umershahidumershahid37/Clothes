import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col gap-8 rounded-3xl bg-white px-6 py-10 shadow-xl border border-neutral-200/80 sm:px-10 sm:py-12">
        
        {/* Header & Logo */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 shadow-lg border border-neutral-800">
            <img 
              src="/logo.jpg" 
              alt="STITCHLAB Logo" 
              className="h-full w-full rounded-2xl object-cover" 
              onError={(e) => {
                // Fallback agar image load na ho
                e.target.style.display = 'none';
              }}
            />
            <span className="text-[#b98a55] font-extrabold text-xl absolute hidden">SL</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
              Welcome Back
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500">
              Sign in to access your STITCHLAB account & orders.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 pl-11 pr-4 py-3 text-xs sm:text-sm text-neutral-900 outline-none transition-all focus:bg-white focus:border-[#b98a55] focus:ring-2 focus:ring-[#b98a55]/20"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 pl-11 pr-4 py-3 text-xs sm:text-sm text-neutral-900 outline-none transition-all focus:bg-white focus:border-[#b98a55] focus:ring-2 focus:ring-[#b98a55]/20"
                />
              </div>
            </div>

          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="inline-flex items-center gap-2 text-neutral-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-[#b98a55] focus:ring-[#b98a55]" />
              Remember me
            </label>
            <a href="#forgot" className="font-semibold text-neutral-900 hover:text-[#b98a55] transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 hover:bg-[#b98a55] text-white px-5 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            Sign In
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-1">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-neutral-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest text-neutral-400 bg-white px-3">
            Or continue with
          </div>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-400"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-xs sm:text-sm text-neutral-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-neutral-900 hover:text-[#b98a55] underline transition-colors">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;