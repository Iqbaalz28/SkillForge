import React from 'react';
import { Award, Download } from 'lucide-react';

const Certificates = () => {
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
};

export default Certificates;
