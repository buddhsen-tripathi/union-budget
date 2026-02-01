import React, { useState } from 'react';
import { Menu, X, BarChart3, PieChart, FileText, Home, Search, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../store';

const NavLink = ({ to, icon: Icon, label, onClick }: { to: string, icon: any, label: string, onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-slate-900 text-white font-semibold shadow-sm' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
};

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useAppStore();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-india-saffron via-white to-india-green rounded-full shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-india-blue font-bold text-lg">₹</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">Budget 2026</h1>
                <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-0.5">GOVERNMENT OF INDIA</p>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <NavLink to="/" icon={PieChart} label="Allocations" />
            <NavLink to="/overview" icon={Home} label="Overview" />
            <NavLink to="/policies" icon={FileText} label="Policies" />
            
            <div className="relative ml-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search data..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 focus:bg-white focus:border-india-saffron focus:ring-2 focus:ring-india-saffron/20 w-48 lg:w-64 text-sm transition-all"
              />
            </div>

            <a 
              href="https://github.com/zoyron/union-budget" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 p-2 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all shadow-sm"
              title="View on GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-4 pb-2">
             <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search budget data..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg bg-slate-100 border-none focus:ring-2 focus:ring-india-saffron/20"
              />
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" icon={PieChart} label="Allocations" onClick={() => setIsOpen(false)} />
            <NavLink to="/overview" icon={Home} label="Overview" onClick={() => setIsOpen(false)} />
            <NavLink to="/policies" icon={FileText} label="Policies" onClick={() => setIsOpen(false)} />
            <a 
              href="https://github.com/zoyron/union-budget" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium transition-colors"
            >
              <Github size={18} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};