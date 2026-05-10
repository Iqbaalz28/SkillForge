import React from 'react';
import { Link } from 'react-router-dom';

const MyClasses = () => {
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
};

export default MyClasses;
