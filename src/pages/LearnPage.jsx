import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, CheckCircle2, ChevronLeft, MessageSquare, Download } from 'lucide-react';

const LearnPage = () => {
  const [activeVideo, setActiveVideo] = useState(2); // Mocking the 2nd video as active

  const curriculum = [
    {
      module: "Modul 1: Pengantar UI/UX Design",
      videos: [
        { id: 1, title: "Apa itu UI dan UX?", duration: "12:45", completed: true },
        { id: 2, title: "Prinsip Dasar Desain UI", duration: "15:20", completed: false },
        { id: 3, title: "Memahami User Persona", duration: "18:10", completed: false }
      ]
    },
    {
      module: "Modul 2: Menguasai Tools Figma",
      videos: [
        { id: 4, title: "Pengenalan Interface Figma", duration: "10:05", completed: false },
        { id: 5, title: "Frame, Auto Layout, & Constraints", duration: "25:30", completed: false },
        { id: 6, title: "Components & Variants", duration: "20:15", completed: false }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans">
      {/* Top Navbar */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
            <ChevronLeft className="w-5 h-5" /> Kembali ke Dashboard
          </Link>
          <div className="hidden md:block w-px h-6 bg-slate-700"></div>
          <h1 className="hidden md:block text-white font-bold truncate max-w-md">Mastering UI/UX & Web Dev untuk Pemula</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-400">Progress Anda</span>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '15%' }}></div>
            </div>
            <span className="text-sm font-bold text-white">15%</span>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        
        {/* Left/Main Column - Video Player */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-slate-950 relative">
          {/* Video Container (16:9 aspect ratio) */}
          <div className="w-full bg-black aspect-video relative">
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video Player" className="w-full h-full object-cover opacity-50" />
            
            {/* Fake Video Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center hover:bg-primary transition-all hover:scale-105 shadow-2xl">
                <PlayCircle className="w-10 h-10 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-2">
              <div className="w-full bg-white/20 h-1 rounded-full cursor-pointer relative">
                <div className="absolute left-0 top-0 bottom-0 bg-primary rounded-full w-1/3"></div>
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Video Details */}
          <div className="p-6 md:p-10 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prinsip Dasar Desain UI</h2>
            
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Amanda" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-white font-semibold text-sm">Amanda Putri</p>
                  <p className="text-slate-400 text-xs">Instruktur</p>
                </div>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Unduh Materi (PDF)
              </button>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-bold text-white mb-3">Tentang pelajaran ini</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Dalam video ini, kita akan membahas mengenai prinsip-prinsip dasar yang harus dipahami oleh setiap UI Designer. 
                Mulai dari hierarki visual, penggunaan warna (*Color Theory*), tipografi, hingga spacing (*White Space*).
                Prinsip ini akan menjadi landasan kuat sebelum kita masuk ke tools seperti Figma.
              </p>
            </div>
          </div>
        </main>

        {/* Right Column - Playlist/Curriculum Sidebar */}
        <aside className="w-full lg:w-96 bg-slate-900 border-l border-slate-800 flex flex-col shrink-0">
          <div className="p-5 border-b border-slate-800 bg-slate-900/50">
            <h3 className="text-white font-bold text-lg">Materi Kelas</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {curriculum.map((section, i) => (
              <div key={i} className="border-b border-slate-800">
                {/* Section Header */}
                <div className="p-4 bg-slate-800/30">
                  <h4 className="text-slate-200 font-bold text-sm">{section.module}</h4>
                </div>
                
                {/* Videos List */}
                <div className="flex flex-col">
                  {section.videos.map((vid) => (
                    <button 
                      key={vid.id}
                      onClick={() => setActiveVideo(vid.id)}
                      className={`flex gap-3 p-4 text-left transition-colors ${
                        activeVideo === vid.id 
                          ? 'bg-primary/10 border-l-2 border-primary' 
                          : 'hover:bg-slate-800 border-l-2 border-transparent'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {vid.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : activeVideo === vid.id ? (
                          <PlayCircle className="w-5 h-5 text-primary" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>
                        )}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold mb-1 ${activeVideo === vid.id ? 'text-primary' : 'text-slate-300'}`}>
                          {vid.title}
                        </p>
                        <p className="text-xs text-slate-500">{vid.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LearnPage;
