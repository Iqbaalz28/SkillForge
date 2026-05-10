import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, CheckCircle2, Star, Clock, UserCheck, ShieldCheck } from 'lucide-react';

const CourseDetailPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar (Simplified for detail page) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
              <span className="text-2xl font-bold text-primary tracking-tight">SkillForge</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-primary font-medium transition-colors">Beranda</Link>
              <Link to="/login" className="text-slate-600 hover:text-primary font-medium transition-colors">Masuk</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                <span>Web Development</span>
                <span>•</span>
                <span>UI/UX Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Mastering UI/UX & Web Dev untuk Pemula</h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Pelajari dari nol cara mendesain antarmuka aplikasi yang indah dan mewujudkannya menjadi website interaktif menggunakan React dan Tailwind CSS.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-accent" />)}
                  </div>
                  <span className="font-bold text-lg">4.9</span>
                  <span className="text-slate-400">(1,245 ulasan)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <UserCheck className="w-5 h-5" /> 2,400 Pelajar
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Mentor" className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div>
                  <p className="text-sm text-slate-400">Mentor</p>
                  <p className="font-bold">Amanda Putri <span className="text-slate-400 font-normal ml-1">· Sr. Product Designer</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 relative">
            
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* What You'll Learn */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Apa yang akan Anda pelajari</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Prinsip desain UI/UX modern",
                    "Penggunaan Figma dari dasar hingga mahir",
                    "Wireframing & Prototyping interaktif",
                    "Membuat Design System yang konsisten",
                    "Dasar-dasar HTML, CSS, dan JavaScript",
                    "Membangun layout responsif dengan Tailwind CSS",
                    "Integrasi desain ke dalam framework React",
                    "Mendeploy website ke production"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Materi Kelas</h2>
                <div className="space-y-4">
                  {[
                    { title: "Modul 1: Pengantar UI/UX Design", lessons: "5 video", duration: "45 menit" },
                    { title: "Modul 2: Menguasai Tools Figma", lessons: "8 video", duration: "1 jam 20 menit" },
                    { title: "Modul 3: Wireframe & High-Fidelity Design", lessons: "10 video", duration: "2 jam 15 menit" },
                    { title: "Modul 4: Fundamental HTML, CSS, JS", lessons: "12 video", duration: "3 jam 10 menit" },
                    { title: "Modul 5: Tailwind CSS & React JS", lessons: "15 video", duration: "4 jam 30 menit" },
                    { title: "Modul 6: Final Project", lessons: "3 video", duration: "1 jam" }
                  ].map((module, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer flex justify-between items-center group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                          <PlayCircle className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900">{module.title}</h4>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-4">
                        <span>{module.lessons}</span>
                        <span className="hidden sm:inline-block">{module.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Sticky Checkout Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden lg:-mt-64 relative z-10 sticky top-28">
                {/* Video Preview */}
                <div className="relative h-64 bg-slate-900 group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Course Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white font-bold tracking-wide">Lihat Cuplikan</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-end gap-3 mb-6">
                    <h2 className="text-4xl font-extrabold text-slate-900">Rp 499.000</h2>
                    <span className="text-lg text-slate-400 line-through mb-1">Rp 1.500.000</span>
                  </div>

                  <Link to="/checkout" className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all text-lg mb-4">
                    Beli Kelas Sekarang
                  </Link>
                  <p className="text-center text-sm text-slate-500 mb-8">Garansi 7 hari uang kembali</p>

                  <h4 className="font-bold text-slate-900 mb-4">Kelas ini mencakup:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600">
                      <PlayCircle className="w-5 h-5 text-primary" /> 12.5 jam total video on-demand
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <ShieldCheck className="w-5 h-5 text-primary" /> Akses selamanya ke materi
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <Clock className="w-5 h-5 text-primary" /> Fleksibel (belajar kapan saja)
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Sertifikat Kelulusan
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white text-center py-8">
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} SkillForge Mastery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CourseDetailPage;
