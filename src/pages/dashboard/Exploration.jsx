import React from 'react';
import { Link } from 'react-router-dom';

const Exploration = () => {
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
};

export default Exploration;
