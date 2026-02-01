import React, { useState } from 'react';
import { budgetData } from '../data/budget-data';
import { CheckCircle2, Factory, Leaf, Building2, Wallet, SearchX, Filter } from 'lucide-react';
import { useAppStore } from '../store';

const PolicyIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Industry': return <Factory className="text-blue-500" size={24} />;
    case 'Agriculture': return <Leaf className="text-green-500" size={24} />;
    case 'Tax': return <Wallet className="text-orange-500" size={24} />;
    default: return <Building2 className="text-slate-500" size={24} />;
  }
};

export const Policies: React.FC = () => {
  const { searchQuery } = useAppStore();
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const years = ["All", "2026-27", "2025-26", "2024-25"];

  const filteredHighlights = budgetData.highlights.filter(h => {
    const matchesSearch = 
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.points.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesYear = selectedYear === "All" || h.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Policy Highlights & Reforms</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Major announcements across sectors focusing on the vision of <span className="font-semibold text-india-saffron">Viksit Bharat</span>.
        </p>
      </div>

      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <div className="inline-flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm whitespace-nowrap">
           {years.map(year => (
             <button
               key={year}
               onClick={() => setSelectedYear(year)}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                 selectedYear === year 
                   ? 'bg-slate-800 text-white shadow-sm' 
                   : 'text-slate-600 hover:bg-slate-50'
               }`}
             >
               {year}
             </button>
           ))}
        </div>
      </div>

      {filteredHighlights.length > 0 ? (
        <div className="grid gap-8">
          {filteredHighlights.map((highlight) => (
            <div key={highlight.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
               {/* Year Badge */}
              <div className="absolute top-0 right-0 bg-slate-100 px-3 py-1.5 rounded-bl-xl border-b border-l border-slate-200">
                <span className="text-xs font-bold text-slate-500">{highlight.year || '2026-27'}</span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <PolicyIcon category={highlight.category} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {highlight.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 pr-12">{highlight.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlight.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="text-india-green flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-slate-700">
                          {searchQuery ? point.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => 
                            part.toLowerCase() === searchQuery.toLowerCase() ? (
                              <span key={i} className="bg-yellow-200 text-slate-900 px-0.5 rounded">{part}</span>
                            ) : (
                              part
                            )
                          ) : point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-slate-50 p-4 rounded-full mb-4">
            <SearchX className="text-slate-400" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">No matching policies found</h3>
          <p className="text-slate-500 mt-2 max-w-sm">
            Try adjusting your search terms or year filter.
          </p>
        </div>
      )}
    </div>
  );
};