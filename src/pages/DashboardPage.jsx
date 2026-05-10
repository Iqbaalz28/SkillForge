import React from 'react';
import { BookOpen, Award, Settings, LogOut, LayoutDashboard, Compass } from 'lucide-react';
import { Link, useNavigate, NavLink, Outlet } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const getNavClass = ({ isActive }) => {
    return `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${
      isActive 
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
          <NavLink to="/dashboard" end className={getNavClass}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </NavLink>
          <NavLink to="/dashboard/kelasku" className={getNavClass}>
            <BookOpen className="w-5 h-5" /> Kelasku
          </NavLink>
          <NavLink to="/dashboard/eksplorasi" className={getNavClass}>
            <Compass className="w-5 h-5" /> Eksplorasi
          </NavLink>
          <NavLink to="/dashboard/sertifikat" className={getNavClass}>
            <Award className="w-5 h-5" /> Sertifikat
          </NavLink>
          <NavLink to="/dashboard/pengaturan" className={getNavClass}>
            <Settings className="w-5 h-5" /> Pengaturan
          </NavLink>
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
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
