import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Policies } from './pages/Policies';
import { AllocationExplorer } from './pages/AllocationExplorer';
import { ExternalLink, Github } from 'lucide-react';

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
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
            <p className="text-center text-xs text-slate-500">
              <a
                href="https://www.indiabudget.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-700 transition-colors"
              >
                <span>Data sourced from indiabudget.gov.in</span>
                <ExternalLink size={12} />
              </a>
              <br />This is a visualization demo and not an official government website.
            </p>
            <a
              href="https://github.com/zoyron/union-budget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;