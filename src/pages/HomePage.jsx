import React, { useState } from 'react';
import { BookOpen, UserCheck, Infinity, Star, PlayCircle, CheckCircle2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <Link to="/register" className="hidden md:inline-flex bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 hover:scale-105 transition-all shadow-md shadow-blue-900/20">
                Daftar Sekarang
              </Link>
              <button 
                className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <a href="#kelas" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-primary font-medium transition-colors">Kelas</a>
              <a href="#mentor" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-primary font-medium transition-colors">Mentor</a>
              <a href="#testimoni" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-primary font-medium transition-colors">Testimoni</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-primary font-medium transition-colors">FAQ</a>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center px-6 py-3 rounded-xl font-bold mt-2">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        )}
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
            {/* Real Logos */}
            {[
              { 
                name: 'Google', 
                icon: (
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                )
              },
              { 
                name: 'Microsoft', 
                icon: (
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                    <path fill="#f35325" d="M11.4 24H0V12.6h11.4V24z" />
                    <path fill="#81bc06" d="M24 24H12.6V12.6H24V24z" />
                    <path fill="#05a6f0" d="M11.4 11.4H0V0h11.4v11.4z" />
                    <path fill="#ffba08" d="M24 11.4H12.6V0H24v11.4z" />
                  </svg>
                )
              },
              { 
                name: 'Spotify', 
                icon: (
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                    <path fill="#1ED760" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.291c-.22.355-.678.473-1.034.254-2.828-1.72-6.386-2.112-10.574-1.157-.406.094-.809-.161-.902-.568-.093-.406.161-.809.568-.902 4.582-1.045 8.528-.596 11.688 1.332.356.22.473.68.254 1.041zm1.458-3.238c-.276.444-.863.593-1.307.316-3.236-1.986-8.214-2.585-11.951-1.417-.506.158-1.04-.124-1.198-.631-.157-.506.124-1.04.631-1.198 4.314-1.348 9.803-.687 13.51 1.589.445.276.593.863.315 1.341zm.142-3.411c-3.896-2.315-10.334-2.528-14.077-1.398-.616.186-1.265-.16-1.451-.776-.186-.615.16-1.264.776-1.451 4.316-1.306 11.419-1.063 15.894 1.597.553.328.736 1.042.408 1.595-.328.552-1.043.735-1.55.433z"/>
                  </svg>
                )
              },
              { 
                name: 'GitHub', 
                icon: (
                  <svg className="w-8 h-8 mr-2 fill-slate-800" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              },
              { 
                name: 'Slack', 
                icon: (
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24">
                    <path fill="#e01e5a" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
                    <path fill="#e01e5a" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                    <path fill="#36c5f0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/>
                    <path fill="#36c5f0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
                    <path fill="#2eb67d" d="M18.956 8.835a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.835a2.528 2.528 0 0 1-2.522 2.52h-2.522v-2.52z"/>
                    <path fill="#2eb67d" d="M17.688 8.835a2.528 2.528 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.313z"/>
                    <path fill="#ecb22e" d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.52v-2.522h2.52z"/>
                    <path fill="#ecb22e" d="M15.165 17.687a2.527 2.527 0 0 1-2.52-2.521 2.527 2.527 0 0 1 2.52-2.521h6.313A2.527 2.527 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.313z"/>
                  </svg>
                )
              }
            ].map((company, i) => (
              <div key={i} className="text-2xl font-black text-slate-800 tracking-tighter flex items-center">
                {company.icon}
                {company.name}
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
                    <Link to={`/course/${i + 1}`} className="bg-orange-100 text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg font-bold transition-colors">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-24 bg-slate-50" id="mentor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Belajar dari Expert</h2>
            <p className="text-slate-600 text-lg">Mentor kami adalah praktisi industri dengan pengalaman bertahun-tahun di perusahaan top ternama.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Rizky Hasan", role: "Sr. Software Engineer", company: "TechCorp", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Amanda Putri", role: "Product Designer", company: "EduInc", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Kevin Wijaya", role: "Data Scientist", company: "DataFlow", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Sarah Nadia", role: "Frontend Lead", company: "GlobalNet", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
            ].map((mentor, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
                <div className="h-64 overflow-hidden">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{mentor.name}</h4>
                  <p className="text-sm text-primary font-semibold mb-2">{mentor.role}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">at {mentor.company}</p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan Seputar SkillForge</h2>
            <p className="text-slate-600 text-lg">Temukan jawaban untuk pertanyaan yang paling sering ditanyakan.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Apakah kelas ini cocok untuk pemula?", a: "Tentu saja! Semua kelas kami dirancang dari level dasar (fundamental) hingga mahir. Anda tidak perlu memiliki latar belakang IT untuk mulai belajar." },
              { q: "Berapa lama saya bisa mengakses materi?", a: "Anda akan mendapatkan akses materi selamanya (lifetime access) dengan satu kali pembayaran. Termasuk jika ada pembaruan materi di masa depan." },
              { q: "Apakah saya mendapatkan sertifikat?", a: "Ya, Anda akan mendapatkan sertifikat kelulusan setelah menyelesaikan semua modul dan tugas akhir yang akan direview oleh mentor kami." },
              { q: "Bagaimana jika saya kesulitan memahami materi?", a: "Kami menyediakan forum diskusi eksklusif dan sesi tanya jawab rutin bersama mentor. Anda bisa bertanya apa saja jika mengalami kendala." }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-accent shrink-0">Q:</span> {faq.q}
                </h4>
                <p className="text-slate-600 pl-7 leading-relaxed">{faq.a}</p>
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
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
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
