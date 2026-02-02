import React from 'react';
import { useAppStore } from '../store';
import { ArrowUpDown, ArrowUp, ArrowDown, Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { BudgetAllocation } from '../types';
import { budgetData } from '../data';
import { formatCrore } from '../utils/format';

interface Props {
  data?: BudgetAllocation[]; // Optional now, if omitted we build comparison data
  year?: string;
}

interface ComparisonRow {
  ministry: string;
  category: string;
  amount2024: number;
  amount2025: number;
  amount2026: number;
  changePercent: number;
}

export const AllocationsTable: React.FC<Props> = ({ data: initialData, year }) => {
  const { searchQuery, sortField, sortOrder, setSort } = useAppStore();

  // If specific data is passed (like from a filtered view), use it. 
  // Otherwise, build the comparison dataset.
  // The user wants "Year on Year comparison directly". 
  // We will prioritize building a comparison view if we have access to global budgetData.
  
  const buildComparisonData = (): ComparisonRow[] => {
    const map = new Map<string, ComparisonRow>();

    // Helper to process a list
    const processList = (list: BudgetAllocation[], yearKey: 'amount2024' | 'amount2025' | 'amount2026') => {
      list.forEach(item => {
        if (!map.has(item.ministry)) {
          map.set(item.ministry, {
            ministry: item.ministry,
            category: item.category,
            amount2024: 0,
            amount2025: 0,
            amount2026: 0,
            changePercent: 0
          });
        }
        const row = map.get(item.ministry)!;
        row[yearKey] = item.amountCrore;
      });
    };

    if (budgetData.historicalAllocations) {
      processList(budgetData.historicalAllocations["2024-25"] || [], 'amount2024');
      processList(budgetData.historicalAllocations["2025-26"] || [], 'amount2025');
    }
    processList(budgetData.allocations, 'amount2026');

    // Calculate Change
    return Array.from(map.values()).map(row => {
      if (row.amount2025 > 0) {
        row.changePercent = ((row.amount2026 - row.amount2025) / row.amount2025) * 100;
      }
      return row;
    });
  };

  const comparisonData = buildComparisonData();

  const handleSort = (field: string) => {
    // specialized sort handling for the new fields if needed, 
    // or map 'amountCrore' to 'amount2026' for backward compatibility
    let targetField = field;
    if (field === 'amountCrore') targetField = 'amount2026';
    
    if (sortField === targetField) {
      setSort(targetField as any, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSort(targetField as any, 'desc');
    }
  };

  // Filter and Sort
  const filteredData = comparisonData
    .filter(item => 
      item.ministry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // safe casting for dynamic access
      const field = (sortField === 'amountCrore' ? 'amount2026' : sortField) as keyof ComparisonRow;
      const aValue = a[field];
      const bValue = b[field];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

  const downloadCSV = () => {
    const headers = ["Ministry", "Category", "2024-25 (Cr)", "2025-26 (Cr)", "2026-27 (Cr)", "Change (%)"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(row => 
        `"${row.ministry}","${row.category}",${row.amount2024},${row.amount2025},${row.amount2026},${row.changePercent.toFixed(2)}`
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "budget_allocations_comparison.csv";
    link.click();
  };

  const renderTrendIcon = (percent: number) => {
    if (Math.abs(percent) < 0.5) return <Minus size={14} className="text-slate-400" />;
    return percent > 0 
      ? <ArrowUp size={14} className="text-emerald-500" />
      : <ArrowDown size={14} className="text-red-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
           <h2 className="text-lg font-bold text-slate-900">Ministry Allocations (Year-on-Year)</h2>
           <p className="text-sm text-slate-500">Comparison across FY 2024-25, 2025-26, and 2026-27</p>
        </div>
        <button 
          onClick={downloadCSV}
          className="flex items-center space-x-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
        >
          <Download size={16} />
          <span>Export CSV</span>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => handleSort('ministry')}>
                <div className="flex items-center space-x-1">
                  <span>Ministry</span>
                  {sortField === 'ministry' && (
                    sortOrder === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                  )}
                </div>
              </th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
              
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right cursor-pointer hover:bg-slate-100 transition-colors hidden md:table-cell" onClick={() => handleSort('amount2024')}>
                 <div className="flex items-center justify-end space-x-1">
                   <span>2024-25 (₹ Cr)</span>
                   {sortField === 'amount2024' && (sortOrder === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                </div>
              </th>

              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => handleSort('amount2025')}>
                 <div className="flex items-center justify-end space-x-1">
                   <span>2025-26 (₹ Cr)</span>
                   {sortField === 'amount2025' && (sortOrder === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                </div>
              </th>

              <th className="p-4 text-xs font-semibold text-slate-900 uppercase tracking-wider text-right cursor-pointer hover:bg-slate-100 transition-colors border-l border-slate-200 pl-6" onClick={() => handleSort('amount2026')}>
                <div className="flex items-center justify-end space-x-1">
                   <span>2026-27 BE (₹ Cr)</span>
                   {sortField === 'amount2026' || sortField === 'amountCrore' ? (
                    sortOrder === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                  ) : null}
                </div>
              </th>
              
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.map((item, index) => {
              return (
                <tr key={index} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-4">
                    <div className="font-medium text-slate-900 group-hover:text-india-blue transition-colors">
                      {item.ministry}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${item.category === 'Infrastructure' ? 'bg-blue-100 text-blue-800' :
                        item.category === 'Social' ? 'bg-green-100 text-green-800' :
                        item.category === 'Defense' ? 'bg-orange-100 text-orange-800' :
                        item.category === 'Debt' ? 'bg-red-100 text-red-800' :
                        item.category === 'Subsidies' ? 'bg-yellow-100 text-yellow-800' :
                        item.category === 'Economic' ? 'bg-purple-100 text-purple-800' :
                        'bg-slate-100 text-slate-800'}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono text-slate-500 text-sm hidden md:table-cell">
                    {formatCrore(item.amount2024, { showSymbol: false })}
                  </td>
                  <td className="p-4 text-right font-mono text-slate-600 text-sm">
                    {formatCrore(item.amount2025, { showSymbol: false })}
                  </td>
                  <td className="p-4 text-right font-mono text-slate-900 font-medium border-l border-slate-200 pl-6">
                    {formatCrore(item.amount2026, { showSymbol: false })}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                       {renderTrendIcon(item.changePercent)}
                       <span className={`text-xs font-medium ${
                         item.changePercent > 0 ? 'text-emerald-600' : 
                         item.changePercent < 0 ? 'text-red-600' : 'text-slate-500'
                       }`}>
                         {Math.abs(item.changePercent).toFixed(1)}%
                       </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};