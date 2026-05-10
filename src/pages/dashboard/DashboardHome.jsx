import React from 'react';
import { BookOpen, CheckCircle2, Award, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Selamat datang, John! 👋</h1>
          <p className="text-slate-500">Mari lanjutkan proses belajarmu hari ini.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-primary">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Kelas Aktif</p>
            <h3 className="text-2xl font-bold text-slate-900">2</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Kelas Selesai</p>
            <h3 className="text-2xl font-bold text-slate-900">4</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 text-accent rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Sertifikat</p>
            <h3 className="text-2xl font-bold text-slate-900">3</h3>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">Lanjutkan Belajar</h2>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center">
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Course" className="w-full md:w-48 h-32 object-cover rounded-xl" />
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-900">Mastering UI/UX & Web Dev</h3>
            <span className="bg-orange-100 text-accent text-xs font-bold px-3 py-1 rounded-full">65%</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">Modul 4: Fundamental Auto Layout & Components</p>
          
          <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
            <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          
          <Link to="/learn/1" className="inline-flex bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors items-center gap-2 text-sm w-fit">
            <PlayCircle className="w-4 h-4" /> Lanjutkan Materi
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
