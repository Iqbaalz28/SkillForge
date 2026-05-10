import React from 'react';
import { User, Mail, Lock } from 'lucide-react';

const Settings = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Pengaturan Akun</h1>
      <p className="text-slate-500 mb-8">Perbarui informasi profil dan preferensi keamanan Anda.</p>
      
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 max-w-2xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
            <button className="bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
              Ubah Foto Profil
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2"><User className="w-4 h-4"/> Nama Lengkap</label>
            <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2"><Mail className="w-4 h-4"/> Email</label>
            <input type="email" defaultValue="john.doe@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          
          <div className="pt-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-slate-500"/> Ubah Password</h3>
            <div className="space-y-4">
              <input type="password" placeholder="Password Saat Ini" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="password" placeholder="Password Baru" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>

          <div className="pt-6">
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors shadow-lg shadow-primary/30">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
