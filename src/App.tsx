import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Policies } from './pages/Policies';
import { AllocationExplorer } from './pages/AllocationExplorer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/" element={<AllocationExplorer />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-slate-200 mt-12">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs text-slate-400">
              Data sourced from "Key Features of Budget 2026-2027" document. 
              <br/>This is a visualization demo and not an official government website.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;