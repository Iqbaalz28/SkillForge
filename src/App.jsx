import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LearnPage from './pages/LearnPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import MyClasses from './pages/dashboard/MyClasses';
import Exploration from './pages/dashboard/Exploration';
import Certificates from './pages/dashboard/Certificates';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardHome />} />
          <Route path="kelasku" element={<MyClasses />} />
          <Route path="eksplorasi" element={<Exploration />} />
          <Route path="sertifikat" element={<Certificates />} />
          <Route path="pengaturan" element={<Settings />} />
        </Route>
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
      </Routes>
    </div>
  );
}

export default App;
