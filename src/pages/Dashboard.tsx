import React, { useState } from 'react';
import { FiscalChart } from '../components/Charts/FiscalChart';
import { RupeeChart } from '../components/Charts/RupeeChart';
import { BudgetTrendChart } from '../components/Charts/BudgetTrendChart';
import { DeficitStatsCard } from '../components/Charts/DeficitStatsCard';
import { ReceiptsChart } from '../components/Charts/ReceiptsChart';
import { ExpenditureStructureChart } from '../components/Charts/ExpenditureStructureChart';
import { FiscalDeficitSourcesChart } from '../components/Charts/FiscalDeficitSourcesChart';
import { AllocationsTable } from '../components/AllocationsTable';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { useAppStore } from '../store';
import { budgetData } from '../data';
import { formatCrore } from '../utils/format';

export const Dashboard: React.FC = () => {
  const { searchQuery } = useAppStore();
  const [selectedYear, setSelectedYear] = useState<string>("2026-27");

  const years = ["2026-27", "2025-26", "2024-25", "2023-24"];

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

  // Get deficit stats, receipts, and expenditure data
  const currentDeficitStats = budgetData.historicalDeficitStats?.[selectedYear];
  const getPrevYear = (year: string): string | undefined => {
    const map: Record<string, string> = { "2026-27": "2025-26", "2025-26": "2024-25", "2024-25": "2023-24" };
    return map[year];
  };
  const previousDeficitStats = getPrevYear(selectedYear)
    ? budgetData.historicalDeficitStats?.[getPrevYear(selectedYear)!]
    : undefined;
  const currentReceipts = budgetData.historicalReceipts?.[selectedYear];
  const currentExpenditure = budgetData.historicalExpenditure?.[selectedYear];
  const currentFiscalDeficitSources = budgetData.historicalFiscalDeficitSources?.[selectedYear];

  // Get fiscal data for selected year and previous year
  const fiscalData = budgetData.fiscalTrends.reduce((acc, item) => {
    acc[item.year] = item;
    return acc;
  }, {} as Record<string, typeof budgetData.fiscalTrends[0]>);

  const yearMapping: Record<string, { prev: string | undefined; fiscalDesc: string; revenueDesc: string }> = {
    "2026-27": { prev: "2025-26", fiscalDesc: "Budget Estimate", revenueDesc: "Budget Estimate" },
    "2025-26": { prev: "2024-25", fiscalDesc: "Budget Estimate", revenueDesc: "Budget Estimate" },
    "2024-25": { prev: "2023-24", fiscalDesc: "Budget Estimate", revenueDesc: "Budget Estimate" },
    "2023-24": { prev: undefined, fiscalDesc: "Budget Estimate", revenueDesc: "Budget Estimate" },
  };

  const currentFiscal = fiscalData[selectedYear] || fiscalData["2026-27 (BE)"];
  const prevYear = yearMapping[selectedYear]?.prev;
  const prevFiscal = prevYear ? fiscalData[prevYear] : null;

  // Calculate YoY changes
  const fiscalDeficitYoY = prevFiscal
    ? (currentFiscal.fiscalDeficit - prevFiscal.fiscalDeficit).toFixed(1)
    : null;
  const revenueDeficitYoY = prevFiscal
    ? (currentFiscal.revenueDeficit - prevFiscal.revenueDeficit).toFixed(1)
    : null;

  const formatYoYPercent = (val: string | null) => {
    if (!val) return undefined;
    const num = parseFloat(val);
    if (num === 0) return "0%";
    return num > 0 ? `+${val}%` : `${val}%`;
  };

  const currentStats = {
    fiscalDeficit: `${currentFiscal?.fiscalDeficit || 4.3}%`,
    revenueDeficit: `${currentFiscal?.revenueDeficit || 2.8}%`,
    fiscalDeficitYoY: formatYoYPercent(fiscalDeficitYoY),
    revenueDeficitYoY: formatYoYPercent(revenueDeficitYoY),
    fiscalDesc: yearMapping[selectedYear]?.fiscalDesc || "Estimate",
    revenueDesc: yearMapping[selectedYear]?.revenueDesc || "Estimate",
  };

  // Filter and sort allocations based on search
  const filteredAllocations = currentAllocations
    .filter(m => m.ministry.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.amountCrore - a.amountCrore);

  // Take top 7 or less
  const topMinistries = filteredAllocations.slice(0, 7);

  // Calculate max value for relative bar width (if no search results, avoid division by zero)
  const maxValue = topMinistries.length > 0 ? topMinistries[0].amountCrore : 1;

  // Get total allocation for selected year from pre-calculated data
  const totalAllocation = budgetData.historicalTotalAllocations?.[selectedYear] || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Budget at a Glance</h2>
          <p className="text-slate-500 mt-1">Key figures and fiscal indicators for FY {selectedYear}</p>
        </div>
        {/* Mobile: Dropdown */}
        <div className="md:hidden relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none bg-white border border-slate-300 rounded-md shadow-sm px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-india-blue focus:border-india-blue"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                FY {year}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
        </div>

        {/* Desktop: Button Group */}
        <div className="hidden md:flex bg-white border border-slate-300 rounded-md shadow-sm">
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

      {/* Total Budget Allocation Banner */}
      <div className="bg-gradient-to-r from-india-blue to-blue-700 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">Total Budget Allocation</p>
            <p className="text-3xl md:text-4xl font-bold mt-1">~{formatCrore(totalAllocation)}</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">FY {selectedYear}</p>
          </div>
        </div>
      </div>

      {/* Deficit Stats Hero Section */}
      {currentDeficitStats && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Deficit Indicators ({selectedYear})</h3>
          <DeficitStatsCard data={currentDeficitStats} previousYearData={previousDeficitStats} />
        </div>
      )}

      {/* Fiscal Deficit Financing Sources */}
      {currentFiscalDeficitSources && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Sources of Financing Fiscal Deficit ({selectedYear})</h3>
          <FiscalDeficitSourcesChart data={currentFiscalDeficitSources} />
        </div>
      )}

      {/* Receipts Breakdown */}
      {currentReceipts && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue & Receipts ({selectedYear})</h3>
          <ReceiptsChart data={currentReceipts} />
        </div>
      )}

      {/* Expenditure Structure */}
      {currentExpenditure && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Expenditure Structure ({selectedYear})</h3>
          <ExpenditureStructureChart data={currentExpenditure} />
        </div>
      )}

      {/* Charts Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Receipts vs Expenditure Trends</h3>
          <BudgetTrendChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            {searchQuery ? `Top Matches (${selectedYear})` : `Top 7 Expenditure Heads (${selectedYear})`}
          </h3>
          
          {topMinistries.length > 0 ? (
            <div className="space-y-4 flex-1">
              {topMinistries.map((m, i) => {
                const widthPercentage = (m.amountCrore / maxValue) * 100;

                return (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{m.ministry}</span>
                      <span className="text-slate-500">{formatCrore(m.amountCrore, { compact: true })}</span>
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
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Deficit Trends (% of GDP)</h3>
          <FiscalChart />
      </div>

      {/* Rupee Movement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Sources of Revenue ({selectedYear})</h3>
          <RupeeChart data={currentRupeeComesFrom} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Uses of Revenue ({selectedYear})</h3>
          <RupeeChart data={currentRupeeGoesTo} />
        </div>
      </div>
      
      {/* Table Section */}
      <AllocationsTable data={currentAllocations} year={selectedYear} />
    </div>
  );
};