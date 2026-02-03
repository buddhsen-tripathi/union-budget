import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FiscalDeficitSources } from '../../types';

interface FiscalDeficitSourcesChartProps {
  data: FiscalDeficitSources;
}

const COLORS = {
  marketBorrowings: '#3b82f6',
  securitiesAgainstSmallSavings: '#10b981',
  stateProvidentFunds: '#8b5cf6',
  otherInternalDebts: '#f59e0b',
  externalDebt: '#ef4444',
  drawDownCashBalance: '#64748b',
  shortTermBorrowing: '#ec4899',
};

const formatLakhCrore = (value: number): string => {
  if (Math.abs(value) >= 100000) {
    return `${(value / 100000).toFixed(2)}L Cr`;
  }
  if (Math.abs(value) >= 1000) {
    return `${(value / 1000).toFixed(0)}K Cr`;
  }
  return `${value} Cr`;
};

const formatFullCrore = (value: number): string => {
  if (Math.abs(value) >= 100000) {
    return `${(value / 100000).toFixed(2)} Lakh Crore`;
  }
  return `${Math.abs(value).toLocaleString('en-IN')} Crore`;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-slate-200">
        <p className="font-semibold text-slate-800">{data.name}</p>
        <p className="text-sm text-slate-600">
          {data.value < 0 ? '-' : ''}₹{formatFullCrore(data.value)}
        </p>
        <p className="text-xs text-slate-500">{data.percent?.toFixed(1)}% of Total</p>
      </div>
    );
  }
  return null;
};

export const FiscalDeficitSourcesChart: React.FC<FiscalDeficitSourcesChartProps> = ({ data }) => {
  const sourcesData = [
    {
      name: 'Market Borrowings',
      value: data.marketBorrowings,
      color: COLORS.marketBorrowings,
      percent: (data.marketBorrowings / data.total) * 100
    },
    {
      name: 'Small Savings',
      value: data.securitiesAgainstSmallSavings,
      color: COLORS.securitiesAgainstSmallSavings,
      percent: (data.securitiesAgainstSmallSavings / data.total) * 100
    },
    ...(data.shortTermBorrowing !== undefined && data.shortTermBorrowing !== 0 ? [{
      name: 'Short-term Borrowing',
      value: data.shortTermBorrowing,
      color: COLORS.shortTermBorrowing,
      percent: (data.shortTermBorrowing / data.total) * 100
    }] : []),
    {
      name: 'State Provident Funds',
      value: data.stateProvidentFunds,
      color: COLORS.stateProvidentFunds,
      percent: (data.stateProvidentFunds / data.total) * 100
    },
    {
      name: 'Other Internal Debts',
      value: data.otherInternalDebts,
      color: COLORS.otherInternalDebts,
      percent: (data.otherInternalDebts / data.total) * 100
    },
    {
      name: 'External Debt',
      value: data.externalDebt,
      color: COLORS.externalDebt,
      percent: (data.externalDebt / data.total) * 100
    },
    {
      name: 'Cash Balance Draw',
      value: data.drawDownCashBalance,
      color: COLORS.drawDownCashBalance,
      percent: (data.drawDownCashBalance / data.total) * 100
    },
  ].filter(item => item.value !== 0);

  // Sort by absolute value for better visualization
  const sortedData = [...sourcesData].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Financing Sources Breakdown</h3>
        <p className="text-sm text-slate-500 mb-4">
          Total Fiscal Deficit: <span className="font-semibold text-slate-700">₹{formatFullCrore(data.total)}</span>
        </p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                type="number"
                tickFormatter={(value) => formatLakhCrore(value)}
                tick={{ fontSize: 11, fill: '#64748b' }}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={100}
                tick={{ fontSize: 11, fill: '#64748b' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {sortedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Financing Details</h3>
        <div className="space-y-3">
          {sortedData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-2 px-3 rounded ${
                item.value < 0 ? 'bg-red-50' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className={`text-sm ${item.value < 0 ? 'text-red-600' : 'text-slate-600'}`}>
                  {item.name}
                </span>
              </div>
              <div className="text-right">
                <span className={`font-semibold ${item.value < 0 ? 'text-red-600' : 'text-slate-800'}`}>
                  {item.value < 0 ? '-' : ''}₹{formatLakhCrore(Math.abs(item.value))}
                </span>
                <span className="text-xs text-slate-500 ml-2">
                  ({Math.abs(item.percent).toFixed(1)}%)
                </span>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center py-3 bg-slate-800 text-white px-3 rounded-lg mt-4">
            <span className="text-sm font-medium">Total Fiscal Deficit</span>
            <span className="font-bold text-lg">₹{formatLakhCrore(data.total)}</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700">
            <strong>Note:</strong> Market borrowings typically form the largest source of deficit financing,
            followed by securities against small savings. Negative values indicate net repayments.
          </p>
        </div>
      </div>
    </div>
  );
};
