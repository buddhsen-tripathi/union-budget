import React, { useState } from 'react';
import { StatsCard } from '../components/StatsCard';
import { FiscalChart } from '../components/Charts/FiscalChart';
import { RupeeChart } from '../components/Charts/RupeeChart';
import { BudgetTrendChart } from '../components/Charts/BudgetTrendChart';
import { AllocationsTable } from '../components/AllocationsTable';
import { Download, AlertCircle, Calendar } from 'lucide-react';
import { useAppStore } from '../store';
import { budgetData } from '../data/budget-data';

export const Dashboard: React.FC = () => {
  const { searchQuery } = useAppStore();
  const [selectedYear, setSelectedYear] = useState<string>("2026-27");

  const years = ["2026-27", "2025-26", "2024-25"];

  // Resolve data based on selected year
  const currentAllocations = selectedYear === "2026-27" 
    ? budgetData.allocations 
    : budgetData.historicalAllocations?.[selectedYear] || [];

  const currentRupeeComesFrom = selectedYear === "2026-27"
    ? budgetData.rupeeComesFrom
    : budgetData.historicalRupeeComesFrom?.[selectedYear] || [];

  const currentRupeeGoesTo = selectedYear === "2026-27"
    ? budgetData.rupeeGoesTo
    : budgetData.historicalRupeeGoesTo?.[selectedYear] || [];

  const currentStats = selectedYear === "2026-27"
    ? { 
        fiscalDeficit: "4.3%", revenueDeficit: "2.8%", 
        desc1: "Target for 2026-27 (BE)", desc2: "Consolidated Estimate"
      }
    : selectedYear === "2025-26"
    ? { 
        fiscalDeficit: "4.5%", revenueDeficit: "2.6%", 
        desc1: "Revised Estimate", desc2: "Revised Estimate"
      }
    : { 
        fiscalDeficit: "4.9%", revenueDeficit: "1.8%", 
        desc1: "Actuals / BE", desc2: "Actuals / BE"
      };

  // Filter and sort allocations based on search
  const filteredAllocations = currentAllocations
    .filter(m => m.ministry.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.amountCrore - a.amountCrore);

  // Take top 5 or less
  const topMinistries = filteredAllocations.slice(0, 5);
  
  // Calculate max value for relative bar width (if no search results, avoid division by zero)
  const maxValue = topMinistries.length > 0 ? topMinistries[0].amountCrore : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Budget at a Glance</h2>
          <p className="text-slate-500 mt-1">Key figures and fiscal indicators for FY {selectedYear}</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative inline-block text-left">
            <div className="flex bg-white border border-slate-300 rounded-md shadow-sm">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 text-sm font-medium focus:outline-none first:rounded-l-md last:rounded-r-md border-r last:border-r-0 border-slate-300 transition-colors ${
                    selectedYear === year 
                      ? 'bg-india-blue text-white' 
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 transition-all">
            <Download className="mr-2 h-4 w-4" /> PDF
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Fiscal Deficit" 
          value={currentStats.fiscalDeficit} 
          trend="down" 
          trendValue="Target" 
          description={currentStats.desc1} 
        />
        <StatsCard 
          title="Revenue Deficit" 
          value={currentStats.revenueDeficit} 
          trend="neutral" 
          description={currentStats.desc2} 
        />
        <StatsCard 
          title="Top Allocation" 
          value={topMinistries.length > 0 ? `₹${(topMinistries[0].amountCrore / 100000).toFixed(2)} L Cr` : "N/A"} 
          trend="up" 
          trendValue="Highest" 
          description={topMinistries.length > 0 ? topMinistries[0].ministry : "Sector"} 
        />
        <StatsCard 
          title="GDP Growth" 
          value="~7%" 
          trend="up" 
          description="Projected Real GDP" 
        />
      </div>

      {/* Charts Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Receipts vs Expenditure Trends</h3>
          <BudgetTrendChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            {searchQuery ? `Top Matches (${selectedYear})` : `Top 5 Ministries (${selectedYear})`}
          </h3>
          
          {topMinistries.length > 0 ? (
            <div className="space-y-4 flex-1">
              {topMinistries.map((m, i) => {
                const widthPercentage = (m.amountCrore / maxValue) * 100;
                const displayAmount = (m.amountCrore / 100000).toFixed(2); // Convert to Lakh Crore
                
                return (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{m.ministry}</span>
                      <span className="text-slate-500">₹{displayAmount}L Cr</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-india-blue h-2 rounded-full transition-all duration-500 ease-out" 
                        style={{width: `${widthPercentage}%`}}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 py-8">
              <AlertCircle size={32} className="mb-2 opacity-50" />
              <p className="text-sm">No ministries match your search.</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
            <p className="text-xs text-orange-800 font-medium leading-relaxed">
              Comparison across years shows a consistent focus on Defence and Infrastructure sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Deficit Trends (% of GDP)</h3>
          <FiscalChart />
      </div>

      {/* Rupee Movement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Rupee Comes From ({selectedYear})</h3>
          <p className="text-sm text-slate-500 mb-4">Sources of Revenue</p>
          <RupeeChart data={currentRupeeComesFrom} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Rupee Goes To ({selectedYear})</h3>
          <p className="text-sm text-slate-500 mb-4">Major Expenditure Heads</p>
          <RupeeChart data={currentRupeeGoesTo} />
        </div>
      </div>
      
      {/* Table Section */}
      <AllocationsTable data={currentAllocations} year={selectedYear} />
    </div>
  );
};