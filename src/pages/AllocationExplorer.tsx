import React, { useState } from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';
import { budgetData } from '../data';
import { useAppStore } from '../store';
import { Download, Calendar } from 'lucide-react';
import { formatCrore } from '../utils/format';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-100 shadow-xl rounded-lg z-50">
        <p className="font-bold text-slate-900">{payload[0].payload.name}</p>
        <p className="text-india-blue font-mono">{formatCrore(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

// Custom Content for Treemap to handle text overflow nicely
const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, payload, name, value } = props;

  // Simple color generation based on index or category could go here
  // Using a monochromatic scale for cleanliness or category based
  const colors = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6'
  ];
  const bg = colors[index % colors.length];

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: bg,
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {width > 50 && height > 30 ? (
        <foreignObject x={x} y={y} width={width} height={height}>
          <div className="w-full h-full p-2 flex flex-col justify-center items-center text-white text-center overflow-hidden">
             <span className="font-bold text-xs leading-tight">{name}</span>
             {height > 50 && <span className="text-[10px] mt-1 opacity-90">{formatCrore(value, { compact: true })}</span>}
          </div>
        </foreignObject>
      ) : null}
    </g>
  );
};

export const AllocationExplorer: React.FC = () => {
    const { searchQuery } = useAppStore();
    const [selectedYear, setSelectedYear] = useState<string>("2026-27");
    const years = ["2026-27", "2025-26", "2024-25"];

    const currentAllocations = selectedYear === "2026-27" 
      ? budgetData.allocations 
      : budgetData.historicalAllocations?.[selectedYear] || [];

    // Prepare data for Treemap (needs children structure usually, but flat works too for simple view)
    const treeMapData = currentAllocations
        .filter(i => i.ministry.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(item => ({
            name: item.ministry,
            size: item.amountCrore,
            category: item.category
        }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-4rem)] flex flex-col">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
            <h2 className="text-2xl font-bold text-slate-900">Allocation Explorer</h2>
            <p className="text-slate-500">Visualizing the relative size of ministry budgets.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
             <div className="flex bg-white border border-slate-300 rounded-md shadow-sm h-9 overflow-x-auto max-w-full">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 text-xs font-medium focus:outline-none first:rounded-l-md last:rounded-r-md border-r last:border-r-0 border-slate-300 transition-colors whitespace-nowrap ${
                    selectedYear === year 
                      ? 'bg-india-blue text-white' 
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400 hidden sm:flex">
                <span>Size represents Allocation Amount</span>
            </div>
        </div>
       </div>

       <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-4 overflow-hidden relative">
          {treeMapData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    data={treeMapData}
                    dataKey="size"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    content={<CustomizedContent />}
                    animationDuration={400}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Treemap>
            </ResponsiveContainer>
          ) : (
             <div className="flex items-center justify-center h-full text-slate-400">
                No data matches your search.
             </div>
          )}
       </div>
    </div>
  );
};