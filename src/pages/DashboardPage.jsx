import React, { useState } from 'react';
import { BookOpen, Award, Settings, LogOut, PlayCircle, LayoutDashboard, Compass, CheckCircle2, Download, User, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
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
      
      case 'kelasku':
        return (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Kelasku</h1>
            <p className="text-slate-500 mb-8">Daftar semua kelas yang sedang dan telah Anda pelajari.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: "Mastering UI/UX & Web Dev", progress: 65, status: "Aktif", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Data Science dengan Python", progress: 15, status: "Aktif", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Dasar Pemrograman JavaScript", progress: 100, status: "Selesai", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Pengantar UI Design", progress: 100, status: "Selesai", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
              ].map((course, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col sm:flex-row gap-6">
                  <img src={course.image} alt={course.title} className="w-full sm:w-32 h-32 object-cover rounded-xl" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{course.title}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full shrink-0 ml-2 ${course.progress === 100 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-accent'}`}>
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-4 mt-4">
                      <div className={`${course.progress === 100 ? 'bg-green-500' : 'bg-primary'} h-2 rounded-full`} style={{ width: `${course.progress}%` }}></div>
                    </div>
                    {course.progress === 100 ? (
                      <Link to="/learn/1" className="inline-block text-center bg-slate-100 text-slate-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors">Lihat Materi</Link>
                    ) : (
                      <Link to="/learn/1" className="inline-block text-center bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors">Lanjutkan</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'eksplorasi':
        return (
          <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Eksplorasi Kelas</h1>
                <p className="text-slate-500">Temukan keahlian baru untuk menunjang karir Anda.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Advanced React Patterns", price: "Rp 699.000", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Golang Microservices", price: "Rp 749.000", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { title: "Digital Marketing 101", price: "Rp 399.000", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
              ].map((course, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group">
                  <div className="h-40 overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-slate-900 mb-2">{course.title}</h3>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="font-bold text-primary">{course.price}</span>
                      <Link to="/course/1" className="text-accent text-sm font-bold hover:underline">Lihat Detail</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'sertifikat':
        return (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Sertifikat Saya</h1>
            <p className="text-slate-500 mb-8">Daftar sertifikat kelulusan dari kelas yang telah diselesaikan.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Dasar Pemrograman JavaScript", date: "12 Mar 2026" },
                { title: "Pengantar UI Design", date: "05 Jan 2026" },
                { title: "Bootcamp HTML & CSS", date: "22 Nov 2025" }
              ].map((cert, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cert.title}</h3>
                  <p className="text-xs text-slate-400 mb-6">Lulus pada {cert.date}</p>
                  <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-xl border border-slate-200 transition-colors flex justify-center items-center gap-2">
                    <Download className="w-4 h-4" /> Unduh Sertifikat
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pengaturan':
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

      default:
        return null;
    }
  };

  const getNavClass = (tab) => {
    return `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
      activeTab === tab 
        ? 'bg-blue-50 text-primary' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
    }`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <span className="text-xl font-bold text-primary tracking-tight">SkillForge</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button onClick={() => setActiveTab('dashboard')} className={getNavClass('dashboard')}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button onClick={() => setActiveTab('kelasku')} className={getNavClass('kelasku')}>
            <BookOpen className="w-5 h-5" /> Kelasku
          </button>
          <button onClick={() => setActiveTab('eksplorasi')} className={getNavClass('eksplorasi')}>
            <Compass className="w-5 h-5" /> Eksplorasi
          </button>
          <button onClick={() => setActiveTab('sertifikat')} className={getNavClass('sertifikat')}>
            <Award className="w-5 h-5" /> Sertifikat
          </button>
          <button onClick={() => setActiveTab('pengaturan')} className={getNavClass('pengaturan')}>
            <Settings className="w-5 h-5" /> Pengaturan
          </button>
        </nav>
        
        <div className="p-4 border-t border-slate-200">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
