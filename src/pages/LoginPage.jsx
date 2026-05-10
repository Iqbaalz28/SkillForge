import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* 1. Left Side (Visual & Value Proposition) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary via-blue-900 to-slate-900 overflow-hidden flex-col justify-center px-16 py-12">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 L0,100 Z" fill="white" />
            <circle cx="80" cy="20" r="15" fill="white" />
            <polygon points="20,20 40,80 80,40" fill="white" />
          </svg>
        </div>
        
        <div className="relative z-10 text-white max-w-lg">
          <Link to="/" className="inline-flex items-center gap-2 mb-16 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl backdrop-blur-md border border-white/30">S</div>
            <span className="text-2xl font-bold tracking-tight">SkillForge</span>
          </Link>

          <h2 className="text-4xl font-extrabold mb-8 leading-tight">
            Selamat Datang Kembali di <span className="text-accent">Ruang Belajar</span> Anda.
          </h2>
          
          <p className="text-lg text-blue-100 mb-10 font-medium">
            "Teruskan proses belajarmu dan raih karir impian lebih cepat bersama kami."
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Akses Instan</h4>
                <p className="text-blue-200 text-sm">Lanjutkan materi langsung dari titik terakhir Anda.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Progress Tersimpan</h4>
                <p className="text-blue-200 text-sm">Semua catatan dan tugas Anda aman di awan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Side (Form Area) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Header Logo (Visible only on small screens) */}
          <Link to="/" className="flex lg:hidden items-center gap-2 mb-8 justify-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <span className="text-xl font-bold text-primary tracking-tight">SkillForge</span>
          </Link>

          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Masuk ke Akun</h1>
            <p className="text-slate-500">Silakan masukkan detail akun Anda.</p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3.5 px-4 rounded-xl transition-all mb-6 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Masuk dengan Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-sm text-slate-400 font-medium">atau masuk dengan email</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-sm font-semibold text-primary hover:text-blue-800 transition-colors">Lupa Password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5 transition-all duration-200 text-lg mt-4">
              Masuk
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600 font-medium">
            Belum punya akun? <Link to="/register" className="text-primary font-bold hover:underline">Daftar di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
