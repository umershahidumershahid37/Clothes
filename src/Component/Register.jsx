import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Registering with:', name, email, password);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* Decorative Blur Background Elements */}
      <div className="pointer-events-none absolute -left-24 top-8 hidden h-80 w-80 rounded-full bg-[#b98a55]/10 blur-3xl sm:block"></div>
      <div className="pointer-events-none absolute -right-24 bottom-8 hidden h-80 w-80 rounded-full bg-neutral-200 blur-3xl sm:block"></div>

      <div className="mx-auto w-full max-w-lg rounded-3xl bg-white p-6 sm:p-10 shadow-xl border border-neutral-200/80 backdrop-blur-xl">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-900">
            <img 
              src="/logo.jpg" 
              alt="STITCHLAB Logo" 
              className="h-full w-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">Create Account</h1>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-500">
              Join <span className="font-bold uppercase tracking-wider text-[#b98a55]">STITCHLAB</span> for exclusive styling and order tracking.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <form className="mt-8 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                <User size={18} />
              </span>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Muhammad Umer"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                <Mail size={18} />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                <Lock size={18} />
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 pl-11 pr-12 py-3.5 text-xs sm:text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-2 focus:ring-neutral-900/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                <Lock size={18} />
              </span>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 pl-11 pr-12 py-3.5 text-xs sm:text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-2 focus:ring-neutral-900/10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2.5 pt-1 text-xs text-neutral-600">
            <input
              id="terms"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 accent-[#b98a55]"
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <a href="#terms" className="font-bold text-neutral-900 hover:text-[#b98a55] underline transition-colors">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#b98a55] hover:shadow-xl focus:outline-none"
          >
            Create Account
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <div className="relative flex justify-center text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              <span className="bg-white px-3">Or continue with</span>
            </div>
          </div>

          {/* Google Signup Button */}
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Footer Login Link */}
        <p className="mt-8 text-center text-xs sm:text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-neutral-900 hover:text-[#b98a55] underline transition-colors">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;