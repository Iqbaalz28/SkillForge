import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const RegisterPage = () => {
  const [password, setPassword] = useState('');

  // Simple password strength calculation
  const getStrength = (pass) => {
    let score = 0;
    if (pass.length > 5) score += 1;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score; // 0 to 5
  };

  const strength = getStrength(password);
  
  const getStrengthColor = () => {
    if (password.length === 0) return 'bg-slate-200';
    if (strength <= 2) return 'bg-red-500';
    if (strength === 3 || strength === 4) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (password.length === 0) return '';
    if (strength <= 2) return 'Lemah';
    if (strength === 3 || strength === 4) return 'Sedang';
    return 'Kuat';
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
          <Link to="/" className="inline-flex items-center gap-2 mb-16">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl backdrop-blur-md border border-white/30">S</div>
            <span className="text-2xl font-bold tracking-tight">SkillForge</span>
          </Link>

          <h2 className="text-4xl font-extrabold mb-8 leading-tight">
            Mulai Perjalanan <span className="text-accent">Karir Gemilangmu</span> Hari Ini.
          </h2>
          
          <p className="text-lg text-blue-100 mb-10 font-medium">
            "Bergabung dengan 10.000+ pelajar lainnya yang telah mentransformasi karir mereka bersama kami."
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Akses Instan</h4>
                <p className="text-blue-200 text-sm">Belajar kapan saja, di mana saja.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Sertifikat Terakreditasi</h4>
                <p className="text-blue-200 text-sm">Diakui oleh ratusan perusahaan partner.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Konsultasi Mentor</h4>
                <p className="text-blue-200 text-sm">Dapatkan feedback langsung dari ahlinya.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Side (Form Area) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Daftar Akun Baru</h1>
            <p className="text-slate-500">Mari wujudkan karir impianmu bersama kami.</p>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3.5 px-4 rounded-xl transition-all mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Daftar dengan Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-sm text-slate-400 font-medium">atau daftar dengan email</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href='/dashboard'; }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Lengkap</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <input 
                type="password" 
                placeholder="Minimal 8 karakter" 
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Password Strength Meter */}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex gap-1 flex-1 mr-4">
                  {[1, 2, 3, 4].map((level) => (
                    <div 
                      key={level} 
                      className={`h-1.5 flex-1 rounded-full ${password.length > 0 && Math.ceil(strength * 0.8) >= level ? getStrengthColor() : 'bg-slate-200'} transition-all duration-300`}
                    ></div>
                  ))}
                </div>
                <span className={`text-xs font-bold ${password.length === 0 ? 'text-transparent' : 'text-slate-500'}`}>
                  {getStrengthLabel()}
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Konfirmasi Password</label>
              <input type="password" placeholder="Ulangi password" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary" required />
              <label htmlFor="terms" className="text-sm text-slate-600 leading-tight">
                Saya setuju dengan <a href="#" className="text-primary font-semibold hover:underline">Syarat & Ketentuan</a> serta Kebijakan Privasi yang berlaku.
              </label>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5 transition-all duration-200 text-lg">
              Buat Akun
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600 font-medium">
            Sudah punya akun? <Link to="/login" className="text-primary font-bold hover:underline">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
