import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  description: string;
  /** YoY change value (e.g., "-0.4%" or "+₹0.5 L Cr") */
  yoyChange?: string;
  /** Whether decrease is positive (e.g., for deficits) */
  decreaseIsGood?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  trend,
  trendValue,
  description,
  yoyChange,
  decreaseIsGood = false,
}) => {
  // Determine if the change is positive or negative for coloring
  const isNegativeChange = yoyChange?.startsWith('-');
  const isPositiveChange = yoyChange?.startsWith('+');

  // For deficits, decrease is good (green), increase is bad (red)
  // For allocations, increase is good (green), decrease is bad (red)
  const getChangeColor = () => {
    if (!yoyChange || yoyChange === '0' || yoyChange === '-') return 'text-slate-500';
    if (decreaseIsGood) {
      return isNegativeChange ? 'text-emerald-600' : 'text-red-500';
    }
    return isPositiveChange ? 'text-emerald-600' : 'text-red-500';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</h3>
        {yoyChange && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getChangeColor()} bg-slate-50`}>
            {isNegativeChange && <ArrowDownRight size={12} className="inline mr-0.5" />}
            {isPositiveChange && <ArrowUpRight size={12} className="inline mr-0.5" />}
            {yoyChange} YoY
          </span>
        )}
      </div>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        {trend && trendValue && (
          <span className={`ml-2 flex items-baseline text-sm font-semibold ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500'
          }`}>
            {trend === 'up' && <ArrowUpRight size={16} className="self-center flex-shrink-0 text-green-500 mr-1" />}
            {trend === 'down' && <ArrowDownRight size={16} className="self-center flex-shrink-0 text-green-500 mr-1" />}
            {trendValue}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
};