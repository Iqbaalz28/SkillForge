import React from 'react';
import { BookOpen, UserCheck, Infinity, Star, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="w-full">
      {/* 1. Header (Sticky, Glassmorphism) */}
      <header className="sticky top-0 z-50 w-full glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
              <span className="text-2xl font-bold text-primary tracking-tight">SkillForge</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#kelas" className="text-slate-600 hover:text-primary font-medium transition-colors">Kelas</a>
              <a href="#mentor" className="text-slate-600 hover:text-primary font-medium transition-colors">Mentor</a>
              <a href="#testimoni" className="text-slate-600 hover:text-primary font-medium transition-colors">Testimoni</a>
              <a href="#faq" className="text-slate-600 hover:text-primary font-medium transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/register" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 hover:scale-105 transition-all shadow-md shadow-blue-900/20">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-accent font-semibold text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                Platform Belajar #1 di Indonesia
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Tingkatkan Karirmu dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Keahlian Praktis</span> & Bersertifikat
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Pelajari skill yang paling dibutuhkan industri saat ini langsung dari praktisi ahli. Wujudkan karir impianmu bersama SkillForge Mastery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 hover:shadow-lg hover:shadow-primary/30 transition-all text-lg flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Mulai Belajar
                </Link>
                <a href="#kelas" className="bg-white text-primary border-2 border-primary/20 px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:bg-blue-50 transition-all text-lg">
                  Lihat Silabus
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 font-medium pt-4">
                <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Mentor Expert</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Akses Selamanya</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full scale-110"></div>
              <div className="relative glass rounded-2xl p-2 shadow-2xl border-white/40 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Students learning" 
                  className="rounded-xl w-full h-auto object-cover aspect-video"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl flex items-center gap-4 shadow-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="text-green-600 w-6 h-6 fill-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">Rating Pelajar</p>
                    <p className="text-xl font-bold text-slate-900">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trusted By */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Dipercaya oleh Perusahaan Terkemuka</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholders */}
            {['TechCorp', 'EduInc', 'InnovateSoft', 'GlobalNet', 'DataFlow'].map((logo, i) => (
              <div key={i} className="text-2xl font-black text-slate-800 tracking-tighter flex items-center">
                <div className="w-8 h-8 bg-slate-800 rounded mr-2 opacity-20"></div>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-24 bg-slate-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Memilih SkillForge?</h2>
            <p className="text-slate-600 text-lg">Kami merancang pengalaman belajar terbaik untuk memastikan Anda menguasai keahlian dengan cepat dan efektif.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Materi Terstruktur</h3>
              <p className="text-slate-600 leading-relaxed">Kurikulum disusun sistematis dari dasar hingga mahir, dirancang khusus agar mudah dipahami oleh pemula sekalipun.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mentor Profesional</h3>
              <p className="text-slate-600 leading-relaxed">Belajar langsung dari praktisi industri berpengalaman yang siap membimbing dan mereview portfolio Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Infinity className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Akses Selamanya</h3>
              <p className="text-slate-600 leading-relaxed">Sekali bayar untuk akses materi selamanya. Dapatkan update materi terbaru tanpa biaya tambahan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Course Sneak Peek */}
      <section className="py-24 bg-white" id="kelas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kelas Unggulan</h2>
              <p className="text-slate-600 text-lg">Mulai karir di bidang teknologi dengan kelas terpopuler kami.</p>
            </div>
            <Link to="/register" className="hidden md:inline-flex text-primary font-semibold hover:text-blue-800">Lihat Semua Kelas &rarr;</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mastering UI/UX & Web Dev", price: "Rp 499.000", rating: "4.9", students: "2.4k", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Fullstack React & Node.js", price: "Rp 599.000", rating: "4.8", students: "1.8k", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Data Science dengan Python", price: "Rp 549.000", rating: "4.9", students: "1.2k", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="relative h-48 overflow-hidden group">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-sm font-bold text-slate-800 flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" /> {course.rating}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4" /> {course.students} Pelajar
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">{course.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xl font-extrabold text-primary">{course.price}</span>
                    <Link to="/checkout" className="bg-orange-100 text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg font-bold transition-colors">
                      Beli
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-slate-900 text-white" id="testimoni">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-slate-400 text-lg">Ribuan pelajar telah berhasil mencapai karir impian mereka.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "Frontend Developer", text: "Materi sangat mudah dipahami. Berkat kelas React di sini, saya berhasil mendapat pekerjaan impian saya dalam 2 bulan!", avatar: "https://i.pravatar.cc/150?img=11" },
              { name: "Siti Rahma", role: "UI/UX Designer", text: "Mentornya sangat profesional. Feedback yang diberikan pada portfolio saya sangat detail dan membantu proses desain.", avatar: "https://i.pravatar.cc/150?img=5" },
              { name: "Andi Wijaya", role: "Data Analyst", text: "Kurikulumnya terstruktur dengan baik. Sangat cocok untuk pemula yang ingin shifting career ke bidang IT.", avatar: "https://i.pravatar.cc/150?img=8" }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl relative">
                <div className="text-accent mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-accent" />)}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-950 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">S</div>
                <span className="text-xl font-bold text-white tracking-tight">SkillForge</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Platform edukasi teknologi terdepan untuk mencetak talenta digital berkualitas siap kerja.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><span className="text-sm font-bold">FB</span></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><span className="text-sm font-bold">TW</span></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><span className="text-sm font-bold">IG</span></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><span className="text-sm font-bold">IN</span></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Perusahaan</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Tentang Kami</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Karir</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Dukungan</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Bantuan & FAQ</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Syarat & Ketentuan</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">Kebijakan Privasi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Berlangganan Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Dapatkan info kelas dan promo terbaru.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Anda" className="bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-lg w-full focus:outline-none focus:border-primary text-sm" />
                <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SkillForge Mastery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
