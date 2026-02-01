import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  description: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, trendValue, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        {trend && (
          <span className={`ml-2 flex items-baseline text-sm font-semibold ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500'
          }`}>
            {trend === 'up' && <ArrowUpRight size={16} className="self-center flex-shrink-0 text-green-500 mr-1" />}
            {trend === 'down' && <ArrowDownRight size={16} className="self-center flex-shrink-0 text-green-500 mr-1" />} 
            {/* Note: In fiscal deficit, down is usually good, so we color visually based on context elsewhere, but here stick to standard mapping unless specified */}
            {trendValue}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
};