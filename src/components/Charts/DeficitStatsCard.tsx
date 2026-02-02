import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { DeficitStats } from '../../types';

interface DeficitStatsCardProps {
  data: DeficitStats;
  previousYearData?: DeficitStats;
}

const formatCrore = (value: number): string => {
  if (value >= 100000) {
    return `${(value / 100000).toFixed(2)} L Cr`;
  }
  return `${(value / 1000).toFixed(1)} K Cr`;
};

interface DeficitItemProps {
  label: string;
  value: number;
  percentGDP: number;
  previousPercentGDP?: number;
}

const DeficitItem: React.FC<DeficitItemProps> = ({ label, value, percentGDP, previousPercentGDP }) => {
  const change = previousPercentGDP ? percentGDP - previousPercentGDP : null;
  const isImproved = change !== null && change < 0;

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</h3>
        {change !== null && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${
            isImproved ? 'text-emerald-600 bg-emerald-50' : 'text-red-500 bg-red-50'
          }`}>
            {isImproved ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
            {Math.abs(change).toFixed(1)}%
          </span>
        )}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-slate-900">
            {percentGDP}%
          </div>
          <div className="text-xs text-slate-400 mt-1">of GDP</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-slate-700">
            {formatCrore(value)}
          </div>
          <div className="text-xs text-slate-400">in value</div>
        </div>
      </div>
    </div>
  );
};

export const DeficitStatsCard: React.FC<DeficitStatsCardProps> = ({ data, previousYearData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <DeficitItem
        label="Fiscal Deficit"
        value={data.fiscalDeficit.value}
        percentGDP={data.fiscalDeficit.percentGDP}
        previousPercentGDP={previousYearData?.fiscalDeficit.percentGDP}
      />
      <DeficitItem
        label="Revenue Deficit"
        value={data.revenueDeficit.value}
        percentGDP={data.revenueDeficit.percentGDP}
        previousPercentGDP={previousYearData?.revenueDeficit.percentGDP}
      />
      <DeficitItem
        label="Primary Deficit"
        value={data.primaryDeficit.value}
        percentGDP={data.primaryDeficit.percentGDP}
        previousPercentGDP={previousYearData?.primaryDeficit.percentGDP}
      />
      <DeficitItem
        label="Effective Revenue Deficit"
        value={data.effectiveRevenueDeficit.value}
        percentGDP={data.effectiveRevenueDeficit.percentGDP}
        previousPercentGDP={previousYearData?.effectiveRevenueDeficit.percentGDP}
      />
    </div>
  );
};
