import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../Component/Navbar';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lampOn, setLampOn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Welcome back, ${email}!`);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col transition-colors duration-500">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center lg:justify-between px-4 sm:px-8 py-8 gap-12 overflow-hidden">
        
        {/* Lamp Section (Compact & Proportional to Login Card) */}
        <div className="hidden lg:flex flex-col items-center relative w-[350px] h-[500px] justify-start pt-4">
          {/* Lamp Fixture & Hanging Wire */}
          <div className="w-1.5 h-16 bg-zinc-700"></div>
          <div className="w-12 h-6 bg-zinc-800 rounded-b-full relative z-20 flex justify-center items-end">
            <div className={`w-3 h-1.5 rounded-t-full transition-colors duration-300 ${lampOn ? 'bg-yellow-200 shadow-[0_0_10px_#fde047]' : 'bg-zinc-600'}`}></div>
          </div>

          {/* Glowing Cone Light Effect matched to card height */}
          {lampOn && (
            <div 
              className="absolute top-20 w-[320px] h-[400px] pointer-events-none z-10 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(180deg, rgba(253, 224, 71, 0.35) 0%, rgba(253, 224, 71, 0.05) 70%, transparent 100%)',
                clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
                filter: 'blur(12px)'
              }}
            ></div>
          )}

          {/* Lamp Stand Pole */}
          <div className="absolute top-22 w-2 h-[420px] bg-zinc-800 rounded-full"></div>
          {/* Lamp Base */}
          <div className="absolute bottom-4 w-36 h-5 bg-zinc-700 rounded-t-xl"></div>
          
          {/* Interactive Lamp Toggle Button */}
          <button 
            onClick={() => setLampOn(!lampOn)}
            className="absolute bottom-6 z-30 px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-[11px] text-yellow-400 border border-yellow-500/30 rounded-full transition cursor-pointer shadow-lg"
          >
            {lampOn ? 'Turn Off Lamp' : 'Turn On Lamp'}
          </button>
        </div>

        {/* Login Card Section */}
        <div className="w-full lg:w-auto flex justify-center items-center z-20">
          <div 
            className={`w-full max-w-md bg-[#161618]/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-2xl relative transition-all duration-700 transform ${
              lampOn 
                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto shadow-[0_0_30px_rgba(253,224,71,0.15)]' 
                : 'opacity-0 scale-95 translate-y-6 pointer-events-none'
            }`}
          >
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECURE ACCESS</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h2>
              <p className="text-sm text-zinc-400">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm"
                />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">Password</label>
                  <a href="#forgot" className="text-xs text-zinc-400 hover:text-yellow-400 transition">Forgot Password?</a>
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm pr-10"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex items-center text-xs text-zinc-400">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="rounded bg-zinc-900 border-zinc-700 text-yellow-500 focus:ring-0 w-4 h-4" />
                  <span>Remember me</span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 px-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold rounded-xl transition duration-200 flex items-center justify-center shadow-lg shadow-yellow-500/10 cursor-pointer text-sm tracking-wide"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
              <span className="relative px-3 bg-[#161618] text-xs text-zinc-500 uppercase">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => alert('Google login clicked')} className="flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-sm font-medium transition cursor-pointer">
                <FcGoogle size={18} /> Google
              </button>
              <button onClick={() => alert('GitHub login clicked')} className="flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-sm font-medium transition cursor-pointer">
                <FaGithub size={18} /> GitHub
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-zinc-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-yellow-400 font-semibold hover:underline">
                Create account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}